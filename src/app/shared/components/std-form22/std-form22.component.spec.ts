import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdForm22Component } from './std-form22.component';

describe('StdForm22Component', () => {
  let component: StdForm22Component;
  let fixture: ComponentFixture<StdForm22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdForm22Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdForm22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
