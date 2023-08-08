import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedproductsComponent } from './usedproducts.component';

describe('UsedproductsComponent', () => {
  let component: UsedproductsComponent;
  let fixture: ComponentFixture<UsedproductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsedproductsComponent]
    });
    fixture = TestBed.createComponent(UsedproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
