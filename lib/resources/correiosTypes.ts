export type ICepPayload = {
  cep: string;
};

export type ICompletaCepPayload = {
  cep: string;
};

export type IRastreamentoPayload = {
  tracking_code: string;
};

export type IRestricoesEntregaPayload = {
  servico: string;
  cep_origem: string;
  cep_destino: string;
};
