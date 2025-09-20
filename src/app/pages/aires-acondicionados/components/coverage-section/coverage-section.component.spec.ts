import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverageSectionComponent } from './coverage-section.component';

describe('CoverageSectionComponent', () => {
  let component: CoverageSectionComponent;
  let fixture: ComponentFixture<CoverageSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoverageSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoverageSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
