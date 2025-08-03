#!/usr/bin/env node
import { program } from "commander";
import { generatePassword } from "./passwordGen";

program
  .name('xkcd')
  .description('Generate XKCD-style passwords')
  .version('1.0.0')
  .action(() => {
    const password = generatePassword();
    console.log('Generated Password:', password);
  });

program.parse();
