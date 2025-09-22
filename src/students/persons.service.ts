import { HttpException, Injectable } from '@nestjs/common';
import {crearStudentsDto} from "./create-students.dto";
import { PrismaService } from 'src/prisma/prismaService';

@Injectable()
export class PersonsService {

    constructor(private prisma:PrismaService){}

        


    async create(newPerson: crearStudentsDto){


        let marca = await this.prisma.students.findFirst({
            where:{
                id_students:newPerson.student_id
            }
        })
        if (!marca){
            throw new HttpException('el estudiante no existe',400)
        }

        //validacion logica de negocio:
        //el estudiante o eprsona no uede estar repetida
        let existe = await this.prisma.instructor.findFirst({where:{plate:newPerson.plate}})

        if (existe){
            //ya existe 
            throw new HttpException(
                'el intructor ya existe', 400
            )
        }
        else{
            return await this.prisma.instructor.create({

            data:{
                plate : newPerson.plate,
                realse_date:new Date(newPerson.realse_date),
                is_available: newPerson.is_available,
                price: newPerson.price,
                student:{
                    connect:{id_students: newPerson.student_id} 
                } 

            }


        })
        }




        

    }






    async findById (id: number){
        //1. buscar al instructor por id
        let existe = await this.prisma.instructor.findFirst({where:{id:id}})
        //2. si no existe lanzar
        // una HttpExcepcion
        if (!existe){
            throw new HttpException(
                'el instructor no existe',404
            )
        }
        //3. si existe devolver el instructor 
        else {
            return {
                "success":true,
                "data":existe
            }
        }
    }

}


async findAll(){

    let instructor = await this.prisma.


}