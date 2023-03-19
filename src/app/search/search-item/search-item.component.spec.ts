import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SearchItemComponent } from './search-item.component';

describe('-SearchItemComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        SearchItemComponent,
      ],
    }).compileComponents();
  });
});
