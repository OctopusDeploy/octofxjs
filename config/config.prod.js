'use strict';

module.exports = {
  client: {
    deployDate: '#{Octopus.Deployment.Created}',
    env: '#{Octopus.Environment.Name}',
    release: '#{Octopus.Release.Number}',
    machine: '#{Octopus.Machine.Name}',
    projectVariable: '#{ProjectVariable}'
  }
};