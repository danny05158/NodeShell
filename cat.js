const fs = require('fs');

module.exports = function(arg) {
  for (let i = 0; i < arg.length; i++) {
    const data = fs.readFileSync(`${arg[i]}`, 'utf8');
    process.stdout.write(data);
  }
  process.stdout.write('\nprompt > ');
};
