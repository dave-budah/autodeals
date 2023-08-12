import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackenderrormessagesComponent } from './backenderrormessages.component';

describe('BackenderrormessagesComponent', () => {
  let component: BackenderrormessagesComponent;
  let fixture: ComponentFixture<BackenderrormessagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackenderrormessagesComponent]
    });
    fixture = TestBed.createComponent(BackenderrormessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
