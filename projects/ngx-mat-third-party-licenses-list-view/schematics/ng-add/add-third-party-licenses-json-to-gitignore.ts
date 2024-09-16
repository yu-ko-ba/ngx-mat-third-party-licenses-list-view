import { Tree } from '@angular-devkit/schematics';

export function addThirdPartyLicensesJsonToGitignore(tree: Tree): Tree {
  const addString = [
    '# auto generated file by ngx-mat-third-party-licenses-list-view',
    'public/third-party-licenses.json',
  ].join('\n');

  if (!tree.exists('.gitignore')) {
    tree.create('.gitignore', addString);
    return tree;
  }

  const gitignore = [
    tree.read('.gitignore')!.toString(),
    addString,
  ].join('\n');

  tree.overwrite('.gitignore', gitignore);

  return tree;
}
