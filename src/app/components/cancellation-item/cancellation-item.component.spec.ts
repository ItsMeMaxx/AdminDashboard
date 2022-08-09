import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancellationItemComponent } from './cancellation-item.component';

describe('CancellationItemComponent', () => {
  let component: CancellationItemComponent;
  let fixture: ComponentFixture<CancellationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancellationItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancellationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
