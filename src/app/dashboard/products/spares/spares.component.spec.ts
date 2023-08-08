import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparesComponent } from './spares.component';

describe('SparesComponent', () => {
  let component: SparesComponent;
  let fixture: ComponentFixture<SparesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SparesComponent]
    });
    fixture = TestBed.createComponent(SparesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
