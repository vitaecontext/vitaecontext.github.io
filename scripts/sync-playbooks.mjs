import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define source and destination paths
const SOURCE_DIR = path.resolve(__dirname, '../../vitaecontext/hub');
const DEST_DIR = path.resolve(__dirname, '../src/content/playbooks');

// The specific playbooks to copy
const PLAYBOOKS = [
  'context-builder',
  'cv-ats',
  'github',
  'linkedin',
  'web-portfolio',
  'x-twitter'
];

async function syncPlaybooks() {
  console.log(`Starting playbook sync from: ${SOURCE_DIR}`);
  console.log(`Target destination: ${DEST_DIR}`);

  try {
    // Ensure the destination directory exists
    await fs.mkdir(DEST_DIR, { recursive: true });

    for (const playbook of PLAYBOOKS) {
      const srcDir = path.join(SOURCE_DIR, playbook);
      
      // Read all files in the source playbook directory
      let files = [];
      try {
        files = await fs.readdir(srcDir);
      } catch (err) {
        if (err.code === 'ENOENT') {
          console.warn(`[WARNING] Source directory not found: ${srcDir}`);
          continue;
        }
        throw err;
      }

      // Filter to only .md files
      const mdFiles = files.filter(f => f.endsWith('.md'));

      if (mdFiles.length === 0) {
        console.warn(`[WARNING] No markdown files found in: ${srcDir}`);
        continue;
      }

      console.log(`\nSyncing [${playbook}] - ${mdFiles.length} files`);
      
      // We will combine the markdown files into a single master playbook for the content collection
      let combinedContent = '';
      let frontmatter = '';

      // The README.md is always the entry point and contains the frontmatter
      const readmePath = path.join(srcDir, 'README.md');
      try {
        const readmeContent = await fs.readFile(readmePath, 'utf-8');
        
        // Strip out H1 headings to prevent duplication with the Astro Hero component
        const strippedReadme = readmeContent.replace(/^#\s+.*$/gm, '');

        // Extract frontmatter block (<!-- metadata: ... -->)
        const frontmatterMatch = strippedReadme.match(/<!--\s*metadata:\n([\s\S]*?)-->/);
        if (frontmatterMatch) {
            // Remove the 2-space indentation from the yaml block
            const cleanYaml = frontmatterMatch[1].replace(/\n  /g, '\n').trim();
            frontmatter = `---\n${cleanYaml}\nid: "${playbook}"\n---\n\n`;
            combinedContent += strippedReadme.replace(frontmatterMatch[0], '').trim() + '\n\n';
        } else {
            frontmatter = `---\ntitle: "${playbook.replace('-', ' ')}"\nplatform: "${playbook}"\nid: "${playbook}"\n---\n\n`;
            combinedContent += strippedReadme.trim() + '\n\n';
        }

      } catch (err) {
        console.warn(`[WARNING] No README.md found in ${srcDir}`);
      }

      // Append the other markdown files in alphabetical order (excluding README.md)
      for (const file of mdFiles.sort()) {
        if (file.toLowerCase() === 'readme.md') continue;
        
        const filePath = path.join(srcDir, file);
        const content = await fs.readFile(filePath, 'utf-8');
        
        // Clean up the markdown a bit (remove local markdown links since they are now on one page)
        // Strip out H1 headings as they break the document outline
        let cleanedContent = content.replace(/^#\s+.*$/gm, '').trim();
        
        combinedContent += `\n\n---\n\n## Section: ${file.replace('.md', '').replace(/-/g, ' ')}\n\n${cleanedContent}`;
      }

      // Write the combined file to the Astro content collection
      const destFile = path.join(DEST_DIR, `${playbook}.md`);
      await fs.writeFile(destFile, frontmatter + combinedContent);
      console.log(`  -> Wrote combined playbook to ${destFile}`);
    }
    
    console.log('\nPlaybook sync completed successfully.');
  } catch (error) {
    console.error('Error syncing playbooks:', error);
    process.exit(1);
  }
}

syncPlaybooks();
