export type IBularioEletronicoPayload = {
  nome_medicamento?: string;
  numero_registro?: string;
  numero_expediente_bula_vigente?: string;
  empresa_cnpj?: string;
  data_inicial?: string;
  data_final?: string;
};

export type IProcessoPayload = {
  protocolo?: string;
  numero_processo?: string;
  expediente?: string;
};
