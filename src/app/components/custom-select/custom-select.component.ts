import { Component, Input, OnInit } from '@angular/core';
import { CustomSelectConfig } from './custom-select.config';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-select.component.html',
  styleUrl: './custom-select.component.scss'
}) // todo Нужен ли (!) ?
export class CustomSelectComponent implements OnInit {
  public config: any;

  @Input() key: string;

  ngOnInit(): void {
    this.config = CustomSelectConfig[this.key];
  }
}
