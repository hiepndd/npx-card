'use strict';

const chalk = require('chalk');
const boxen = require('boxen');
const fs = require('fs');
const path = require('path');

const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'double',
};

const data = {
  name: chalk.white('           Hiep Nguyen'),
  handle: chalk.white('hiepndd'),
  work: chalk.white('A Gopher who is using VIM'),
  from: chalk.white('Ho Chi Minh city, Vietnam'),
  twitter: chalk.white('https://twitter.com/') + chalk.green('hiepndd'),
  npm: chalk.white('https://npmjs.com/') + chalk.green('~hiepndd'),
  github: chalk.white('https://github.com/') + chalk.green('hiepndd'),
  linkedin:
    chalk.white('https://linkedin.com/in/') +
    chalk.green('hiep-nguyen-16012311a'),
  facebook:
    chalk.white('https://facebook.com/') +
    chalk.green('profile.php?id=100006888487736'),
  npx: chalk.white('npx') + ' ' + chalk.green('hiepndd'),
  labelWork: chalk.white.bold('   Title:'),
  labelFrom: chalk.white.bold('    From:'),
  labelTwitter: chalk.white.bold(' Twitter:'),
  labelnpm: chalk.white.bold('     npm:'),
  labelGitHub: chalk.white.bold('  GitHub:'),
  labelLinkedIn: chalk.white.bold('Linkedin:'),
  labelFacebook: chalk.white.bold('Facebook:'),
  labelCard: chalk.white.bold('    Card:'),
};

const output = `${data.name} / ${data.handle}
${data.labelWork}  ${data.work}
${data.labelFrom}  ${data.from}
${data.labelTwitter}  ${data.twitter}
${data.labelnpm}  ${data.npm}
${data.labelGitHub}  ${data.github}
${data.labelLinkedIn}  ${data.linkedin}
${data.labelFacebook}  ${data.facebook}
${data.labelCard}  ${data.npx}
`;

const box = chalk.green(boxen(output, options));

// generate the single js file that need run with npx
fs.writeFileSync(
  path.join(__dirname, 'bin/card.js'),
  `#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool
console.log('${box.split('\n').join('\\n\\\n')}');
`,
);
