import { Component } from '@angular/core';
import { Todo } from 'src/app/models/todo.interface';
import { Users } from 'src/app/models/users.interface';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent {
  tasks!: Todo[];
  users!: Users[];
  
  constructor() {
    this.getTasks().then((data) => {
      this.tasks = data;
      this.getUsers().then((data) => {
        this.users = data;
      })
    })

  }

  async getTasks() {
    const response = await fetch('../../../assets/todo.json');
    const data = await response.json();
    return data;
  }

  async getUsers() {
    const response = await fetch('../../../assets/users.json');
    const data = await response.json();
    return data;
  }
}
