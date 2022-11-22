import {Injectable} from '@angular/core';
import {User} from "../interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private dummyData: User[] = [
    {
      id: '1',
      name: 'Joao da Silva',
      cpf: '26899337649',
      phone: '4233335555',
      email: 'joao@joaosilva.com.br'
    },
    {
      id: '2',
      name: 'Maria Antonieta',
      cpf: '65138896180',
      phone: '1255553333',
      email: 'maria@mariaantonieta.com.br'
    },
    {
      id: '3',
      name: 'Luiz Souza',
      cpf: '32420496329',
      phone: '1144446666',
      email: 'luiz@luizsouza.com.br'
    }
  ];

  constructor() {
  }

  private getStoredData(): User[]{
    let users: User[] = this.dummyData.slice();
    const storedData = sessionStorage.getItem('users');

    if (storedData) {
      users = JSON.parse(storedData);
    }

    return users;
  }

  public getUsers(): User[] {
    return this.getStoredData();
  }

  public findUSer(id: string): User | undefined {
    const users = this.getStoredData()
    return users.find((e) => e.id === id);
  }


  public remove(id: string): void {
    const users = this.getStoredData()

    const foundIndex = users.findIndex(e => e.id === id);
    if (foundIndex >= 0) {
      users.splice(foundIndex, 1);
      sessionStorage.setItem('users', JSON.stringify(users));
    }
  }

  public saveUser(user: User): void {
    const users = this.getStoredData()

    const foundIndex = users.findIndex(e => e.id == user.id);
    if (foundIndex >= 0) {
      users[foundIndex] = user;
    } else {
      users.push(user);
    }

    sessionStorage.setItem('users', JSON.stringify(users));
  }

}
