interface ITransactions {
  id: string;
  user_id: string;
  status: string;
  value: number;
  cpf: string;
  description: string;
  transaction_date: string;
  points_value: string;
}

interface ITransactionContextType {
  transactions: ITransactions[];
  sumTransactionsApprove: number;
}

export type { ITransactionContextType, ITransactions };
