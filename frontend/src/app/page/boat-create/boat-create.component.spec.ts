import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatCreateComponent } from './boat-create.component';

describe('BoatCreateComponent', () => {
  let component: BoatCreateComponent;
  let fixture: ComponentFixture<BoatCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoatCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoatCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
