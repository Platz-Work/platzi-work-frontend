export interface Job {
  fechaPublicacion: Date;
  empresa: string;
  puesto: string;
  modalidad: string;
  tecnologia: string;
  rangoSalarioAlto: number;
  rangoSalarioBajo: number;
  moneda: string;
  descripcionEmpresa: string;
  link: string;
  favorito: boolean;
  idUsuario: number;
  idComentario: number;
  idAdminUser: number;
  trabajadoresActuales: CurrentWorker[];
  activa: boolean;
}

export interface CurrentWorker {
  id: number;
}
