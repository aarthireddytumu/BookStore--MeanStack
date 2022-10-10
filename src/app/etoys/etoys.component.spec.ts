import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtoysComponent } from './etoys.component';

describe('EtoysComponent', () => {
  let component: EtoysComponent;
  let fixture: ComponentFixture<EtoysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtoysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtoysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
