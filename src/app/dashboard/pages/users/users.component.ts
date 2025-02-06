import { Component, inject, signal } from '@angular/core';
import { User } from '../../../interfaces/req-response';
import { UsersService } from '@services/users.service';
import { TitleComponent } from '@shared/title/title.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface State {
  users: User[];
  loading: boolean;
}

@Component({
  standalone: true,
  imports: [TitleComponent, CommonModule, RouterModule],
  templateUrl: './users.component.html',
  styles: ``,
})
export default class UsersComponent {
  public usersService = inject(UsersService);
}
