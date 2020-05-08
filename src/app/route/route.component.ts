import { Component, OnInit } from '@angular/core';
import { RouteService } from '../services/route.services';
//import {Pipe,PipeTransform} from '@angular/core';

@Component({
  selector: 'approute',
  templateUrl: './route.component.html',
 providers:[RouteService]
  })

  export class RouteComponent 
  {
    id: number;
    add=false;
    update=false;
    del=false;
     public route;
     public sessionId;
    //  displayedColumns = ["id","source","destination","distance","travelduration","actions"];
     
     constructor(public routeService:RouteService)
     {
       
       routeService.getRouteDetails().subscribe((response)=>
       {
        this.route=response;
        console.log('Received route details:',response);
         }
       
       );
     }
     delRoute(){
      this.del=true;
    }
     addRoute(){
       this.add=true;
     }
     upRoute(){
      this.update=true;
    }
     onSubmit(source:any,destination:any,distance:any,time:any)
     {
       this.sessionId=sessionStorage.getItem("sessionId");
       this.sessionId="5017e";
       
            this.routeService.addRouteDetails({
 
                "source":source.value,
                "destination":destination.value,
                 "distance":distance.value,
                 "time":time.value,
                
              },this.sessionId).subscribe((response) => {
            console.log("response array", response)
            this.route.push(response);
            console.log(this.route);
            
            
       });
     
  }
  
updateRoute(routeId:any,source:any,destination:any,distance:any,time:any) {
  let temp=[];
  this.sessionId=sessionStorage.getItem("sessionId");
  this.sessionId="5017e";
  let route = {
    
    source:source.value,
    destination:destination.value,
    distance:distance.value,
    time:time.value,
  
  };
  this.id=routeId.value;
  console.log("routeid= ",routeId);
  console.log("source=",source);

    this.routeService.updateRouteDetails( this.id,route,this.sessionId).subscribe(
      (response)=>{console.log("Route updated",response);
    this.route.forEach(element => {if(element.routeId!=this.id){
      temp.push(element);
    }
    else temp.push(response);},
    )
    this.route=temp; 
    console.log("temp =",temp);
    console.log("response =",this.route);

    });
    
      console.log(this.sessionId);
    
  
 
   
  }
  deleteRoute(routeid:any) {

    console.log("id=",routeid);
    let temp=[];
    this.sessionId=sessionStorage.getItem("sessionId");
this.sessionId="5017e";

    this.routeService.deleteRouteDetails(routeid,this.sessionId).
    subscribe(
      (response)=>{console.log("Route deleted");
      // temp.push(response);
      // temp.slice(routeid,1);
      // this.route=temp; 
      // console.log("temp =",temp);
      // console.log("response =",this.route);
  
      });

 
  }

 
}


