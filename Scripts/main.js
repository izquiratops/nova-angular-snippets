require("./registrars/html.js");
require("./registrars/typescript.js");

exports.activate = function () {
  console.log("Henlo!");
};

exports.deactivate = function () {
  console.log("Bye 👋");
};
