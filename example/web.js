'use strict';

const fs = require('fs');
const cart = fs.readFileSync('./roms/marioland.gb');
const bios = fs.readFileSync('./support/bios.bin');
const Gameboy = require('../');


localStorage.debug = '';

const gameboy = new Gameboy(cart);
gameboy.powerOn();

// Joypad

document.addEventListener('keydown', (e) => gameboy.joypad.keyDown(e.keyCode));
document.addEventListener('keyup', (e) => gameboy.joypad.keyUp(e.keyCode));

// Render

const canvas = document.getElementById('frame');
const ctx = canvas.getContext('2d');

gameboy.gpu.on('frame', (offcanvas) => {
    ctx.drawImage(offcanvas, 0, 0);
});
