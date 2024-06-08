import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OceanComponent } from './components/ocean/ocean.component';
import { SpeciesComponent } from './components/species/species.component';
import { ProjectsComponent } from './components/projects/projects.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'ocean', component: OceanComponent },
    { path: 'species', component: SpeciesComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: '**', component: HomeComponent } /*Qualquer rota não encontrada será redirecionado para home */

];
