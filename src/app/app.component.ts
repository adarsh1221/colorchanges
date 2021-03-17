import { Component, OnInit, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  color: any = [
    { id: 1, status: "false" , color:'red' },
    { id: 2, status: "false", color:'blue' },
    { id: 3, status: "false",color:'green' },
    { id: 4, status: "false",color:'yellow' }
  ];

  constructor() {}
  ngOnInit() {}
  onClick(event) {
    console.log(event);
    console.log(this.color);
    for (let x in this.color) {
      this.color[x].status = "false";
      if (event == x) {
        this.color[x].status = "true";
      }
    }
  }
}
