import { Component, OnInit } from '@angular/core';
import { DevInterface } from '../../types/dev';
import { DevService } from '../../services/dev.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  loading: boolean = true;
  listDevs: DevInterface[] = [];

  constructor(private devService: DevService) {}

  ngOnInit(): void {
    this.devService.getDevs().subscribe((res) => {
      this.loading = true;
      this.listDevs = res;
      console.log('DEVS ', this.listDevs);
      this.loading = false;
    })
  }
}
