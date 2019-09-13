import { TestBed, inject } from '@angular/core/testing';

import { DataService } from './data.service';
import { SubService } from './sub.service';

const subServiceSpy = jest.fn((): SubService => {
  return {};
});

describe('Service: DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: SubService, useClass: subServiceSpy },
        DataService
      ]
    });

    service = TestBed.get(DataService);
  });

  it('should create service', () => {
    expect(service).toBeTruthy();
  });
});
