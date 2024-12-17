import axios from "@/helpers/axios";

export const getEvents = async (page: string = '1', sorts: string = 'asc') => {
  try {
    const { data } = await axios.get(`/events/?page=${page}&sorts=${sorts}`);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getEventById = async (id: string) => {
  try {
    const { data } = await axios.get(`/events/${id}`);
    return data;
  } catch (err) {
    console.log(err);
  }
};
