export type IAmazoniaProtegePayload = {
  cnpj?: string;
  cpf?: string;
};

export type ICertidaoNegativaPayload = {
  cnpj?: string;
  cpf?: string;
};

export type IProcessosPayload = {
  query: string;
};
