import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChurchEntryComponent } from './church-entry.component';

describe('ChurchEntryComponent', () => {
  let component: ChurchEntryComponent;
  let fixture: ComponentFixture<ChurchEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChurchEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChurchEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
