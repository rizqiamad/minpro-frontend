import axios from "@/helpers/axios";

export const getTickets = async (event_id: string) => {
  try {
    const { data } = await axios.get(`/tickets/${event_id}`);
    return data.result;
  } catch (err) {
    console.log(err);
  }
};

export const getTicketsUser = async (event_id: string) => {
  try {
    const { data } = await axios.get(`/users/tickets/${event_id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return data.result;
  } catch (err) {
    console.log(err);
  }
};

export const getAmountTicketsUser = async (ticket_id: string) => {
  try {
    const { data } = await axios.get(`/users/amount/tickets/${ticket_id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return data.result;
  } catch (err) {
    console.log(err);
  }
};
