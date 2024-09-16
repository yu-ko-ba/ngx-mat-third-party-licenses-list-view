import { Rule, chain } from '@angular-devkit/schematics';
import { addGenerateScriptForPackageJson } from './add-generate-script-for-package-json';
import { addThirdPartyLicensesJsonToGitignore } from './add-third-party-licenses-json-to-gitignore';

export default function ngAdd(): Rule {
  return chain([
    addGenerateScriptForPackageJson,
    addThirdPartyLicensesJsonToGitignore,
  ]);
}
