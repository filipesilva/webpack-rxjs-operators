const fs = require('fs');
const path = require('path');

const rxjsPackageJsonPath = path.resolve(__dirname, './node_modules/rxjs/package.json');
const rxjsPackageJson = fs.readFileSync(rxjsPackageJsonPath, { encoding: 'utf-8' });
if (!rxjsPackageJson.includes('"sideEffects": false')) {
  const newRxjsPackageJson = rxjsPackageJson.replace(' "main":', '"sideEffects": false,"main": ');
  if (rxjsPackageJson === newRxjsPackageJson) {
    throw new Error(`Failed to patch rxjs`)
  }
  fs.writeFileSync(rxjsPackageJsonPath, newRxjsPackageJson, { encoding: 'utf-8' })
}

