import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedBannerComponent } from './featured-banner.component';

describe('FeaturedBannerComponent', () => {
  let component: FeaturedBannerComponent;
  let fixture: ComponentFixture<FeaturedBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeaturedBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
