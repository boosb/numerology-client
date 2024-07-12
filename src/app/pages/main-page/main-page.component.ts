import { Component } from '@angular/core';
import { ModalAuthComponent } from '../../components/modal-auth/modal-auth.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ImgService } from '../../services/img.service';
import { ModalService, TYPES } from '../../services/modal.service';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    CommonModule,
    ModalAuthComponent,
    RouterLink
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

  public dlgTypes = TYPES;

  constructor(
    public modalService: ModalService,
    public imgService: ImgService
  ) {}
}