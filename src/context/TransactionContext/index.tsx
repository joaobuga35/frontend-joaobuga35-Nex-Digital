/* eslint-disable no-empty */
import { createContext, useContext, useEffect, useState } from "react";
import { ITransactionContextType, ITransactions } from "./interface";
import { iContext } from "../UserContext/interface";
import { UserContext } from "../UserContext";
import api from "../../services/api";

const TransactionContext = createContext<ITransactionContextType>(
  {} as ITransactionContextType
);

const TransactionProvider = ({ children }: iContext) => {
  const { token, decoded } = useContext(UserContext);
  const [transactions, setTransactions] = useState<ITransactions[]>([]);

  const filterTransactions = transactions.filter(
    (elem) => elem.status === "Aprovado"
  );

  const sumTransactionsApprove = filterTransactions.reduce(
    (acc, current) => acc + current.value,
    0
  );

  const getTransactions = async () => {
    try {
      const response = await api.get<ITransactions[]>(`users/${decoded.sub}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTransactions(response.data);
    } catch (error) {}
  };
  useEffect(() => {
    getTransactions();
  }, [token]);

  return (
    <TransactionContext.Provider
      value={{ transactions, sumTransactionsApprove }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export { TransactionContext, TransactionProvider };
