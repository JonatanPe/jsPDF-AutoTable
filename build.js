var spawn = require('child_process').spawnSync;
var fs = require('fs');

spawn('rsync', ['-a', 'node_modules/jspdf-autotable/examples/', './']);
spawn('cp', ['node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js', './']);
fs.renameSync('examples.html', 'index.html');

var content = fs.readFileSync('index.html', 'utf8');
content = content.replace(/..\/dist\//g, '');
fs.writeFileSync('index.html', content);
