import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajoSiluetaSectionComponent } from './bajo-silueta-section.component';

describe('BajoSiluetaSectionComponent', () => {
  let component: BajoSiluetaSectionComponent;
  let fixture: ComponentFixture<BajoSiluetaSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BajoSiluetaSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BajoSiluetaSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
