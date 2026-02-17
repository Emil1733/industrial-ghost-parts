
const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '../src/lib/parts.ts');

console.log(`Reading ${targetFile}...`);
let content = fs.readFileSync(targetFile, 'utf8');

// The incorrect pattern looks like:
// specs: [
//   {
//     label: "Registry Date",
//     value: "2026-02-14",
//     relatedParts: ["..."],
//   },
// ],

// We want to transform it to:
// specs: [
//   {
//     label: "Registry Date",
//     value: "2026-02-14",
//   },
// ],
// relatedParts: ["..."],

// Regex Explanation:
// 1. Match the start of the specs array and the first object up to "value: ...,"
// 2. Capture the "relatedParts" line(s).
// 3. Match the closing of the object and array.
// 4. Replace by moving relatedParts after the closing array bracket.

const regex = /(specs:\s*\[\s*\{\s*label: "Registry Date",\s*value: "2026-02-14",)(\s*relatedParts: \[[\s\S]*?\],)(\s*\},?\s*\]?,)/g;

let matchCount = 0;
const newContent = content.replace(regex, (match, p1, p2, p3) => {
    matchCount++;
    // p1 = specs: [ ... value: "...",
    // p2 = relatedParts: [...],
    // p3 = \n      }, \n    ],
    
    // We want to return:
    // p1 + p3 + \n    p2
    
    // Adjust indentation of p2 if needed.
    // p2 likely has 4 spaces indent if on same line, or newline + indent.
    // The target location (root of object) usually has 4 spaces indentation in this file.
    
    // Clean up p2: remove leading newlines if any
    let cleanP2 = p2.replace(/^\s+/, '');
    
    return `${p1}${p3}\n    ${cleanP2}`;
});

if (matchCount > 0) {
    console.log(`Found and fixed ${matchCount} occurrences.`);
    fs.writeFileSync(targetFile, newContent);
    console.log("File updated successfully.");
} else {
    console.log("No occurrences found to fix. Check regex or file content.");
}
