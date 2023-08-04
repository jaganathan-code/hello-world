import { Component } from '@angular/core';
// import { Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title="jagan";
  titles:string[]=[];
  addTitle(){
    this.titles.push(this.title)
    console.log(this.titles)
  }
 

  
  


//   obs = new Observable(observer => {
//     console.log('Observable starts');
//     observer.next('1');
//     observer.next('2');
//     observer.next('3');
//     observer.next('4');
//     observer.next('5');
//   });

//   ngOnInit() {
//     this.obs.subscribe(
//       val => {
//         console.log(val);
//       }, //next callback
//       error => {
//         console.log('error');
//       }, //error callback
//       () => {
//         console.log('Completed');
//       } //complete callback
//     );
//   }
}

  

