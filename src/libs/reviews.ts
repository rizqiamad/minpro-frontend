import axios from "@/helpers/axios";

export const getReviews = async (event_id: string) => {
  try {
    const { data } = await axios.get(`/reviews/${event_id}`);
    return data;
  } catch (err) {
    console.log(err);
  }
};
