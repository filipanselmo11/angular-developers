import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { DevService } from '../../services/dev.service';
import { Router } from '@angular/router';
import { DevInterface } from '../../types/dev';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form',
  standalone: true,
  providers: [DevService],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  devForm!: FormGroup;

  constructor(private devService: DevService, private router: Router, private toastr: ToastrService) {
    // Método 1
    // private fb: FormBuilder
    // this.devForm = this.fb.group({
    //   name: ['', Validators.required],
    //   email: ['', Validators.required, Validators.email],
    //   technologies: ['', Validators.required],
    // });

    // Método 2
    this.devForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      technologies: new FormControl('', [Validators.required]),
    });

    // this.data = {
    //   id: Math.floor(Math.random() * 1000) + 1,
    //   name: this.devForm.value.name,
    //   email: this.devForm.value.email,
    //   technologies: this.devForm.value.technologies
    // }
  }

  submitForm() {
    const data: DevInterface = {
      id: Math.floor(Math.random() * 1000) + 1,
      name: this.devForm.value.name,
      email: this.devForm.value.email,
      technologies: this.devForm.value.technologies
    }
    this.devService.createDev(data).subscribe((res) => {
      this.toastr.success('Dev Criado com sucesso');
      this.router.navigate(['']);
    }, (error) => {
      this.toastr.error(error);
    });
  }
}
