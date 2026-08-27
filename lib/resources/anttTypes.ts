export type IFretePisoMinimoPayload = {
  tipo_carga: string;
  eixos: string;
  distancia: string;
  composicao_veicular?: string;
  alto_desempenho?: string;
  retorno_vazio?: string;
};

export type IProdutosPerigososPayload = {
  placa: string;
  tipo_certificado?: string;
};

export type ISifamaBoleto2viaPayload = {
  login_senha: string;
  tipo_multa: string;
  auto_infracao: string;
  login_cpf?: string;
  login_cnpj?: string;
  cnpj_representado?: string;
};

export type ISifamaConsultarMultasPayload = {
  login_senha: string;
  tipo_fiscalizacao: string;
  login_cpf?: string;
  login_cnpj?: string;
  cnpj_representado?: string;
  placa?: string;
};

export type ISifamaDownloadAutoPayload = {
  login_senha: string;
  cnpj_representado: string;
  auto_infracao: string;
  login_cpf?: string;
  login_cnpj?: string;
};

export type ISifamaListaAutosPayload = {
  login_senha: string;
  tipo_multa: string;
  login_cpf?: string;
  login_cnpj?: string;
  representado?: string;
  pagina?: string;
};

export type ITransportadorPayload = {
  cpf?: string;
  cnpj?: string;
  rntrc?: string;
};

export type ITricPayload = {
  placa: string;
};

export type IVeiculoPayload = {
  placa?: string;
  cpf?: string;
  cnpj?: string;
  rntrc?: string;
};
