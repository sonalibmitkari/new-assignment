import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBoxOnDeleteComponent } from './dialog-box-on-delete.component';

describe('DialogBoxOnDeleteComponent', () => {
  let component: DialogBoxOnDeleteComponent;
  let fixture: ComponentFixture<DialogBoxOnDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogBoxOnDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogBoxOnDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
