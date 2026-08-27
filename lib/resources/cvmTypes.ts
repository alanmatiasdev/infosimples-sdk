export type IParticipantePayload = {
  name?: string;
  cpf?: string;
  cnpj?: string;
};

export type IProcessoAdministrativoPayload = {
  numero_processo?: string;
  nome?: string;
  cpf?: string;
  cnpj?: string;
};

export type ISancionadoresPayload = {
  termo?: string;
  tipo_filtro?: string;
  data_inicio?: string;
  data_fim?: string;
};
