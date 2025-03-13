import { Test, TestingModule } from '@nestjs/testing';
import { Catunimed19Controller } from './catunimed19.controller';

describe('Catunimed19Controller', () => {
  let controller: Catunimed19Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Catunimed19Controller],
    }).compile();

    controller = module.get<Catunimed19Controller>(Catunimed19Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
