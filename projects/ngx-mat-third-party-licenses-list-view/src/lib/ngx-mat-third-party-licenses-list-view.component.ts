import { Component, Input } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { License } from './model/license';

@Component({
  selector: 'ngx-mat-third-party-licenses-list-view',
  standalone: true,
  imports: [MatRippleModule, MatExpansionModule, MatIconModule],
  templateUrl: './ngx-mat-third-party-licenses-list-view.component.html',
  styleUrl: './ngx-mat-third-party-licenses-list-view.component.css',
})
export class NgxMatThirdPartyLicensesListViewComponent {
  @Input() licenses: License[] = [];
}
