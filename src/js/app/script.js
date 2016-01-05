'use strict';

$(document).ready(function() {

  $.get('config',function(config){
    $("#deployDate").text(config.deployDate);
    $("#env").text(config.env);
    $("#projectVariable").text(config.projectVariable);
    $("#release").text(config.release);
    $("#machine_name").text(config.machine);
  });

  $.get('server', function(data){
    $("#os_pid").text(data.pid);
    $("#os_platform").text(data.platform);
  });
});