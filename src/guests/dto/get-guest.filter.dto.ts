import { IsOptional, IsEnum, IsString, IsNotEmpty } from "class-validator";
import { Gender, Status  } from "../guests.model";

export class GetGuestAppFilterDto {

    @IsOptional()
    @IsEnum(Gender)
    gender : Gender;

    @IsOptional()
    @IsEnum(Status)
    status : Status;

}