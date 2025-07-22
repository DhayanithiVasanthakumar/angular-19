import { NgStyle } from '@angular/common';
import { Component ,Input,input} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  imports: [NgStyle],
  templateUrl: './progress-bar.html',
  styleUrl: './progress-bar.css'
})
export class ProgressBar {

  @Input() progressValue : number=0;
}
