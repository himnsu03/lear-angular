import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModules } from './form-modules';

describe('FormModules', () => {
  let component: FormModules;
  let fixture: ComponentFixture<FormModules>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormModules]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormModules);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
