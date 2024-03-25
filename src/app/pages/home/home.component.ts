import { Component, OnInit } from '@angular/core';
import { DevInterface } from '../../types/dev';
import { DevService } from '../../services/dev.service';
import { ButtonComponent } from '../../components/button/button.component';
import { ProgressComponent } from '../../components/progress/progress.component';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent, ProgressComponent, CommonModule, MatGridListModule, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  loading: boolean = true;
  listDevs: DevInterface[] = [];

  constructor(private devService: DevService) {}

  ngOnInit(): void {
    this.loading = true;
    this.devService.getDevs().subscribe((res) => {
      this.listDevs = res;
    }, (error) => {
      console.error('ERROR ', error);
    });
    this.loading = false;
  }
}
