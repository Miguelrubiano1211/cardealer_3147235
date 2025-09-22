import { isNotEmpty, IsNotEmpty } from "class-validator";

export class crearStudentsDto {
    @IsNotEmpty()
    plate : string


    @IsNotEmpty()
    realse_date: Date;
    
    
    is_available:true;
    price : number;
    student_id: number;

}