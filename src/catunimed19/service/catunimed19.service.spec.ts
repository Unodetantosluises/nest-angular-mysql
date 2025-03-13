import { Test, TestingModule } from '@nestjs/testing';
import { Catunimed19Service } from './catunimed19.service';

describe('Catunimed19Service', () => {
  let service: Catunimed19Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Catunimed19Service],
    }).compile();

    service = module.get<Catunimed19Service>(Catunimed19Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
