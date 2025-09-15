import { Body, Controller,Post } from '@nestjs/common';
import { post } from 'axios';
import { crearStudentsDto } from './create-students.dto';
import {PersonsService} from "./persons.service"





@Controller('persons')
export class PersonsController {

constructor(private PersonsService:PersonsService){}



@Post()
create(@Body()newPerson:crearStudentsDto){
    return this.PersonsService.create(newPerson)
}


}
