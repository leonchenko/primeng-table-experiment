import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableLibComponent } from './table-lib.component';

describe('TableLibComponent', () => {
  let component: TableLibComponent;
  let fixture: ComponentFixture<TableLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
