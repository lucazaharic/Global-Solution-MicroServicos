import { Component } from '@angular/core';
import { Projects } from '../../interfaces/Projects';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})

export class ProjectsComponent {

  projetos: Projects[] = [];

  constructor(private projectsService: ProjectsService) {
    this.list();
  }
  list(): void {
    //retorna uma lista de clientes do servidor e atribui à propriedade 'clientes'
     this.projectsService.list().subscribe((list) => (this.projetos = list));
  }
    //método para remover um cliente
  ngOnInit(): void {
    this.list();
  }

}
