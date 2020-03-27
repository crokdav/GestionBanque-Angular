import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddoperationComponent } from './addoperation.component';

describe('AddoperationComponent', () => {
  let component: AddoperationComponent;
  let fixture: ComponentFixture<AddoperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddoperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddoperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
