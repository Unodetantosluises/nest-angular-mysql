import { Test, TestingModule } from '@nestjs/testing';
import { Pmi2019Service } from './pmi2019.service';

describe('Pmi2019Service', () => {
  let service: Pmi2019Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Pmi2019Service],
    }).compile();

    service = module.get<Pmi2019Service>(Pmi2019Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
