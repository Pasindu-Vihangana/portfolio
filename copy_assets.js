const fs = require('fs');
const path = require('path');
const srcDir = '/Users/pasi/.gemini/antigravity-ide/brain/7f89a502-49a6-4ef0-b412-21a9a40f60cc';
const destDir = '/Users/pasi/Documents/Portfolio/app/public/assets';

const files = {
  'hero_mechatronics_1779427372261.png': 'hero_mechatronics.png',
  'falcon_tracker_1779427393353.png': 'falcon_tracker.png',
  'fitness_tracker_1779427413445.png': 'fitness_tracker.png',
  'dance_better_1779427435018.png': 'dance_better.png',
  'xfly_drone_1779427458743.png': 'xfly_drone.png'
};

for (const [src, dest] of Object.entries(files)) {
  const srcPath = path.join(srcDir, src);
  const destPath = path.join(destDir, dest);
  try {
    const data = fs.readFileSync(srcPath);
    fs.writeFileSync(destPath, data);
    console.log(`Successfully copied ${src} to ${dest}`);
  } catch (e) {
    console.error(`Error copying ${src}:`, e.message);
  }
}
