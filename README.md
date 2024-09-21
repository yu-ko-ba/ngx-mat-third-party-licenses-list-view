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
