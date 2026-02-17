import fs from 'fs';
import path from 'path';

// Define the path to parts.ts
const PARTS_FILE = path.join(process.cwd(), 'src', 'lib', 'parts.ts');

// Read the file logic (we can't import because of TS/Node quirks without config)
// So we will read the file as a string, extract the JSON object, modify it, and write it back.

async function main() {
  console.log("🔍 Reading parts.ts...");
  const fileContent = fs.readFileSync(PARTS_FILE, 'utf-8');

  // Regex to extract the PARTS_DATABASE object contents
  // We look for 'export const PARTS_DATABASE: Record<string, PartAuditData> = {' and the closing '};'
  const startMarker = 'export const PARTS_DATABASE: Record<string, PartAuditData> = {';
  const startIndex = fileContent.indexOf(startMarker);

  if (startIndex === -1) {
    console.error("❌ Could not find PARTS_DATABASE definition.");
    process.exit(1);
  }

  const jsonStart = startIndex + startMarker.length;
  // Find the last closing brace before the end of file (assuming it's the object close)
  // This is a bit risky if there are other exports, but usually this is the big object.
  // A safer way is to assume the object ends at the last '};' line.
  
  // Actually, we can just regex the content between the start marker and the end of the file.
  // But we need to parse it. 
  
  // STRATEGY B: Parsing via "eval" is dangerous but effective for this specific "data file" structure.
  // However, since it's TS, it might have type annotations inside? No, the object itself is value-level JS.
  // The only issue is if keys are not quoted or comments exist.
  // From previous views, keys are quoted: "1756-L61": { ... }
  // Comments might exist.
  
  // STRATEGY C: Regex Replacements line-by-line is too hard for logic.
  // STRATEGY D: Import using a dynamic import? No, file extension is .ts.

  // STRATEGY E: Robust Text Processing.
  // 1. Extract the object body string.
  // 2. Use a "dirty parser" (Function) to eval it if it's valid JS syntax (which TS object literals usually are).
  
  const objectContent = fileContent.substring(jsonStart).trim();
  // Remove the last semicolon if present
  const cleanupContent = objectContent.replace(/};\s*$/, '}');
  
  // Let's try to parse it.
  let db: any;
  try {
    // We wrap it in parentheses to make it an expression
    // We need to strip comments first? Or use a permissive parser?
    // Node's `eval` handle simple object literals fine.
    // CAUTION: This executes code. Only run on trusted local files.
    db = eval('(' + cleanupContent + ')');
  } catch (e) {
    console.error("❌ Failed to parse PARTS_DATABASE via eval. Syntax might be too complex (comments/types).");
    console.error(e);
    process.exit(1);
  }

  console.log(`✅ Database loaded with ${Object.keys(db).length} parts.`);

  // LOGIC: Create relationships
  const parts = Object.values(db) as any[];
  const updates = 0;

  // Group by Series (from specs) and Manufacturer
  // Dictionary: GroupKey -> PartID[]
  const groups: Record<string, string[]> = {};

  parts.forEach(p => {
    // Extract Series from Specs
    const seriesSpec = p.specs.find((s: any) => s.label === "Series");
    let groupKey = "Generic";
    
    if (seriesSpec) {
      groupKey = `${p.manufacturer}-${seriesSpec.value}`;
    } else {
      // Fallback to Manufacturer + System
      groupKey = `${p.manufacturer}-${p.system}`;
    }
    
    if (!groups[groupKey]) groups[groupKey] = [];
    groups[groupKey].push(p.id);
  });

  console.log(`🧩 Found ${Object.keys(groups).length} unique clusters.`);

  // Assign related parts
  parts.forEach((p, index) => {
    // Skipping if manually set (but user said "Precise" and "Identical" concerns, 
    // maybe we should overwrite to ensure consistency? 
    // User said "Yes, please do it". Let's preserve existing if valid, or merge?)
    // Actually, let's purely additive or overwrite defaults. 
    // Let's overwrite to ensure the "Graph" is consistent for everyone.

    const seriesSpec = p.specs.find((s: any) => s.label === "Series");
    let groupKey = seriesSpec ? `${p.manufacturer}-${seriesSpec.value}` : `${p.manufacturer}-${p.system}`;
    
    const siblings = groups[groupKey].filter(id => id !== p.id);
    
    // Select up to 4 random siblings
    const selected = [];
    if (siblings.length > 0) {
      // Shuffle
      const shuffled = siblings.sort(() => 0.5 - Math.random());
      selected.push(...shuffled.slice(0, 4));
    }

    // If no siblings (rare), try same manufacturer
    if (selected.length === 0) {
       const cousins = parts.filter(c => c.manufacturer === p.manufacturer && c.id !== p.id);
       const shuffled = cousins.sort(() => 0.5 - Math.random());
       selected.push(...shuffled.slice(0, 4));
    }

    p.relatedParts = selected;
  });

  console.log("🔗 Relationships generated. Re-serializing...");

  // Serialize back to TS string
  // formatting is important to keep file readable
  const newObjectString = JSON.stringify(db, null, 2);
  
  // Reconstruct file
  // We need to be careful: JSON.stringify keys are always quoted. 
  // In the original file keys might be quoted (which they are).
  // But standard JSON.stringify produces valid JS object syntax compatibility.
  
  const preAmble = fileContent.substring(0, jsonStart);
  
  // Check if we need to fix formatting (remove quotes from keys if desired? No, quotes are fine in TS)
  
  const finalContent = preAmble + newObjectString + ";\n";

  fs.writeFileSync(PARTS_FILE, finalContent, 'utf-8');
  console.log("💾 parts.ts updated successfully!");
}

main().catch(console.error);
