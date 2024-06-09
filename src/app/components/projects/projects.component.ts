// projects.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProjectsService } from '../../services/projects.service';
import { Projects } from '../../interfaces/Projects';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projectsForm: FormGroup;
  projetos: Projects[] = [];

  constructor(private projectsService: ProjectsService, private formBuilder: FormBuilder) {
    this.projectsForm = this.formBuilder.group({
      nomeProjeto: [''],
      tipoProjeto: [''],
      tipoParticipacao: ['']
    });
  }

  ngOnInit(): void {
    this.list();
  }

  applyFilters(): void {
    const filters = this.projectsForm.value;
    this.projectsService.list(filters).subscribe((projetos) => {
      console.log('Filtered Projects:', projetos); // Adicione esta linha para verificar os dados filtrados recebidos
      this.projetos = projetos;
    });
  }

  list(): void {
    this.projectsService.list({}).subscribe((projetos) => {
      console.log('All Projects:', projetos); // Adicione esta linha para verificar todos os dados recebidos
      this.projetos = projetos;
    });
  }
}
