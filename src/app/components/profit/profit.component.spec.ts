import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitComponent } from './profit.component';

describe('ProfitComponent', () => {
  let component: ProfitComponent;
  let fixture: ComponentFixture<ProfitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
