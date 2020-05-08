import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-options',
  templateUrl: './admin.options.html',
  providers:  [ LoginService ],
  styleUrls: ['./admin.options.css']
})

export class AdminOptionComponent implements OnInit {
  login: Object;
 

  
  constructor(public router:Router) 
  {
    
  }
  ngOnInit(): void 
  {
  }

    
  }
