import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('file')
export class FileController {
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  upload(@UploadedFile() file) {
    if (!file) {
      throw new Error('No files were uploaded');
    }

    // Process the uploaded file here (save to db, manipulate, etc.)
    console.log('File uploaded', file);

    return { message: 'File uploaded successfully' };
  }
}
