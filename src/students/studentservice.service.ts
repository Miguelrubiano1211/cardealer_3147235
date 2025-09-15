import { Injectable } from '@nestjs/common';
import { create } from 'domain';
import { students } from './entities/students.entities';
import { PrismaService } from 'src/prisma/prismaService';
import { crearStudentsDto } from './create-students.dto';



@Injectable()
export class StudentserviceService {


    constructor(
        private prisma: PrismaService

    ){}



    // metodos
    //CRUD: select + from students
    //this: acceder a algo private en la clase
    findAll() {
    return this.prisma.students.findMany()
    };








    //buscar el student por id
    

    async findOne(id:number){
    //busco el student por id
    return await this.prisma.students.findFirst({
        where: {id_students:id}
    })

}




    //crear un student
    async create(newStudents:crearStudentsDto ){
        return await this.prisma.students.create({
        
            data:{
                name_students:newStudents.plate
            }


        })
    }


    //eiminar un elemento del arreglo
    // por id

    remove() {
        //filter: es para retornar un nuevo arreglo
        //con elementos que cumpla la condicional
    }


    //actualizar un student
    update() {
    
}
}