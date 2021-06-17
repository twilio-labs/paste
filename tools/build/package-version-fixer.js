const {getRepoPackages} = require('../utils/getRepoPackages');
const {writeToFile} = require('../utils/writeToFile');

(async () => {
  const repoPackages = await getRepoPackages();
  console.log(repoPackages);
  // Get a mapping of `name` -> {info} for each package for quick lookups = O(1)
  const mappedRepoPackages = {};
  repoPackages.forEach(({name, version}) => {
    mappedRepoPackages[name] = version;
  });

  function fixDependencyVersions(dependencies) {
    if (dependencies == null) {
      return dependencies;
    }
    const fixedDependencies = {...dependencies};
    // For each dep, apply the correct version
    Object.keys(dependencies).forEach((dependencyName) => {
      const version = mappedRepoPackages[dependencyName];
      if (version != null) {
        fixedDependencies[dependencyName] = `^${version}`;
      }
    });
    return fixedDependencies;
  }

  // For each package, get their package json and clean the deps
  repoPackages.forEach(({location}) => {
    console.log(location);
    const packageJsonPath = `${location}/package.json`;
    const packageJson = require(packageJsonPath);

    writeToFile(
      packageJsonPath,
      {
        ...packageJson,
        dependencies: fixDependencyVersions(packageJson.dependencies),
        peerDependencies: fixDependencyVersions(packageJson.peerDependencies),
        devDependencies: fixDependencyVersions(packageJson.devDependencies),
      },
      {successMessage: 'A', errorMessage: 'B', formatJson: true}
    );
  });
})();
