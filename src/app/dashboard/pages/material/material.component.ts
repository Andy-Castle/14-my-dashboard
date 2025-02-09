import { Component, inject } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';

import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { OptionsBottomSheetComponent } from './ui/options-bottom-sheet/options-bottom-sheet.component';

@Component({
  selector: 'app-material',
  standalone: true,
  imports: [
    MatSlideToggleModule,
    MatBadgeModule,
    MatIconModule,
    MatButtonModule,
    MatBottomSheetModule,
  ],
  templateUrl: './material.component.html',
})
export default class MaterialComponent {
  private _bottomSheet = inject(MatBottomSheet);

  openBottomSheet(): void {
    this._bottomSheet.open(OptionsBottomSheetComponent);
  }
}
