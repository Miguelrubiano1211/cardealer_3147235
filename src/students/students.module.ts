import { Module } from '@nestjs/common';
import { StudentsController } from './students.controller';
import { StudentserviceService } from './studentservice.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PersonsController } from './persons.controller';
import { PersonsService } from './persons.service';





@Module({
  imports:[PrismaModule],
  controllers: [StudentsController, PersonsController],
  providers: [StudentserviceService, PersonsService]
})
export class StudentsModule {}
