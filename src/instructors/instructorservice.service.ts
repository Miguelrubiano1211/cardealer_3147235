import { Injectable } from '@nestjs/common';
import { create } from 'domain';
import { instructors } from './entities/instructors.entities';



@Injectable()
export class instructorserviceService {


    private  instructors : instructors[] = [
        { 
            id: 1, 
            name: 'John Doe', 
            age: 20 ,
            email: "",
            createdAt: new Date(),
            
        },

        { id: 2, 
            name: 'Miguel Angel', 
            age: 19,
            email: "",
            createdAt: new Date(),
            
        },

    ]



    // metodos
    //CRUD: select + from instructors
    //this: acceder a algo private en la clase
    findAll(): instructors[] {
        return this.instructors;
    };








    //buscar el student por id
    

    findOne(id: number): instructors | undefined {
    //busco el student por id
    let instructor = this.instructors.find( function (instructor) {
        return instructor.id === id;
    });
    return instructor;
}




    //crear un student
    create(instructor: instructors): instructors {
        this.instructors.push(instructor);
        return instructor;
    }


    //eiminar un elemento del arreglo
    // por id

    remove(id: number): string {
        //filter: es para retornar un nuevo arreglo
        //con elementos que cumpla la condicional
        this.instructors = this.instructors.filter(
            function(instructors){
                return instructors.id !== id;
            }
        )
        return "elemento eliminado con exito";
    }


    //actualizar un student
    update(id: number, updatedinstructor: instructors): instructors | string {
        const index = this.instructors.findIndex(instructor => instructor.id === id);
        if (index === -1) {
            return `Student with id ${id} not found`;
        }
        this.instructors[index] = { ...this.instructors[index], ...updatedinstructor };
        return this.instructors[index];
    }
}