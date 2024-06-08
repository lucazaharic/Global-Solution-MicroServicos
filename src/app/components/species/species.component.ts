import { Component } from '@angular/core';
import { Species } from '../../interfaces/Species';
import { SpeciesService } from '../../services/species.service';
import { CommonModule } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-species',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './species.component.html',
  styleUrl: './species.component.css'
})

export class SpeciesComponent {
  speciesForm: FormGroup = new FormGroup({}); //criar um formulário
  especies: Species[] = [];

  constructor(private speciesService: SpeciesService, private formBuilder: FormBuilder) {
    this.speciesForm = this.formBuilder.group({
      nome: [''],
      status: ['']
    });
  }

  applyFilters() {
    const filters = this.speciesForm.value;
    this.speciesService.list(filters).subscribe((especies) => (this.especies = this.especies));
  }


  list(): void {
    //retorna uma lista de clientes do servidor e atribui à propriedade 'clientes'
    this.speciesService.list({}).subscribe((especies) => (this.especies = especies));
  }
  //método para remover um cliente
  ngOnInit(): void {
    this.list();
  }
}
