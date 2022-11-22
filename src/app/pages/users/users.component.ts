import {Component, OnInit} from '@angular/core';
import {User} from "../../interfaces/user";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users: User[] = [];

  constructor(
    private readonly service: UserService,
    private readonly router: Router
  ) {
  }

  ngOnInit() {
    this.getUsers();
  }

  public getUsers(): void {
    const response = this.service.getUsers();
    this.users = [...response];
  }

  public addUser(): void{
    this.router.navigate([`registration/new`]).then();
  }

}
