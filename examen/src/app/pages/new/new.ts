import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Series } from '../../services/series';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  imports: [ReactiveFormsModule],
  templateUrl: './new.html',
  styleUrl: './new.css',
})
export class New {
  form = new FormGroup({
    name: new FormControl('',
      [Validators.required, Validators.minLength(3)]
    ),
    rating: new FormControl('', [Validators.required, Validators.min(0), Validators.max(10)]),
    channel: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  constructor(private seriesService: Series, private router: Router) {}

  onSubmit() {
    if (this.form.valid) {
      this.seriesService.postSeries(this.form.value).subscribe((response: any) => {
        console.log('Series created:', response);
        alert('Formulario enviado, id: ' + response.id);
      });
      this.router.navigate(['/']);
    }
  }
}
