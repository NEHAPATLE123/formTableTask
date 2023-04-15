import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdTable11Component } from './std-table11.component';

describe('StdTable11Component', () => {
  let component: StdTable11Component;
  let fixture: ComponentFixture<StdTable11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdTable11Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdTable11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
