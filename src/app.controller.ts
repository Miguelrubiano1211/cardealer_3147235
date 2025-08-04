import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller(`cars`)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    
    const nombre: string = "Miguel Angel"
    return `Este es el response para: ${nombre}`;
  }
}
