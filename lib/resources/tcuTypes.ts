export type ICniPayload = {
  tipo_relacao: string;
  cpf?: string;
  cnpj?: string;
};

export type ICnpPayload = {
  cpf?: string;
  cnpj?: string;
};

export type IConsolidadaPjPayload = {
  cnpj: string;
  aceita_resultado_parcial?: string;
};

export type IInabilitadosPayload = {
  nome?: string;
  uf?: string;
  numero_processo?: string;
  cpf?: string;
};

export type IInidoneosPayload = {
  nome?: string;
  uf?: string;
  numero_processo?: string;
  cpf?: string;
  cnpj?: string;
};
