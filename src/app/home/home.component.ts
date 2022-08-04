import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistroService } from '../registro.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articulos:any;

  art={
    codigo:0,
    name:"",
    password:""

  }
  constructor(private registroServicio : RegistroService,private router:Router) { }

  ngOnInit() {
   
  }

  

  alta() {
    this.registroServicio.alta(this.art).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
      
        this.router.navigate(['/fotos']);
      }
    });
  }


}

