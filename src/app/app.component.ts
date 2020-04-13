import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = 'Angular: Toggle Card/List View Demo';
  checked: boolean = false;
  isCard: boolean = false;
  data: Array<any> = [
    {
      name: 'John Doe',
      dob: '24-10-1980',
      nationality: 'United States',
      highestQualification: 'Masters in Science',
      jobDescription: 'Sr Technical Manager'
    },
    {
      name: 'John Doe',
      dob: '01-01-1980',
      nationality: 'Belgian',
      highestQualification: 'Masters in Science',
      jobDescription: 'Sr Developer'
    },
    {
      name: 'John Doe',
      dob: '01-01-1970',
      nationality: 'Canadian',
      highestQualification: 'Masters in Science',
      jobDescription: 'Testing Manager'
    }
  ];
  handleChange(event) {
    this.isCard = event.checked;
  }
}
