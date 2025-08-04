import { Controller, Get } from '@nestjs/common';

@Controller('vendors')
export class VendorsController {


    @Get()
    consultaVendors(){

        return"aqui estaran todos los vendors"



    }
}
