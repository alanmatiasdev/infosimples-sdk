export type IMarcasPayload = {
  marca: string;
  ncl?: string;
  tipo?: string;
  pesquisa_textual?: string;
  pedidos_vivos?: string;
  pagina?: string;
};

export type IMarcasProcessoPayload = {
  numero_processo: string;
};

export type IMarcasProcessoResumidaPayload = {
  numero_processo: string;
};

export type IMarcasTitularPayload = {
  cnpj?: string;
  cpf?: string;
  pagina?: string;
};

export type IPatentesPayload = {
  cnpj?: string;
  cpf?: string;
};
