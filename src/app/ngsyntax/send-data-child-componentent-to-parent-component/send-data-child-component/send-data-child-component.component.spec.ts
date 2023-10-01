import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendDataChildComponentComponent } from './send-data-child-component.component';

describe('SendDataChildComponentComponent', () => {
  let component: SendDataChildComponentComponent;
  let fixture: ComponentFixture<SendDataChildComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SendDataChildComponentComponent]
    });
    fixture = TestBed.createComponent(SendDataChildComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
