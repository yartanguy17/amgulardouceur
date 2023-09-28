import { Component, OnInit } from '@angular/core';
import { Menu } from '../models/menu.model';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menus!: Menu[];
  menu: string;
  constructor(private menuService: MenuService) {
    this.menus = [];
    this.menu = '';
  }

  title = 'Liste des Menus'

  ngOnInit() {
    this.menuService.getMenus().subscribe((data) => {
      console.log('*** Data', data);
      this.menus = data as Menu[];
    });
  }
}
