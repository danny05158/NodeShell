const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');

process.stdout.write('prompt > ');

process.stdin.on('data',  (data) => {
  let cmd = data.toString().trim();
  cmd = cmd.split(' ')

  switch (cmd[0]) {
    case 'ls':
      ls();
      break;
    case 'pwd':
      pwd();
      break;
    case 'cat':
      cat(cmd.slice(1))
      break;
    default:
      process.stdout.write(`\n${cmd} is not implemented`);
      process.stdout.write("\nprompt > ");
      break;
  }
});

