import { Module } from '@nestjs/common';
import { StudentsController } from './students.controller';
import { StudentserviceService } from './studentservice.service';

@Module({
  controllers: [StudentsController],
  providers: [StudentserviceService]
})
export class StudentsModule {}
