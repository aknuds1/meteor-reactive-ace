Package.describe({
  summary: "Easily include ace, receive reactive varibles for cursor position, editor contents, etc",
  version: '1.0.0',
  name: 'aknudsen:reactive-ace',
  git: 'https://github.com/aknuds1/meteor-reactive-ace.git',
});

var bundlerApi = null
var path = Npm.require("path");
var fs = Npm.require("fs");
var packagePath = path.join(path.resolve("."), "packages", "reactive-ace");

Package.on_use(function (api, where) {
  api.versionsFrom('1.0.2')

  api.use(['jquery', "templating", "coffeescript", "underscore", "deps"], "client");

  api.addFiles(["ace-builds/src/ace.js", "ace-builds/src/ext-modelist.js", "lib/utils.coffee",
    "lib/crc32.js", "lib/esprima.js", "editor.coffee", "editorSetup.coffee", "hack.hack", "templates.html"],
    "client");
});


