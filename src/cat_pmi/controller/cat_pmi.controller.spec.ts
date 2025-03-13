import { Test, TestingModule } from '@nestjs/testing';
import { CatPmiController } from './cat_pmi.controller';

describe('CatPmiController', () => {
  let controller: CatPmiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatPmiController],
    }).compile();

    controller = module.get<CatPmiController>(CatPmiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
