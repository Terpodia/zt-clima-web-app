import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuaranteesSectionComponent } from './guarantees-section.component';

describe('GuaranteesSectionComponent', () => {
  let component: GuaranteesSectionComponent;
  let fixture: ComponentFixture<GuaranteesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuaranteesSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuaranteesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
