import { Component, EventEmitter, Output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { DevService } from '../../services/dev.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, FormsModule, MatButtonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  id: number = Math.floor(Math.random() * 1000) + 1;
  name: string =   '';
  email: string = '';
  technologies: string = ';'

  constructor(private devService: DevService, private router: Router){}

  submitForm() {
    const dados = {
      id: this.id,
      name: this.name,
      email: this.email,
      technologies: this.technologies,
    }

    this.devService.createDev(dados).subscribe(res => {
      console.log('RES ', res);
      this.router.navigateByUrl('');
    }, error => {
      console.log('ERROR ', error);
    });
  }
}
