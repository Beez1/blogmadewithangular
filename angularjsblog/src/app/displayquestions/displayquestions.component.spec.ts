import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayquestionsComponent } from './displayquestions.component';

describe('DisplayquestionsComponent', () => {
  let component: DisplayquestionsComponent;
  let fixture: ComponentFixture<DisplayquestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayquestionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
