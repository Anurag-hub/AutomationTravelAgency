import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {  AdminPut } from './admin.put';


describe('AdminPut', () => {
  let component: AdminPut;
  let fixture: ComponentFixture<AdminPut>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPut ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPut);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
