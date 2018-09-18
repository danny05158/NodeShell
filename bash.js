const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  switch (cmd) {
    case 'ls':
      ls();
      break;
    case 'pwd':
      pwd();
      break;
    case 'cat':
      cat();
      break;
    default:
      process.stdout.write(`\n${cmd} is not implemented`);
      process.stdout.write("\nprompt > ");
      break;
  }
});

