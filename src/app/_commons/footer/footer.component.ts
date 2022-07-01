import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  navlinks = [
    { name: 'Acceuil', uri: '/home' },
    { name: 'Produits', uri: '/product' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
