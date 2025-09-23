import { Test, TestingModule } from '@nestjs/testing';
import { PlateformController } from './plateform.controller';
import { PlateformService } from './plateform.service';

describe('PlateformController', () => {
  let controller: PlateformController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlateformController],
      providers: [PlateformService],
    }).compile();

    controller = module.get<PlateformController>(PlateformController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
