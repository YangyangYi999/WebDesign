import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoOrderComponentComponent } from './no-order-component.component';

describe('NoOrderComponentComponent', () => {
  let component: NoOrderComponentComponent;
  let fixture: ComponentFixture<NoOrderComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoOrderComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoOrderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
