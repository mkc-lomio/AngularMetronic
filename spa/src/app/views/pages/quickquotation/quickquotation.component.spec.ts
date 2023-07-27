import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickquotationComponent } from './quickquotation.component';

describe('QuickquotationComponent', () => {
  let component: QuickquotationComponent;
  let fixture: ComponentFixture<QuickquotationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickquotationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickquotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
