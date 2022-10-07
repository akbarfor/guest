export interface GuestApp{
    id: string,
    fullname: string,
    nomorhp: string,
    alamat: string,
    gender,
    status,
    tujuan : string,
}

export enum Gender{
    MALE = 'MALE',
    FEMALE = 'FEMALE',
}

export enum Status{
    EMPLOYEE = 'EMPLOYEE',
    NONEMPLOYEE = 'NONEMPLOYEE'
}