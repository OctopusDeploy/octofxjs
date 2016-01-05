'use strict';
var extend = require('extend');

function loadBaseConfig(){
  return require('./config.js');
}

function loadEnvironmentConfig() {
  var env = process.env.NODE_ENV || 'dev';
  var path = './config.' + env + '.js';
  try {
    return require(path);
  }catch(err){
    if(err.message.indexOf('Cannot find module \''+path +'\'') !== 0){
      throw( err );
    }
  }
  return {};
}

function shallowCloneConfigs(base, extended) {
  return extend({}, base, extended);
}

// Perform shallow copy onto base config
module.exports = shallowCloneConfigs(loadBaseConfig(), loadEnvironmentConfig());