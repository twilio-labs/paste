const fs = require("fs");
const path = require("path");

// Function to generate a package.json file for the ESM output
function generateESMPackageJson(packageJson, esmOutputDir) {
  if (esmOutputDir.includes("esm")) {
    const esmPackageJson = {
      name: `${packageJson.name}-module`,
      type: "module",
    };

    const esmPackageJsonPath = path.join(esmOutputDir, "package.json");
    fs.writeFileSync(esmPackageJsonPath, JSON.stringify(esmPackageJson, null, 2), "utf8");
  }
}

module.exports = { generateESMPackageJson };
