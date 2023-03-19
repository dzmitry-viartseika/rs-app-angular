import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterLikeComponent } from './counter-like.component';

describe('CounterItemComponent', () => {
  let component: CounterLikeComponent;
  let fixture: ComponentFixture<CounterLikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterLikeComponent ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(CounterLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
