import { TestBed } from '@angular/core/testing';

import { ExampleinventoryService } from './exampleinventory.service';

describe('ExampleinventoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExampleinventoryService = TestBed.get(ExampleinventoryService);
    expect(service).toBeTruthy();
  });
});
