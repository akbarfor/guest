import { Injectable, NotFoundException } from '@nestjs/common';
import {v4 as uuid } from 'uuid';
import { CreateGuestAppDto } from './dto/create-guest.dto';
import { Gender, Status, GuestApp } from './guests.model';
import { GetGuestAppFilterDto } from './dto/get-guest.filter.dto';

@Injectable()
export class GuestappService {
    private guestApp : GuestApp[] = [];

    getAllGuestApp(){
        return this.guestApp;
    }

    getGuestAppWithFilter(filterDto : GetGuestAppFilterDto) : GuestApp[]{
        const {gender, status} = filterDto;

        let guestApp = this.getAllGuestApp();

        
        if(gender){
            guestApp = guestApp.filter((guestApp) => guestApp.gender === gender)
        }

        if(status){
            guestApp = guestApp.filter((guestApp) => {
                
                if(guestApp.fullname.includes(status)
                || guestApp.alamat.includes(status)){
                    return true;
                }

                return false;
            });
        }

        return guestApp;
    }

    createGuestApp(createGuestAppDto : CreateGuestAppDto): GuestApp{

        const{
            fullname, nomorhp, alamat, tujuan
        } = createGuestAppDto;
        
        const guestApp : GuestApp = {
            id:uuid(),
            fullname,
            nomorhp,
            alamat,
            tujuan,
            gender: Gender.MALE,
            status: Status.EMPLOYEE

        };
        this.guestApp.push(guestApp);
        return guestApp;
    }

    getGuestAppById(id: string) : GuestApp{
    
        const found = this.guestApp.find((guestApp) => guestApp,id === id);
        if(!found){
            throw new NotFoundException('Guest not found');
        }
        return found;
    }
    
    deleteGuestApp(id:string) : void{
        const found = this.getGuestAppById(id);
        this.guestApp = this.guestApp.filter((guestApp) => guestApp.id !== found.id)
    }
    
    updateGuestAppStatus (id:string, gender: Gender, fullname:string, nomorhp: string, alamat: string, tujuan: string, status: Status){
        const guestApp = this.getGuestAppById(id);
        guestApp.gender = gender;
        guestApp.fullname = fullname;
        guestApp.alamat = alamat;
        guestApp.nomorhp = nomorhp;
        guestApp.status = status;
        guestApp.tujuan = tujuan;
        return guestApp;
    }


}
