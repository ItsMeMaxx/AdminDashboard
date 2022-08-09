import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmandPageComponent } from './confirmand-page.component';

describe('ConfirmandPageComponent', () => {
  let component: ConfirmandPageComponent;
  let fixture: ComponentFixture<ConfirmandPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmandPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmandPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
