#! /usr/bin/env node
// eslint-disable-next-line no-global-assign
require = require('@std/esm')(module);

const app = require('./app.js').default;

app();
