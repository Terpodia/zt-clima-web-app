import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickGuideSectionComponent } from './quick-guide-section.component';

describe('QuickGuideSectionComponent', () => {
  let component: QuickGuideSectionComponent;
  let fixture: ComponentFixture<QuickGuideSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickGuideSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickGuideSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
