import { TestBed, inject } from '@angular/core/testing';

import { ToDoListService } from './services/to-do-list.service';

describe('ToDoListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToDoListService]
    });
  });

  it('should ...', inject([ToDoListService], (service: ToDoListService) => {
    expect(service).toBeTruthy();
  }));
});
