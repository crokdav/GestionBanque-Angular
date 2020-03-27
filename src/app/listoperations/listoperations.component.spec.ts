import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListoperationsComponent } from './listoperations.component';

describe('ListoperationsComponent', () => {
  let component: ListoperationsComponent;
  let fixture: ComponentFixture<ListoperationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListoperationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListoperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
