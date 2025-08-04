import { Controller, Get,
    Post,
    Patch,
    Delete
 } from '@nestjs/common';
import { get } from 'http';

@Controller('customer')
export class CustomerController {

    //endpoint: punto de entrada
    // que otro proyecto va a utilizar
    //va a recibir requet http de aquel
    // proyecto
    //se programa con una funcion
    // con sintaxis del lenguaje
    // de programacion
    
    
    @Get()
    consultarCustomers() {
        return "aqui se mostraran los customers"
    }

    @Post()
    crearCustomer(){

        return"aqui se va a crear un customer"
    }

}
