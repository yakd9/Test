import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  constructor() { 
    console.log('UserService--->');
  }

  isAdminRights():boolean{
    return false;
  }
}