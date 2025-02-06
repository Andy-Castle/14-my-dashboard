import { Component, inject, signal } from '@angular/core';
import { User } from '../../../interfaces/req-response';
import { UsersService } from '@services/users.service';

interface State {
  users: User[];
  loading: boolean;
}

@Component({
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styles: ``,
})
export default class UsersComponent {
  public usersService = inject(UsersService);
}
