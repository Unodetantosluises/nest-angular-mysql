import { Test, TestingModule } from '@nestjs/testing';
import { CatPmibccService } from './cat_pmibcc.service';

describe('CatPmibccService', () => {
  let service: CatPmibccService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatPmibccService],
    }).compile();

    service = module.get<CatPmibccService>(CatPmibccService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
