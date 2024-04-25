import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewdisplayComponent } from './reviewdisplay.component';

describe('ReviewdisplayComponent', () => {
  let component: ReviewdisplayComponent;
  let fixture: ComponentFixture<ReviewdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReviewdisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReviewdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
