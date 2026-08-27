export type IBaseDistribuicaoPayload = {
  cnpj: string;
  tipo_instalacao: string;
};

export type IInstalacoesSimpPayload = {
  cnpj: string;
};

export type IPostosPayload = {
  cnpj?: string;
};

export type IRevendasPayload = {
  cnpj?: string;
};
