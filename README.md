# ngx-mat-third-party-licenses-list-view
* This library adds a script to postinstall and postuninstall in package.json that generates `third-party-licenses.json`
* This library provides a ListView of third-party licences based on `third-party-licenses.json`
* This library adds `public/third-party-licenses.json` to `.gitignore`

## Installation
```shell
ng add ngx-mat-third-party-licenses-list-view
```

## Example
licenses.component.ts
```typescript
...
import { NgxMatThirdPartyLicensesListViewComponent, License } from 'ngx-mat-third-party-licenses-list-view';
import _licenses from '../../public/third-party-licenses.json';

@Component({
  ...
  imports: [..., NgxMatThirdPartyLicensesListViewComponent],
  templateUrl: './licenses.component.html',
  styleUrl: "./licenses.component.css",
})
export class LicensesComponent {
  licenses = _licenses as License[];
}
```

licenses.component.html
```html
...
<main>
  <ngx-mat-third-party-licenses-list-view [licenses]="licenses" />
</main>
...
```

licenses.component.css
```css
main {
  width: calc(100% - 22px);
  max-width: 600px;
  margin: 0 auto;
}
```

## Screenshot
<img width="1223" alt="スクリーンショット 2024-09-21 16 30 44" src="https://github.com/user-attachments/assets/dc2b9db4-fd87-4ae1-9234-981ca5c15b1a">
