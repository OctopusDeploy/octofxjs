'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            default: {
                options: {
                    compress: true
                },
                files: {
                    "./public/css/style.min.css": './src/less/style.less'
                }
            }
        },
        uglify: {
            script: {
                files: {
                    './public/js/script.min.js': ['./src/js/vendor/**/*.js', './src/js/app/**/*.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');


    grunt.registerTask('build',  ['less', 'uglify:script']);
};