import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClusterSectionComponent } from './cluster-section.component';

describe('ClusterSectionComponent', () => {
  let component: ClusterSectionComponent;
  let fixture: ComponentFixture<ClusterSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClusterSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClusterSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
