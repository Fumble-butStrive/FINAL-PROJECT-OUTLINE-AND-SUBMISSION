import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hostel-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  email = "admin@gmail.com";
  userName = "admin";
  
  constructor() { }

  ngOnInit(): void {
  }

}

// email = "darshanparmar263@gmail.com";
// userName = "darshankparmar";
