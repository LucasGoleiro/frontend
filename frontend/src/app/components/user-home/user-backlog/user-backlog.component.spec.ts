import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBacklogComponent } from './user-backlog.component';

describe('UserBacklogComponent', () => {
  let component: UserBacklogComponent;
  let fixture: ComponentFixture<UserBacklogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBacklogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBacklogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
