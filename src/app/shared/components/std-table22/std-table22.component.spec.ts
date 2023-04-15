import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdTable22Component } from './std-table22.component';

describe('StdTable22Component', () => {
  let component: StdTable22Component;
  let fixture: ComponentFixture<StdTable22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdTable22Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdTable22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
