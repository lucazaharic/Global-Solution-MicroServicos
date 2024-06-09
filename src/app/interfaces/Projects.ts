export interface Projects {
  regiao: string;
  temperaturaAgua: number;
  pH: number;
  nivelPoluicao: string;
  projetosConservacao: Project[];
}

export interface Project {
  nomeProjeto: string;
  tipoProjeto: string;
  tipoParticipacao: string;
}
