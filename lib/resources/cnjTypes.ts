export type IImprobidadePayload = {
  nome?: string;
  cpf?: string;
  cnpj?: string;
};

export type IMandadosPrisaoPayload = {
  nome?: string;
  nome_mae?: string;
  cpf?: string;
};

export type IServentiasExtrajudiciaisPayload = {
  cns: string;
};

export type IServentiasExtrajudListaPayload = {
  uf: string;
  municipio: string;
};

export type ISeeuProcessosPayload = {
  nome_parte?: string;
  nome_mae?: string;
  numero_processo?: string;
  cpf?: string;
  cnpj?: string;
};
