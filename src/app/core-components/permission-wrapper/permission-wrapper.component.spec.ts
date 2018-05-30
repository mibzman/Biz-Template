import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionWrapperComponent } from './permission-wrapper.component';

describe('PermissionWrapperComponent', () => {
  let component: PermissionWrapperComponent;
  let fixture: ComponentFixture<PermissionWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermissionWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
