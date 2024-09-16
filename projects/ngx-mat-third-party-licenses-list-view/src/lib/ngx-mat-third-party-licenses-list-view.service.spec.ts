import { TestBed } from '@angular/core/testing';

import { NgxMatThirdPartyLicensesListViewService } from './ngx-mat-third-party-licenses-list-view.service';

describe('NgxMatThirdPartyLicensesListViewService', () => {
  let service: NgxMatThirdPartyLicensesListViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMatThirdPartyLicensesListViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
