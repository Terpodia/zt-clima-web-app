import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VrfSectionComponent } from './vrf-section.component';

describe('VrfSectionComponent', () => {
  let component: VrfSectionComponent;
  let fixture: ComponentFixture<VrfSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VrfSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VrfSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
