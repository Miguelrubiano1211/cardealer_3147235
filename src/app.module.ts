import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { VendorsModule } from './vendors/vendors.module';
import { StudentsModule } from './students/students.module';

@Module({
  imports: [CustomersModule, VendorsModule, StudentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
