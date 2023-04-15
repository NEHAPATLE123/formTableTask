import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdForm11Component } from './std-form11.component';

describe('StdForm11Component', () => {
  let component: StdForm11Component;
  let fixture: ComponentFixture<StdForm11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdForm11Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdForm11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
