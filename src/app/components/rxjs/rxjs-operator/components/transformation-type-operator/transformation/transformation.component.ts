import { BufferComponent } from '../operators/buffer/buffer.component';
import { BufferCountComponent } from '../operators/buffer-count/buffer-count.component';
import { BufferTimeComponent } from '../operators/buffer-time/buffer-time.component';
import { Component } from '@angular/core';

@Component({
  selector: 'transformation',
  standalone: true,
  imports: [BufferComponent, BufferCountComponent, BufferTimeComponent],
  templateUrl: './transformation.component.html',
  styleUrl: './transformation.component.scss'
})
export class TransformationComponent { }