import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBacklogComponent } from './update-backlog.component';

describe('UpdateBacklogComponent', () => {
  let component: UpdateBacklogComponent;
  let fixture: ComponentFixture<UpdateBacklogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBacklogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBacklogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
