const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/lib/parts.ts');
const backupPath = filePath + '.bak';

// Restore from backup if exists
if (fs.existsSync(backupPath)) {
    console.log(`Restoring from backup ${backupPath}`);
    fs.copyFileSync(backupPath, filePath);
} else {
    fs.copyFileSync(filePath, backupPath);
    console.log(`Backup created at ${backupPath}`);
}

const content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

const newLines = [];
let insideObject = false;
let capturingRelatedParts = false;
let capturedStrings = new Set();
// Track if we saw any relatedParts at all (even empty) in the current object
let sawRelatedParts = false;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Check for Object Start (Indent 2)
    // Matches: "  "KEY": {"
    if (line.match(/^\s{2}"[^"]+":\s*\{/)) {
        insideObject = true;
        sawRelatedParts = false; 
        capturedStrings.clear();
        newLines.push(line);
        continue;
    }

    if (insideObject) {
         // Check for Object End (Indent 2)
         // Matches: "  },"
         if (line.match(/^\s{2}\},/)) {
             // End of object. Write merged relatedParts here.
             if (sawRelatedParts) {
                 const uniqueParts = Array.from(capturedStrings);
                 newLines.push(`    relatedParts: [`);
                 uniqueParts.forEach(p => newLines.push(`      "${p}",`));
                 newLines.push(`    ],`);
             }
             
             insideObject = false;
             capturedStrings.clear();
             sawRelatedParts = false;
             newLines.push(line);
             continue;
         }

         // Check relatedParts start
         if (line.trim().startsWith('relatedParts:')) {
             capturingRelatedParts = true;
             sawRelatedParts = true;
             
             const matches = line.match(/"([^"]+)"/g);
             if (matches) { 
                 matches.forEach(m => capturedStrings.add(m.replace(/"/g, ''))); 
             }
             
             if (line.includes('],') || line.trim() === '],') {
                 capturingRelatedParts = false;
             }
             continue; // Don't write this line
         }

         if (capturingRelatedParts) {
             const matches = line.match(/"([^"]+)"/g);
             if (matches) { 
                 matches.forEach(m => capturedStrings.add(m.replace(/"/g, ''))); 
             }
             
             if (line.includes('],') || line.trim() === '],') {
                 capturingRelatedParts = false;
             }
             continue; // Don't write this line
         }

         newLines.push(line);
    } else {
        newLines.push(line);
    }
}

const newContent = newLines.join('\n');
fs.writeFileSync(filePath, newContent, 'utf8');
console.log('Fixed parts.ts structure by merging all relatedParts within objects');
