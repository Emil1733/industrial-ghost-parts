const fs = require('fs');
const pdf = require('pdf-parse');
const path = require('path');

const pdfPath = path.join(__dirname, 'public', 'manuals', 'part_specification.pdf');

if (!fs.existsSync(pdfPath)) {
    console.error("PDF file not found at " + pdfPath);
    process.exit(1);
}

const dataBuffer = fs.readFileSync(pdfPath);

console.log("Attempting to parse PDF...");
pdf(dataBuffer).then(function(data) {
    console.log("Success!");
    console.log("Text length: " + data.text.length);
    console.log("Preview: " + data.text.substring(0, 50));
}).catch(function(error) {
    console.error("Error parsing PDF: " + error);
});
