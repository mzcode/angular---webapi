import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstanglerdemo';
  constructor() { }
  ngOnInit() {
  }
  onClickSubmit(formData) {
    if(formData.email=="")
    alert('empty go hell');
    else
    alert('Your Email is : ' + formData.email+"password"+formData.pwd);
  }
}
