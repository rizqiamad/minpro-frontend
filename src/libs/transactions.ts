import axios from "@/helpers/axios";

export async function getTransactionDetail(transaction_id: string) {
  try {
    const { data } = await axios.get(`/transactions/${transaction_id}`);
    return data?.result;
  } catch (err) {
    console.log(err);
  }
}

export async function getSnapToken(
  base_price: number,
  final_price: number,
  order_id: number
) {
  try {
    const { data } = await axios.post(
      "/transactions/payment",
      {
        order_id,
        base_price,
        gross_amount: final_price,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return data.result;
  } catch (err) {
    console.log(err);
  }
}

export async function getCoupon() {
  try {
    const { data } = await axios.get("/users/coupon", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return data.result;
  } catch (err) {
    console.log(err);
  }
}
