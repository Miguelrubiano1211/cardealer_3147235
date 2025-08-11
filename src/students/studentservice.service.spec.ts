import { Test, TestingModule } from '@nestjs/testing';
import { StudentserviceService } from './studentservice.service';

describe('StudentserviceService', () => {
  let service: StudentserviceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentserviceService],
    }).compile();

    service = module.get<StudentserviceService>(StudentserviceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
