import { Test, TestingModule } from '@nestjs/testing';
import { CatPmibccController } from './cat_pmibcc.controller';

describe('CatPmibccController', () => {
  let controller: CatPmibccController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatPmibccController],
    }).compile();

    controller = module.get<CatPmibccController>(CatPmibccController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
