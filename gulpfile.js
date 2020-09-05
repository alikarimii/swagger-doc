const { task, watch } = require("gulp");
var yaml = require("js-yaml");
var path = require("path");
var fs = require("fs");

task("swagger", async function () {
  var doc = yaml.safeLoad(
    fs.readFileSync(path.join(__dirname, "api/swagger/swagger.yaml"))
  );
  fs.writeFileSync(
    path.join(__dirname, "src/public/swagger.json"),
    JSON.stringify(doc, null, " ")
  );
});

var paths = {
  styles: {
    src: "src/styles/**/*.less",
    dest: "assets/styles/",
  },
  scripts: {
    src: "src/**/*.ts",
    dest: "assets/scripts/",
  },
  swagger: "api/swagger/swagger.yaml",
};

task("watch", async function () {
  watch(paths.swagger);
});
