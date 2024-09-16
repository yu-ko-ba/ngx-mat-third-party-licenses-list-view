import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMatThirdPartyLicensesListViewComponent } from './ngx-mat-third-party-licenses-list-view.component';

describe('NgxMatThirdPartyLicensesListViewComponent', () => {
  let component: NgxMatThirdPartyLicensesListViewComponent;
  let fixture: ComponentFixture<NgxMatThirdPartyLicensesListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxMatThirdPartyLicensesListViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxMatThirdPartyLicensesListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
