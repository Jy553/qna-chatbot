#! /usr/bin/env node


const fs = require('fs');
const sass = require('sass');

const client = sass.compileString(
    fs.readFileSync(`${__dirname}/client.scss`, 'utf8'),
    { style: 'compressed' },
).css;

const designer = sass.compileString(
    fs.readFileSync(`${__dirname}/designer.scss`, 'utf8'),
    { style: 'compressed' },
).css;

module.exports = {
    client,
    designer,
};
