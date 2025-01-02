import axios from "@/helpers/axios";

export const getReviews = async (event_id: string) => {
  try {
    const { data } = await axios.get(`/reviews/${event_id}`);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getAvgRating = async (organizer_id: number) => {
  try {
    const { data } = await axios.get(`/reviews/avg/${organizer_id}`);
    return data.result;
  } catch (err) {
    console.log(err);
  }
};
