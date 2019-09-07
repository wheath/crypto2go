'use strict';

#!/usr/bin/env node

var Web3 = require('../index.html');
var web3 = new Web3();

web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

var coinbase = web3.eth.coinbase;
console.log(coinbase);

var balance = web3.eth.getBalance(coinbase);
console.log(balance.toString(10));

require('dotenv').config();

const bodyParser = require('body-parser');
const controllers = require('./controllers');
const express = require('express');
const middleware = require('./middleware');
const path = require('path');
const redis = require('redis');

const app = express();

const port = process.env.PORT || 8545;
