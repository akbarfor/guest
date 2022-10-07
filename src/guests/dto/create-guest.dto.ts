import { IsNotEmpty } from "class-validator";

export class CreateGuestAppDto{

    @IsNotEmpty()
    fullname : string;

    @IsNotEmpty()
    nomorhp : string;

    @IsNotEmpty()
    alamat : string;

    @IsNotEmpty()
    tujuan : string;

}