#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const passwordGen_1 = require("./passwordGen");
commander_1.program
    .name('xkcd')
    .description('Generate XKCD-style passwords')
    .version('1.0.0')
    .action(() => {
    const password = (0, passwordGen_1.generatePassword)();
    console.log('Generated Password:', password);
});
commander_1.program.parse();
//# sourceMappingURL=index.js.map