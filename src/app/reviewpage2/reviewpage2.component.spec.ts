import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reviewpage2Component } from './reviewpage2.component';

describe('Reviewpage2Component', () => {
  let component: Reviewpage2Component;
  let fixture: ComponentFixture<Reviewpage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Reviewpage2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Reviewpage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
