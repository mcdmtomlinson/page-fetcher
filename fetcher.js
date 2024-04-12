const fs = require('fs');
const request = require('request');

const url = process.argv.slice(2)[0];
const target = process.argv.slice(2)[1];