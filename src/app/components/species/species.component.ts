import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SpeciesService } from '../../services/species.service';
import { Species } from '../../interfaces/Species';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-species',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {
  speciesForm: FormGroup = new FormGroup({});
  especies: Species[] = [];

  constructor(private speciesService: SpeciesService, private formBuilder: FormBuilder) {
    this.speciesForm = this.formBuilder.group({
      nome: [''],
      status: ['']
    });
  }

  applyFilters(): void {
    const filters = this.speciesForm.value;
    this.speciesService.list(filters).subscribe((especies) => (this.especies = especies));
  }

  list(): void {
    this.speciesService.list({}).subscribe((especies) => {
      this.especies = especies;
    });
  }
  
  ngOnInit(): void {
    this.list();
  }

}
