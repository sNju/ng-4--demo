import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeighComponent } from './heigh.component';

describe('BasicComponent', () => {
  let component: HeighComponent;
  let fixture: ComponentFixture<HeighComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeighComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeighComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
