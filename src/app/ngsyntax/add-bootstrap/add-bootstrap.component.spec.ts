import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBootstrapComponent } from './add-bootstrap.component';

describe('AddBootstrapComponent', () => {
  let component: AddBootstrapComponent;
  let fixture: ComponentFixture<AddBootstrapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBootstrapComponent]
    });
    fixture = TestBed.createComponent(AddBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
