# ngx-mat-third-party-licenses-list-view

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
  ...
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
