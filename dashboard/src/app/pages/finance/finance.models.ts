export interface Expense {
  id: string;
  date: string;
  merchant: string;
  category: string;
  amount: number;
  currency: string;
  recurring: boolean;
}
