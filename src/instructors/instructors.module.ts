import { Module } from '@nestjs/common';
import { instructorsController } from './instructors.controller';
import { instructorserviceService } from './instructorservice.service';

@Module({
  controllers: [instructorsController],
  providers: [instructorserviceService]
})
export class instructorsModule {}
