import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { StudentserviceService } from './studentservice.service';
import { crearStudentsDto } from './create-students.dto';

@Controller('students')
export class StudentsController {

   //endpoint: punto de entrada
    // que otro proyecto va a utilizar
    //va a recibir requet http de aquel
    // proyecto
    //se programa con una funcion
    // con sintaxis del lenguaje
    // de programacion
    
    
    // inyeccion de dependencias
    //inyectar un componente para uso en tro
    //sin tener que instanciarlo

    constructor(private readonly studentservices: StudentserviceService) {}



    @Get()
    consultarStudents() {
    return this.studentservices.findAll();
    }



    // este espacio es para crear un students 
    @Post()

    create(@Body()newStudents:crearStudentsDto){
        return this.studentservices.create(newStudents);
    }


        //consultar un resource por id 
    //un student por id
    @Get(`:id`)
    findOne(@Param(`id`) id: number) {
        return this.studentservices.findOne(+id);
    }
    
}





/*



    @Get()
    findAll() {
        return this.studentservices.findAll();
    }






    @Patch(`:id`)
   update(@Param(`id`) id: string){

        return "aqui se utilizara el estudiante con id:" + id
        
    }

    @Delete(`:id`)
   remove(@Param(`id`) id: string){

        return {
            "success": true,
            "massage": this.studentservices.remove(+id),
            "message": `Estudiante con id ${id} eliminado`
        }
        
    }
    



}
*/