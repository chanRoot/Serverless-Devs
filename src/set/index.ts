/** @format */

import program from 'commander';

program
  .name('s set')
  .usage('[commands] [options]')
  .helpOption('-h, --help', 'Display help for command')
  .command('registry', '👀 Set up a custom registry')
  .description('You can make some default settings for the tool here.')
  .addHelpCommand(false)
  .parse(process.argv);
