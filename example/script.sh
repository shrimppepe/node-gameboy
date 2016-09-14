#!/usr/bin/env node

'use strict';

const fs = require('fs');
const Gameboy = require('../');


const gameboy = new Gameboy();
gameboy.loadCart(fs.readFileSync('./roms/tetris.gb'));
gameboy.powerOn();


let i = 0;

gameboy.screen.on('frame', (data) => {
    if (++i % 60) return;
    fs.writeFile(`./screenshot/${i / 60}.png`, data);
});
