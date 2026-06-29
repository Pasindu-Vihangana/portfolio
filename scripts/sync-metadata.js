const fs = require('fs');
const path = require('path');
const vm = require('vm');

const projectsTsPath = path.join(__dirname, '..', 'context', 'projects.ts');
if (!fs.existsSync(projectsTsPath)) {
  console.error("Error: projects.ts not found!");
  process.exit(1);
}

const projectsTsContent = fs.readFileSync(projectsTsPath, 'utf8');

// Strip TypeScript annotations and export statements to run as JS
const cleanJs = projectsTsContent
  .replace(/export interface [\s\S]*?\n}/g, '')
  .replace(/export const PROJECTS: Project\[\] =/g, 'const PROJECTS =')
  .replace(/export /g, '');

const vmContext = {};
vm.createContext(vmContext);
let PROJECTS = [];
try {
  PROJECTS = vm.runInContext(cleanJs + '\nPROJECTS;', vmContext);
} catch (e) {
  console.error("Error executing projects.ts as JavaScript:", e);
  process.exit(1);
}
const catalogueDir = '/Users/pasi/Documents/Projects Catalogue';

PROJECTS.forEach((project) => {
  const SLUG_TO_DIR = {
    "falcon-tracker": "Falcon Tracker",
    "fitness-tracker": "Fitness Tracker",
    "dance-better": "DanceBetter",
    "mocap-3d": "Skeleton Mocap 3D",
    "garment-counter": "Garment Piece Counter",
    "shadow-projection": "Shadow Projection",
    "qr2wallet": "QR2Wallet"
  };

  const folderName = SLUG_TO_DIR[project.id];
  if (!folderName) return;

  const readmePath = path.join(catalogueDir, folderName, 'README.md');
  if (!fs.existsSync(readmePath)) {
    console.warn(`Warning: README not found at ${readmePath}`);
    return;
  }

  let readmeContent = fs.readFileSync(readmePath, 'utf8');

  // Format the metadata block
  const tagsStr = project.tags.map(t => `\`${t}\``).join(' ');
  const linkStr = project.link ? `[Explore on GitHub](${project.link})` : '';
  
  let metadataBlock = `\n\n> **Category:** ${project.categoryLabel}  \n`;
  if (linkStr) {
    metadataBlock += `> **GitHub Link:** ${linkStr}  \n`;
  }
  metadataBlock += `> **Tags:** ${tagsStr}\n\n`;

  // Match the metadata block: starting with > **Category:** and matching subsequent quote lines
  const metadataRegex = /\n+>\s*\*\*Category:\*\*[\s\S]*?(?=\n\n|\n[^>])/g;
  
  if (metadataRegex.test(readmeContent)) {
    readmeContent = readmeContent.replace(metadataRegex, metadataBlock.trimEnd());
  } else {
    const h1Regex = /^(#\s+[^\n]+)/m;
    if (h1Regex.test(readmeContent)) {
      readmeContent = readmeContent.replace(h1Regex, `$1${metadataBlock}`);
    } else {
      readmeContent = metadataBlock.trimStart() + readmeContent;
    }
  }

  fs.writeFileSync(readmePath, readmeContent, 'utf8');
  console.log(`Successfully updated metadata in ${folderName}/README.md`);
});
