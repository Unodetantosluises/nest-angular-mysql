import { Test, TestingModule } from '@nestjs/testing';
import { CatPmiService } from './cat_pmi.service';

describe('CatPmiService', () => {
  let service: CatPmiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatPmiService],
    }).compile();

    service = module.get<CatPmiService>(CatPmiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
