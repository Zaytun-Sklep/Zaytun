const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const url = 'http://localhost:3000'; // Ensure the server is running
const outputDir = path.join(__dirname, '../lighthouse-report');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

console.log('Starting Lighthouse audit...');
console.log('Make sure your Next.js server is running on http://localhost:3000');

try {
  const timestamp = new Date().toISOString().replace(/:/g, '-');
  const fileName = `report-${timestamp}.html`;
  const outputPath = path.join(outputDir, fileName);

  execSync(`npx lighthouse ${url} --output html --output-path ${outputPath} --view`, {
    stdio: 'inherit',
  });

  console.log(`Report generated: ${outputPath}`);
} catch (error) {
  console.error('Error running Lighthouse:', error.message);
  console.log('Ensure you have lighthouse installed or use npx.');
}
