import { Injectable } from '@nestjs/common';
import {crearStudentsDto} from "./create-students.dto";
import { PrismaService } from 'src/prisma/prismaService';

@Injectable()
export class PersonsService {

    constructor(private prisma:PrismaService){}



    async create(newPerson: crearStudentsDto){

        return await this.prisma.instructor.create({

            data:{
                plate : newPerson.plate,
                realse_date:new Date(newPerson.realse_date),
                is_available: newPerson.is_available,
                price: newPerson.price,
                student_id: newPerson.student_id
            }


        })

    }




}
