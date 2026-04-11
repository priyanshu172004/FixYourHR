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
      
      // Fix mismatched quotes like "/Assests/icons/Razorpay.svg'; -> '/Assests/...';
      let nc = c.replace(/"\/Assests\/(.*?)'/g, "'/Assests/$1'");
      
      if (c !== nc) {
        fs.writeFileSync(p, nc, 'utf8');
        console.log('Fixed quotes ' + p);
      }
    }
  }
} 
walk('c:/Users/priya/OneDrive/Desktop/FixYourHR_FInal/client/src');