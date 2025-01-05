import axios from "@/helpers/axios";

export async function statistic() {
  try {
    const { data } = await axios.get("/graph/graphevent", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    console.log(data);

    return data.eventTotal;
  } catch (err) {
    console.log(err);
  }
}
