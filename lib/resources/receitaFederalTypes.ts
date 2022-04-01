export type CNPJOpts = {
  cnpj: string;
  origem?: 'mobile' | 'web';
};

type PGFN = {
  preferencia_emissao?: 'nova' | '2via';
}

type PGFNByCPF = PGFN & {
  cpf: string;
};

type PGFNByCNPJ = PGFN & {
  cnpj: string;
};

export type PGFNPayload = PGFNByCPF | PGFNByCNPJ;