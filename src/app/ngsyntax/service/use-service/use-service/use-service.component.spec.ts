import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseServiceComponent } from './use-service.component';

describe('UseServiceComponent', () => {
  let component: UseServiceComponent;
  let fixture: ComponentFixture<UseServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UseServiceComponent]
    });
    fixture = TestBed.createComponent(UseServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
