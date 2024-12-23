import axios from "@/helpers/axios";

export const getTickets = async (eventId: string) => {
  try {
    const { data } = await axios.get(`/tickets/${eventId}`);
    return data.result;
  } catch (err) {
    console.log(err);
  }
};
