export interface Job {
  position:string;
  description:string;
  company:number;
  seniority: number;
  english_level: number;
  category: number;
  country: number;

}

export interface CurrentWorker {
  id: number;
}


// fechaPublicacion: Date;
// empresa: string;
// puesto: string;
// modalidad: string;
// tecnologia: string;
// rangoSalarioAlto: number;
// rangoSalarioBajo: number;
// moneda: string;
// descripcionEmpresa: string;
// link: string;
// favorito: boolean;
// idUsuario: number;
// idComentario: number;
// idAdminUser: number;
// trabajadoresActuales: CurrentWorker[];
// activa: boolean;