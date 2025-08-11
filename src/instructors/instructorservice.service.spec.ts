import { Test, TestingModule } from '@nestjs/testing';
import { instructorserviceService } from './instructorservice.service';

describe('instructorserviceService', () => {
  let service: instructorserviceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [instructorserviceService],
    }).compile();

    service = module.get<instructorserviceService>(instructorserviceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});


