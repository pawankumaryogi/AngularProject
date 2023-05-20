import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  // styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  constructor() { }

  ngOnInit() {
    this.users = [
      { name: 'John Doe', email: 'johndoe@example.com' },
      { name: 'Jane Smith', email: 'janesmith@example.com' },
      { name: 'Alice Johnson', email: 'alicejohnson@example.com' },
      { name: 'John Doe', email: 'johndoe@example.com' },
      { name: 'Jane Smith', email: 'janesmith@example.com' },
      { name: 'Alice Johnson', email: 'alicejohnson@example.com' },
      { name: 'John Doe', email: 'johndoe@example.com' },
      { name: 'Jane Smith', email: 'janesmith@example.com' },
      { name: 'Alice Johnson', email: 'alicejohnson@example.com' },
    ];
  }

  sortByName() {
    this.users.sort((a, b) => a.name.localeCompare(b.name));
  }

}
