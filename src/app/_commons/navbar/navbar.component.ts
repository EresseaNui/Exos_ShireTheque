import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  navlinks = [
    { id: 1, name: 'Produits', uri: '/product' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
