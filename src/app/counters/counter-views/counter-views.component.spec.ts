import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterViewsComponent } from './counter-views.component';

describe('CounterItemComponent', () => {
  let component: CounterViewsComponent;
  let fixture: ComponentFixture<CounterViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterViewsComponent ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(CounterViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
