import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstNavBarComponent } from './first-nav-bar.component';

describe('FirstNavBarComponent', () => {
  let component: FirstNavBarComponent;
  let fixture: ComponentFixture<FirstNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstNavBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
