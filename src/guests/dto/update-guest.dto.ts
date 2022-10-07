import { IsEnum, IsNotEmpty } from "class-validator";
import { Gender, Status } from "../guests.model";


export class updateGuestAppStatusDto{

    @IsEnum(Gender)
    gender : Gender;

    @IsEnum(Status)
    status : Status;

    @IsNotEmpty()
    fullname : string;

    @IsNotEmpty()
    nomorhp : string;

    @IsNotEmpty()
    alamat : string;

    @IsNotEmpty()
    tujuan : string;
}