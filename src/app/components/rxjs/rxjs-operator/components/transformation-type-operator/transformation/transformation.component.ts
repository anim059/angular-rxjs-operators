import { BufferComponent } from '../operators/buffer/buffer.component';
import { Component } from '@angular/core';

@Component({
  selector: 'transformation',
  standalone: true,
  imports: [BufferComponent],
  templateUrl: './transformation.component.html',
  styleUrl: './transformation.component.scss'
})
export class TransformationComponent { }