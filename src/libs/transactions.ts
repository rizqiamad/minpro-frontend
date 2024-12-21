import axios from "@/helpers/axios";

export async function getTransactionDetail(transaction_id: string) {
  try {
    const { data } = await axios.get(`/transactions/${transaction_id}`);
    return data?.result;
  } catch (err) {
    console.log(err);
  }
}

export async function getSnapToken(final_price: number) {
  try {
    const { data } = await axios.post(
      "/transactions/payment",
      { order_id: "LKJADF-asdflkj", gross_amount: final_price }
    );
    return data.result;
  } catch (err) {
    console.log(err);
  }
}
