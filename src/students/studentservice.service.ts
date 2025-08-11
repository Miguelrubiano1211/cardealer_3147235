import { Injectable } from '@nestjs/common';
import { create } from 'domain';
import { students } from './entities/students.entities';



@Injectable()
export class StudentserviceService {


    private  students : students[] = [
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
    //CRUD: select + from students
    //this: acceder a algo private en la clase
    findAll(): students[] {
        return this.students;
    };








    //buscar el student por id
    

    findOne(id: number): students | undefined {
    //busco el student por id
    let student = this.students.find( function (student) {
        return student.id === id;
    });
    return student;
}




    //crear un student
    create(student: students): students {
        this.students.push(student);
        return student;
    }


    //eiminar un elemento del arreglo
    // por id

    remove(id: number): string {
        //filter: es para retornar un nuevo arreglo
        //con elementos que cumpla la condicional
        this.students = this.students.filter(
            function(students){
                return students.id !== id;
            }
        )
        return "elemento eliminado con exito";
    }


    //actualizar un student
    update(id: number, updatedStudent: students): students | string {
        const index = this.students.findIndex(student => student.id === id);
        if (index === -1) {
            return `Student with id ${id} not found`;
        }
        this.students[index] = { ...this.students[index], ...updatedStudent };
        return this.students[index];
    }
}