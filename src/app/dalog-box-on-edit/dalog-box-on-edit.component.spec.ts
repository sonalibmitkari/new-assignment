import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DalogBoxOnEditComponent } from './dalog-box-on-edit.component';

describe('DalogBoxOnEditComponent', () => {
  let component: DalogBoxOnEditComponent;
  let fixture: ComponentFixture<DalogBoxOnEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DalogBoxOnEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DalogBoxOnEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
