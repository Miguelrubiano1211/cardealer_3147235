import { Module } from '@nestjs/common';
import { StudentsController } from './students.controller';
import { StudentserviceService } from './studentservice.service';
import { PrismaModule } from 'src/prisma/prisma.module';
@Module({
  imports:[PrismaModule],
  controllers: [StudentsController],
  providers: [StudentserviceService]
})
export class StudentsModule {}
