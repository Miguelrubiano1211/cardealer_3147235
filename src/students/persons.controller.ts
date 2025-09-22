import { Body, Controller,Post, Get, Patch, Delete, Param } from '@nestjs/common';
import { crearStudentsDto } from './create-students.dto';
import {PersonsService} from "./persons.service"
import { get } from 'http';





@Controller('persons')
export class PersonsController {

constructor(private PersonsService:PersonsService){}



@Post()
create(@Body()newPerson:crearStudentsDto){
    return this.PersonsService.create(newPerson)
}



@Get(":id")
findByid(@Param('id')id:string){
    return this.PersonsService.findById(parseInt(id))
}


}
