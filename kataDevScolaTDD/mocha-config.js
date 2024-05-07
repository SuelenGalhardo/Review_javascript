// mocha-config.js
require = require("esm")(module/*, options*/);
module.exports = () => {
  require.extensions[".js"] = (module, filename) => {
    module.exports = require("fs").readFileSync(filename, "utf8");
  };
};
