import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// SVG template for the app icon
const createSVG = (size) => `
<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#4F46E5;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#3B82F6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#8B5CF6;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Background with gradient -->
  <rect width="${size}" height="${size}" fill="url(#grad)" rx="${size * 0.1}"/>
  
  <!-- Book icon -->
  <text x="50%" y="45%" text-anchor="middle" font-size="${size * 0.4}" dominant-baseline="middle">📚</text>
  
  <!-- LearnHub text -->
  <text x="50%" y="85%" text-anchor="middle" font-size="${size * 0.1}" font-weight="bold" fill="white" font-family="Arial">LearnHub</text>
</svg>
`;

// Create public directory if it doesn't exist
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Generate icon files
const sizes = [192, 512];
sizes.forEach(size => {
  const svg = createSVG(size);
  const filename = path.join(publicDir, `pwa-${size}x${size}.svg`);
  fs.writeFileSync(filename, svg);
  console.log(`✓ Created ${filename}`);
});

console.log('\n✅ Icon files created successfully!');
console.log('\nNote: These are SVG files. For production, you should convert them to PNG.');
console.log('You can use an online converter like: https://convertio.co/svg-png/');
console.log('Or use this online PWA icon generator: https://www.pwabuilder.com/imageGenerator\n');
