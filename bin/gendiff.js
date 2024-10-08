#!/usr/bin/env node
const { program } = require('commander');
program.description('Compares two configuration files and shows a difference.');
program.helpOption('-h, --help', 'read more information');
program.version('0.0.1', '-v, --version', 'output the version number');
program.arguments('<filepath1>,<filepath2>');
program.option('-f, --format [type]', 'output format');

program.parse(process.argv)