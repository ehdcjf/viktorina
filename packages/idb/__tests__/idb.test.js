'use strict';

const idb = require('..');
const assert = require('assert').strict;

assert.strictEqual(idb(), 'Hello from idb');
console.info('idb tests passed');
