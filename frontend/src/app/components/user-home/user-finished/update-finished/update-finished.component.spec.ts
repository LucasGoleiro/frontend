import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFinishedComponent } from './update-finished.component';

describe('UpdateFinishedComponent', () => {
  let component: UpdateFinishedComponent;
  let fixture: ComponentFixture<UpdateFinishedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFinishedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFinishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
