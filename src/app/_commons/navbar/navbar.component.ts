import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  navlinks = [
    { name: 'Acceuil', uri: '/home' },
    { name: 'Produits', uri: '/product' },
  ];

  constructor() {}

  ngOnInit(): void {}

  onClic(): void {
    alert('Gentil Hobbit');
  }
}
