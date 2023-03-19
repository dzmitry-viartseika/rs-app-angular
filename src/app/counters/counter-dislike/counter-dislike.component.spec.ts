import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterDislikeComponent } from './counter-dislike.component';

describe('CounterItemComponent', () => {
  let component: CounterDislikeComponent;
  let fixture: ComponentFixture<CounterDislikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterDislikeComponent ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(CounterDislikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
