import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RauterUsersComponent } from './rauter-users.component';

describe('RauterUsersComponent', () => {
  let component: RauterUsersComponent;
  let fixture: ComponentFixture<RauterUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RauterUsersComponent]
    });
    fixture = TestBed.createComponent(RauterUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
