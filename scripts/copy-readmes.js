const fs = require('fs');
const path = require('path');

const srcDir = '/Users/pasi/Documents/Projects Catalogue';
const destDir = path.join(__dirname, '..', 'context', 'projects');
const publicDir = path.join(__dirname, '..', 'public', 'projects');

const mapping = {
  "falcon-tracker": "Falcon Tracker",
  "fitness-tracker": "Fitness Tracker",
  "dance-better": "DanceBetter",
  "mocap-3d": "Skeleton Mocap 3D",
  "garment-counter": "Garment Piece Counter",
  "shadow-projection": "Shadow Projection",
  "qr2wallet": "QR2Wallet"
};

// Ensure destination directories exist
if (!fs.existsSync(destDir)){
    fs.mkdirSync(destDir, { recursive: true });
}
if (!fs.existsSync(publicDir)){
    fs.mkdirSync(publicDir, { recursive: true });
}

// Recursive copy helper
function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  
  if (isDirectory) {
    const basename = path.basename(src);
    if (basename === 'node_modules' || basename === '.git' || basename === '.venv') {
      return;
    }
    
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    const basename = path.basename(src);
    if (basename === 'README.md' || basename === '.DS_Store' || basename.endsWith('.html') || basename.endsWith('.css')) {
      return;
    }
    
    fs.copyFileSync(src, dest);
  }
}

Object.entries(mapping).forEach(([slug, folder]) => {
  // 1. Copy README.md
  const readmeSrc = path.join(srcDir, folder, 'README.md');
  const readmeDest = path.join(destDir, `${slug}.md`);
  if (fs.existsSync(readmeSrc)) {
    fs.copyFileSync(readmeSrc, readmeDest);
    console.log(`Successfully copied: ${folder}/README.md -> context/projects/${slug}.md`);
  } else {
    console.warn(`Warning: README not found for ${folder}`);
  }
  
  // 2. Sync all other assets to public/projects/[folder]
  const projectSrcFolder = path.join(srcDir, folder);
  const projectPublicDest = path.join(publicDir, folder);
  
  if (fs.existsSync(projectSrcFolder)) {
    copyRecursiveSync(projectSrcFolder, projectPublicDest);
    console.log(`Successfully synced assets for: ${folder} -> public/projects/${folder}/`);
  }
});
