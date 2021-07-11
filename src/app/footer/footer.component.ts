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

  socialMediaList:any[]=[
    'Facebook',
    'Twitter',
    'Youtube',
    'Instagram'
]

helpList:any[]=[
  'Payments',
  'Shipping',
  'FAQ',
  'Report',
  'Returns'
]

policyList:any[]=[
  'Return Policy',
  'Terms of Use',
  'Security',
  'Privacy',
  'Sitemap'
]

}
