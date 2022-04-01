type ICertidaoTRF4 = {
  nome: string;
  tipo: '01_CIVEL' | '01_CRIMINAL' | '01_CIVEL_CRIMINAL' | '02_CIVEL' | '02_CRIMINAL' | '02_CIVEL_CRIMINAL' | '03_ELEITORAL1' | '03_ELEITORAL2' 
}

export type ICertidaoTRF4ByCPF = ICertidaoTRF4 & {
  cpf: string;
}

export type ICertidaoTRF4ByCNPJ = ICertidaoTRF4 & {
  cnpj: string;
}



