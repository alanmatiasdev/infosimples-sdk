export type IAntecedentesCriminaisPfEmitPayload = {
  nome: string;
  birthdate: string;
  cpf?: string;
  nome_mae?: string;
  nome_pai?: string;
  uf_nascimento?: string;
};

export type IAntecedentesCriminaisPfValPayload = {
  certidao_codigo: string;
  birthdate: string;
};

export type IAntecedentesCriminaisMgPayload = {
  rg?: string;
  cpf?: string;
};

export type IAntecedentesCriminaisSpPayload = {
  nome: string;
  birthdate: string;
  genero: string;
  rg?: string;
  rg_digito?: string;
  rg_expedicao?: string;
  cin_cpf?: string;
  cin_expedicao?: string;
  pai?: string;
  mae?: string;
};
