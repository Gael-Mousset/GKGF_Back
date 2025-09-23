import { Test, TestingModule } from '@nestjs/testing';
import { PlateformService } from './plateform.service';

describe('PlateformService', () => {
  let service: PlateformService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlateformService],
    }).compile();

    service = module.get<PlateformService>(PlateformService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
