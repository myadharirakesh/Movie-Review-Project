import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reviewpage1Component } from './reviewpage1.component';

describe('Reviewpage1Component', () => {
  let component: Reviewpage1Component;
  let fixture: ComponentFixture<Reviewpage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Reviewpage1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Reviewpage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
