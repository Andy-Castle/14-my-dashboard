import { booleanAttribute, Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  template: `<h1 class="text-3xl mb-5">
    {{ title }}
    <!-- - {{ withShadow }} -->
  </h1>`,
  styles: ``,
})
export class TitleComponent {
  @Input({ required: true })
  public title!: string;

  @Input({ transform: booleanAttribute })
  public withShadow: boolean = false;
}
