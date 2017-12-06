import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyShopAppComponent } from './my-shop-app.component';

describe('MyShopAppComponent', () => {
  let component: MyShopAppComponent;
  let fixture: ComponentFixture<MyShopAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyShopAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyShopAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
