import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  LufthansaGroup:any[]=[
    'Jobs & carrers',
    'Aviation Group',
    'Press',
    'Lufthansa Partners',
    'Sustainability'
]

CoustomerServiceList:any[]=[
  'Lufthansa ID account',
  'Miles & More',
  'Help & Contact',
  'Feedback',
  'Newsletter'
]

CorporateCoustomerList:any[]=[
  'For Travel Agents',
  'For Corporate Coustomers',
  'Corporate Bonus Programme'
]

}
