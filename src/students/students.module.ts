import { Module } from '@nestjs/common';
import { StudentsController } from './students.controller';
import { StudentserviceService } from './studentservice.service';
import { prismaModule } from 'prisma/prisma.module';

@Module({
  imports:[prismaModule],
  controllers: [StudentsController],
  providers: [StudentserviceService]
})
export class StudentsModule {}
