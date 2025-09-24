import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { FileController } from './file.controller';

@Module({
  imports: [
    MulterModule.register({
      dest: './uploads/', //Define the upload directory
    }),
  ],
  controllers: [FileController],
})
export class FileModule {}
