import { Tree } from '@angular-devkit/schematics';
import { execSync } from 'child_process';

export function addGenerateScriptForPackageJson(tree: Tree): Tree {
  if (!tree.exists('package.json')) {
    throw new Error('package.json not found');
  }

  const packageJson = JSON.parse(tree.read('package.json')!.toString());

  const command =
    'npx generate-third-party-licenses-json --out-file-path ./public/third-party-licenses.json';

  packageJson.scripts = packageJson.scripts || {};

  if (packageJson.scripts['postinstall']) {
    if (!packageJson.scripts['postinstall'].includes(command)) {
      packageJson.scripts['postinstall'] =
        `${packageJson.scripts['postinstall']}; ${command}`;
    }
  } else {
    packageJson.scripts['postinstall'] = command;
  }

  if (packageJson.scripts['postuninstall']) {
    if (!packageJson.scripts['postuninstall'].includes(command)) {
      packageJson.scripts['postuninstall'] =
        `${packageJson.scripts['postuninstall']}; ${command}`;
    }
  } else {
    packageJson.scripts['postuninstall'] = command;
  }

  tree.overwrite('package.json', JSON.stringify(packageJson, null, 2));

  execSync(command);

  return tree;
}
