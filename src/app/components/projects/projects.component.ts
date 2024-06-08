import { Component } from '@angular/core';
import { Projects } from '../../interfaces/Projects';
import { ProjectsService } from '../../services/projects.service';
import { CommonModule } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})

export class ProjectsComponent {
  projectsForm: FormGroup = new FormGroup({});
  projetos: Projects[] = [];

  constructor(private projectsService: ProjectsService, private formBuilder: FormBuilder) {
    this.projectsForm = this.formBuilder.group({
      nomeProjeto: [''],
      tipoProjeto: [''],
      tipoParticipacao: ['']
    });
  }

  applyFilters() {
    const filters = this.projectsForm.value;
    this.projectsService.list(filters).subscribe((projetos) => (this.projetos = projetos));
  }


  list(): void {
    //retorna uma lista de clientes do servidor e atribui à propriedade 'clientes'
    this.projectsService.list({}).subscribe((projetos) => (this.projetos = projetos));
  }
  ngOnInit(): void {
    this.list();
  }

}
