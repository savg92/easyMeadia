import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-welcome-image',
  templateUrl: './welcome-image.component.html',
  styleUrls: ['./welcome-image.component.scss']
})
export class WelcomeImageComponent {
 @Input() SectionText: string = '';
}
