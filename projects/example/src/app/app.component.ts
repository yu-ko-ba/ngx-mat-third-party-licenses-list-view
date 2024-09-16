import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { NgxMatThirdPartyLicensesListViewComponent } from '../../../ngx-mat-third-party-licenses-list-view/src/public-api';
import { NgxMatThirdPartyLicensesListViewComponent } from '../../../../dist/ngx-mat-third-party-licenses-list-view';

import _licenses from '../../public/third-party-licenses.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxMatThirdPartyLicensesListViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'example';

  licenses = _licenses;
}