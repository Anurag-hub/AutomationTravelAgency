import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDelete } from './admin.delete';

describe('AdminDelete', () => {
  let component: AdminDelete;
  let fixture: ComponentFixture<AdminDelete>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDelete ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDelete);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
