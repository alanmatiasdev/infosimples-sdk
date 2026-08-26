export type CNPJOpts = {
  cnpj: string;
  origem?: 'mobile' | 'web';
};

type PGFNIdentificacaoByCPF = {
  cpf: string;
  birthdate: string;
};

type PGFNIdentificacaoByCNPJ = {
  cnpj: string;
};

type PGFNIdentificacao = PGFNIdentificacaoByCPF | PGFNIdentificacaoByCNPJ;

export type PGFNPayload = PGFNIdentificacao & {
  preferencia_emissao?: 'nova' | '2via';
};

export type PGFNSegundaViaPayload = PGFNIdentificacao;

export type PGFNSegundaViaListaPayload = PGFNIdentificacao & {
  data_inicio: string;
  data_fim: string;
};

export type PGFNNovaPayload = PGFNIdentificacao;

export type PGFNDevedoresPayload = {
  cpf?: string;
  cnpj?: string;
};

export type IGovBrAuth = {
  login_cpf?: string;
  login_senha?: string;
  pkcs12_cert?: string;
  pkcs12_pass?: string;
};

export type IProcuradorPerfil = {
  perfil_procurador_cnpj?: string;
  perfil_procurador_cpf?: string;
};

export type ISituacaoFiscalPayload = IGovBrAuth & IProcuradorPerfil;

export type IComprovantePagamentoPayload = IGovBrAuth &
  IProcuradorPerfil & {
    data_inicio?: string;
    data_fim?: string;
    documento_numero?: string;
    codigo_receita?: string;
  };

export type IMeiPayload = IGovBrAuth & {
  cpf?: string;
  cnpj?: string;
};

export type INfseGestaoAuth = {
  pkcs12_cert?: string;
  pkcs12_pass?: string;
  login_cpf?: string;
  login_cnpj?: string;
  login_senha?: string;
};

export type INfseListagemPayload = INfseGestaoAuth & {
  data_inicial?: string;
  data_final?: string;
  pagina?: string;
};

export type INfseDetalhePayload = INfseGestaoAuth & {
  chave: string;
};

export type ISicalcDarfPayload = {
  cnpj?: string;
  cpf?: string;
  birthdate?: string;
  observacoes?: string;
  codigo?: string;
  valor_principal: string;
  periodo_apuracao: string;
  data_consolidacao?: string;
  numero_referencia?: string;
  quota?: '0' | '1' | '2' | '3';
};

export type ISimeiDasnPayload = {
  cnpj: string;
  tipo_declaracao: 'original' | 'retificadora';
  ano_calendario: string;
  receita_bruta_comercio: string;
  receita_bruta_servicos: string;
  possui_empregado: '0' | '1';
};

export type IMeiEmissaoGuiaPayload = {
  cnpj: string;
  cpf: string;
  codigo_acesso: string;
  mes_ano?: string;
};
