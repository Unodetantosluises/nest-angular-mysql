import { Test, TestingModule } from '@nestjs/testing';
import { Pmi2019Controller } from './pmi2019.controller';

describe('Pmi2019Controller', () => {
  let controller: Pmi2019Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Pmi2019Controller],
    }).compile();

    controller = module.get<Pmi2019Controller>(Pmi2019Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
