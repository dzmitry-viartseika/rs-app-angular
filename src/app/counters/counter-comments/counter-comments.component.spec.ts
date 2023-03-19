import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterCommentsComponent } from './counter-comments.component';

describe('CounterItemComponent', () => {
  let component: CounterCommentsComponent;
  let fixture: ComponentFixture<CounterCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterCommentsComponent ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(CounterCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
