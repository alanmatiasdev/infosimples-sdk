export type IServidorPublicoPayload = {
  cpf?: string;
  nome?: string;
};

export type ICeisPayload = {
  cnpj?: string;
  cpf?: string;
};

export type ICnepPayload = {
  cnpj?: string;
  cpf?: string;
};

export type IAuxilioEmergencialPayload = {
  cpf?: string;
  nis?: string;
  municipio?: string;
  data_inicio: string;
  data_fim: string;
};

export type IBolsaFamiliaPayload = {
  cpf?: string;
  nis?: string;
  municipio?: string;
  data_inicio: string;
  data_fim: string;
};

export type ISeguroDefesoPayload = {
  cpf?: string;
  nis?: string;
  data_inicio?: string;
  data_fim?: string;
};

export type IRepassePayload = {
  ano: string;
  localidade: string;
  tipo?: 'estado' | 'municipio';
};
