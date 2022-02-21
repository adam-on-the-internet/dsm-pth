import {Component} from '@angular/core';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent {
  public allNewsletters = [
    {
      link: "assets/newsletter/peoples_gazette_february_2022.pdf",
      name: "People's Gazette: February 2022",
      details: "Our first Newsletter, featuring information about Community Fridges, Council Donors, and more.",
      released: "February 21, 2022"
    },
  ];

  public get latestNewsletter() {
    return this.allNewsletters[0];
  }

}
