import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleInventoryListComponent } from './example-inventory-list.component';

describe('ExampleInventoryListComponent', () => {
  let component: ExampleInventoryListComponent;
  let fixture: ComponentFixture<ExampleInventoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleInventoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleInventoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
