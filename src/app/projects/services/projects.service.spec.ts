import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProjectsService } from './projects.service';

describe('ProjectsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProjectsService]
    });
  });

  it(
    'should be created',
    inject([ProjectsService], (service: ProjectsService) => {
      expect(service).toBeTruthy();
    })
  );
});
