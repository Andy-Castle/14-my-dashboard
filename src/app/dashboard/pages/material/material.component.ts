import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-material',
  standalone: true,
  imports: [
    MatSlideToggleModule,
    MatBadgeModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './material.component.html',
})
export default class MaterialComponent {}
