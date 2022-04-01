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

type ICertidaoTRF1 = {
  tipo: 'CIVEL' | 'CRIMINAL' | 'ELEITORAL',
  orgao: 'AC' | 'AM' | 'AP' | 'BA' | 'DF' | 'GO' | 'MA' | 'MG' | 'MT' | 'PA' | 'PI' | 'RO' | 'RR' | 'TO' | 'TRF1' | '1_GRAU' | '1_2_GRAU';
  considera_filiais: 0 | 1;
}

type ICertidaoTRF1ByCPF = ICertidaoTRF1 & { cpf: string };

type ICertidaoTRF1ByCNPJ = ICertidaoTRF1 & { cnpj: string };

export type ICertidaoTRF1Payload = ICertidaoTRF1ByCPF | ICertidaoTRF1ByCNPJ;

export type ITSECertidaoPayload = {
  name: string;
  birthdate: string;
  cpf?: string;
  titulo_eleitoral?: string;
  mother?: string;
  father?: string;
}