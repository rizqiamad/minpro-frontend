import axios from "@/helpers/axios";

export async function statistic() {
  try {
    const { data } = await axios.get("/graph/graphevent", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });

    return data.result;
  } catch (err) {
    console.log(err);
  }
}
