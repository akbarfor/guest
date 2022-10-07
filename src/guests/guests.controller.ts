import {Controller,Get,Post,Body,Param,Patch,Delete,Query} from '@nestjs/common';
import { CreateGuestAppDto } from './dto/create-guest.dto';
import { GuestApp,Gender,Status } from './guests.model';
import { GuestappService } from './guests.service';
import { GetGuestAppFilterDto } from './dto/get-guest.filter.dto'
import { updateGuestAppStatusDto } from './dto/update-guest.dto';

@Controller('guestapp')
export class GuestappController {
    constructor(private guestAppService : GuestappService){

    }

    @Get()
    getGuestApp(@Query() filterDto : GetGuestAppFilterDto) : GuestApp[]{
        if (Object.keys(filterDto).length){
            return this.guestAppService.getGuestAppWithFilter(filterDto);
        }else{
            return this.guestAppService.getAllGuestApp();
        }
    }

    @Delete('/:id')
    deleteGuestApp(@Param('id') id : string) : void{
        return this.guestAppService.deleteGuestApp(id);
    }

    @Patch('/:id')
    updateGuestAppStatus(  @Param('id')id:string,
       
        @Body() updateGuestAppStatusDto: updateGuestAppStatusDto) : GuestApp{
            const {gender, nomorhp, status, fullname, alamat, tujuan} = updateGuestAppStatusDto;
            return this.guestAppService.updateGuestAppStatus(id, gender, nomorhp, fullname, tujuan, alamat, status);
        }

    @Post()
    createGuestApp(@Body() createGuestAppDto : CreateGuestAppDto) : GuestApp{
        return this.guestAppService.createGuestApp(createGuestAppDto);
    }

    @Get('/:id')
    getGuestAppById(@Param('id')id : string) : GuestApp{
        return this.guestAppService.getGuestAppById(id);
    }

}
