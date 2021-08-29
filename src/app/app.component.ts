import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Git Planner';

  ngOnInit(): void {
    // const squares:any = document.querySelector('.squares');
    // for (var i = 1; i < 365; i++) {
    //   const level = Math.floor(Math.random() * 3);  
    //   squares.insertAdjacentHTML('beforeend', `<li data-level="${level}"></li>`);
    // }
  }

}
