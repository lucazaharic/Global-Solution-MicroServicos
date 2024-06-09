import { Component, OnInit  } from '@angular/core';
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
  projectsForm: FormGroup = new FormGroup({});
  projetos: Projects[] = [];

  constructor(private projectsService: ProjectsService, private formBuilder: FormBuilder) {
    this.projectsForm = this.formBuilder.group({
      nomeProjeto: [''],
      tipoProjeto: [''],
      tipoParticipacao: ['']
    });
  }

  applyFilters(): void {
    const filters = this.projectsForm.value;
    this.projectsService.list(filters).subscribe((projetos) => (this.projetos = projetos));
  }

  list(): void {
    this.projectsService.list({}).subscribe((projetos) => (this.projetos = projetos));
  }

  ngOnInit(): void {
    this.list();
  }

}
