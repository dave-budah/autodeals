import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakesComponent } from './makes.component';

describe('MakesComponent', () => {
  let component: MakesComponent;
  let fixture: ComponentFixture<MakesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MakesComponent]
    });
    fixture = TestBed.createComponent(MakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
