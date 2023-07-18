export type Transfer = {
  id: number;
  dataTransferencia: string;
  tipo: string;
  valor: number;
  nomeOperadorTransacao: string;
  conta: {
    id: number;
    nomeResponsavel: string;
  };
}

