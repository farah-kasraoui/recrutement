import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablelistComponent } from './tablelist.component';

describe('TablelistComponent', () => {
  let component: TablelistComponent;
  let fixture: ComponentFixture<TablelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
