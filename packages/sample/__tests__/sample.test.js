'use strict';

const sample = require('..');
const assert = require('assert').strict;

assert.strictEqual(sample(), 'Hello from sample');
console.info('sample tests passed');
