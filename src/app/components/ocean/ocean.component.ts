import { Component } from '@angular/core';
import { Ocean } from '../../interfaces/Ocean';
import { OceanService } from '../../services/ocean.service';
import { CommonModule } from '@angular/common'; 
import { FormGroup, Validators } from '@angular/forms'; 
import { FormBuilder } from '@angular/forms';  
import { ReactiveFormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-ocean',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ocean.component.html',
  styleUrl: './ocean.component.css'
})

export class OceanComponent {
  oceanForm: FormGroup = new FormGroup({}); //criar um formulário
  oceanos: Ocean[] = [];

  constructor(private oceanService: OceanService, private formBuilder: FormBuilder) {
    this.oceanForm = this.formBuilder.group({
      regiao: [''],
      temperaturaAgua: ['', Validators.pattern('^[0-9]*$')],
      pH: ['', Validators.pattern('^[0-9]*$')],
      nivelPoluicao: ['']
    }); 
  }

  applyFilters(){
    const filters = this.oceanForm.value;
    this.oceanService.list(filters).subscribe((oceanos) => (this.oceanos = oceanos));
  }


  list(): void {
     this.oceanService.list({}).subscribe((oceanos) => (this.oceanos = oceanos));
  }

  ngOnInit(): void {
    this.list();
  }
}

