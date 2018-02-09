import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToffeeComponent } from './toffee.component';

describe('ToffeeComponent', () => {
  let component: ToffeeComponent;
  let fixture: ComponentFixture<ToffeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToffeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
