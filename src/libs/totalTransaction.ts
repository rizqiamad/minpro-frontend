import axios from "@/helpers/axios";

export async function graphStats() {
  try {
    const { data } = await axios.get("/graph/totaltransaction", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    console.log(data);

    return data.result;
  } catch (err) {
    console.log(err);
  }
}
