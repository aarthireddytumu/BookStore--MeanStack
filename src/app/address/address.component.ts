import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  storeAddresses = {
    Bengaluru: {
        address: 'no.3,3rd cross,Jayanagar 8th block Bengaluru-41',
        contact: 987654321,
        email: 'blr@galaxystore.com'
    },
    Chennai: {
        address: ' Near Pothis, T Nagar,Chennai -67',
        contact: 765432190,
        email: 'chnblr@galaxystore.com'
    },
    Delhi: {
        address: '19, Ansari Rd, Daryaganj, New Delhi, Delhi 110002',
        contact: 123283333,
        email: 'dlh@galaxystore.com'
    },
    Hyderabad: {
        address: 'Sigma Mall,Hypercity, Hyderbad-66',
        contact: 6789054278,
        email: 'hyd@galaxystore.com'
    },
    Mumbai: {
        address: '45, Ground Floor, Flora Fountain Somaiya Bhavan, 47, Mahatma Gandhi Road, Fort, Mumbai, Maharashtra 400001',
        contact: 976543219,
        email: 'mum@galaxystore.com'
    }
};
  store;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    //this.route.params.subscribe((routepara) => this.city = routepara.city);
    this.route.params.subscribe(para => this.store = this.storeAddresses[para.city] );
  }

}
