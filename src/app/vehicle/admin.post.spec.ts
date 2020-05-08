import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPost } from './admin.post';

describe('AdminPost', () => {
  let component: AdminPost;
  let fixture: ComponentFixture<AdminPost>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPost ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPost);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
