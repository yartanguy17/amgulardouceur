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
  // menu: string;

  totalItems!: number;
  itemsPerPage= 20;
  page: number = 1;
  count: number = 0;
  tableSize: number = 20;
  tableSizes: any = [3, 6, 9, 12];
  constructor(private menuService: MenuService) {
    this.menus = [];
    // this.menu = '';
  }

  title = 'Liste des Menus'

  ngOnInit() {
    this.fetchMenus()
  }
 async fetchMenus() {
  await this.menuService.getMenus().subscribe((data) => {
    // console.log('*** Data', data);
    this.menus = data as Menu[];
  });
 }
 onTableDataChange(event: any) {
  this.page = event;
  this.fetchMenus();
}
onTableSizeChange(event: any): void {
  this.tableSize = event.target.value;
  this.page = 1;
  this.fetchMenus();
}
}
