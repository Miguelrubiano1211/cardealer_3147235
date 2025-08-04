import { Controller, Get, Post, Patch, Delete, Param } from '@nestjs/common';

@Controller('students')
export class StudentsController {

   //endpoint: punto de entrada
    // que otro proyecto va a utilizar
    //va a recibir requet http de aquel
    // proyecto
    //se programa con una funcion
    // con sintaxis del lenguaje
    // de programacion
    
    
    @Get()
    consultarStudents() {
        return "aqui se mostraran los estudiantes"
    }

    @Post()
    crearStudents(){

        return"aqui se va a crear los estudiantes"
    }

    @Patch(`:id`)
   update(@Param(`id`) id: string){

        return "aqui se utilizara el estudiante con id:" + id
        
    }

    @Delete(`:id`)
   remove(@Param(`id`) id: string){

        return "aqui se borrara el estudiante con id:" +id
        
    }




}
