const fs = require('fs');
const path = require('path');

function walk(dir) {
  let files = fs.readdirSync(dir);
  for (const f of files) {
    let p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) {
      walk(p);
    } else if (p.match(/\.(js|jsx)$/)) {
      let c = fs.readFileSync(p, 'utf8');
      
      // We want to replace quotes + anything ending in Assests/ with "/Assests/
      let nc = c
        .replace(/['"]\.\.\/\.\.\/Assests\//g, '"/Assests/')
        .replace(/['"]\.\.\/Assests\//g, '"/Assests/')
        .replace(/['"]\.\/Assests\//g, '"/Assests/')
        .replace(/['"]Assests\//g, '"/Assests/');
        
      if (c !== nc) {
        fs.writeFileSync(p, nc, 'utf8');
        console.log('Updated ' + p);
      }
    }
  }
} 
walk('c:/Users/priya/OneDrive/Desktop/FixYourHR_FInal/client/src');