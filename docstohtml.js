import fs from 'fs';
import mammoth from 'mammoth';

// Function to convert DOCX to HTML
async function convertDocxToHtml(inputPath, outputPath) {
  try {
    // Read the DOCX file
    const fileBuffer = fs.readFileSync(inputPath);

    // Convert DOCX to HTML
    const result = await mammoth.convertToHtml({ buffer: fileBuffer });

    // Extracted HTML
    const htmlContent = result.value;

    // Save the HTML content to a file
    fs.writeFileSync(outputPath, htmlContent, 'utf-8');

    console.log(`Conversion successful! HTML saved at: ${outputPath}`);
  } catch (error) {
    console.error('Error during conversion:', error);
  }
}

// Example usage
const inputDocx = './doc.docx'; // Path to input DOCX file
const outputHtml = './output.html'; // Path to save output HTML file

convertDocxToHtml(inputDocx, outputHtml);
