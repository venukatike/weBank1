import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { UserService } from './user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{

  constructor(private vb : UserService){

  }
  AllEmp:Employee[]=[];
  ngOnInit(){
    this.vb.GetAllUser().subscribe(x=>{
      this.AllEmp=x
    });
  }

}
