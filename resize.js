// resize.js
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const inputDir = path.join(__dirname, "Images");
const sizes = [100, 200]; // Avatar sizes

fs.readdirSync(inputDir).forEach(file => {
  if (/\.(jpg|jpeg|png|webp|avif)$/i.test(file)) {
    const inputPath = path.join(inputDir, file);
    const baseName = path.parse(file).name;

    sizes.forEach(size => {
      const outputPath = path.join(inputDir, `${baseName}-${size}.webp`);
      sharp(inputPath)
        .resize(size, size, { fit: "cover" })
        .webp({ quality: 75 })
        .toFile(outputPath)
        .then(() => console.log(`✅ Created: ${outputPath}`))
        .catch(err => console.error(`❌ Error: ${err}`));
    });
  }
});
