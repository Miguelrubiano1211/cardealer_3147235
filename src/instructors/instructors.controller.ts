import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { instructorserviceService } from './instructorservice.service';

@Controller('instructors')
export class instructorsController {

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

    constructor(private readonly instructorservices: instructorserviceService) {}



    @Get()
    consultarinstructors() {
       return this.instructorservices.findAll();
    }

    @Post()
    crearinstructors(@Body() body){

        return this.instructorservices.create(body);
    }


    @Get()
    findAll() {
        return this.instructorservices.findAll();
    }



    //consultar un resource por id 
    //un instructors por id
    @Get(`:id`)
    findOne(@Param(`id`) id: number) {
        return this.instructorservices.findOne(+id);
    }
    


    @Patch(`:id`)
   update(@Param(`id`) id: string){

        return "aqui se utilizara el estudiante con id:" + id
        
    }

    @Delete(`:id`)
   remove(@Param(`id`) id: string){

        return {
            "success": true,
            "massage": this.instructorservices.remove(+id),
            "message": `Estudiante con id ${id} eliminado`
        }
        
    }
    



}
