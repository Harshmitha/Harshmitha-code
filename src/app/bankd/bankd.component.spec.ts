import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankdComponent } from './bankd.component';

describe('BankdComponent', () => {
  let component: BankdComponent;
  let fixture: ComponentFixture<BankdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
