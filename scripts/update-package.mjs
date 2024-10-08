#!/usr/bin/env zx


// update package.json
// keep publishConfig.exports and exports same in package.json
const updatePackage = async () => {
  const packages = await glob(['packages/*/package.json'])
  if (packages.length) {
    for (const pkgPath of packages) {
      const packageJson = await fs.readJson(`${pkgPath}`);
      // 如果存在 publishConfig.exports，就覆盖顶级的 exports
      if (packageJson.publishConfig && packageJson.publishConfig.exports) {
        packageJson.exports = packageJson.publishConfig.exports;
      }
      // 将修改后的 package.json 写回文件
      fs.writeFileSync(pkgPath, JSON.stringify(packageJson, null, 2));
    }
  }
}

await spinner('working...', () => updatePackage());

console.log(chalk.blue('package.json has been updated with publishConfig.exports'))
