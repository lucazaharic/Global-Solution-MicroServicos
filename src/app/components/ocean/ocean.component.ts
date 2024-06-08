import { Component } from '@angular/core';
import { Ocean } from '../../interfaces/Ocean';
import { OceanService } from '../../services/ocean.service';
import { CommonModule } from '@angular/common'; //importar o módulo CommonModule para
import { FormGroup, Validators } from '@angular/forms'; //importar o módulo FormGroup para criar um formulário
import { FormBuilder } from '@angular/forms';  //importar o módulo FormBuilder para criar um formulário
import { ReactiveFormsModule } from '@angular/forms'; //importar o módulo ReactiveFormsModule para criar um formulário

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
    }); //criar um formulário com os campos nome e telefone
  }

  applyFilters(){
    const filters = this.oceanForm.value;
    this.oceanService.list(filters).subscribe((oceanos) => (this.oceanos = oceanos));
    console.warn(this.oceanos);
  }



  list(): void {
    //retorna uma lista de clientes do servidor e atribui à propriedade 'clientes'
     this.oceanService.list({}).subscribe((oceanos) => (this.oceanos = oceanos));
  }

  ngOnInit(): void {
    this.list();
  }
}

