import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { VendorsModule } from './vendors/vendors.module';
import { StudentsModule } from './students/students.module';

import { instructorsModule } from './instructors/instructors.module';
import { instructorsController } from './instructors/instructors.controller';



@Module({
  imports: [CustomersModule, VendorsModule, StudentsModule , instructorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
