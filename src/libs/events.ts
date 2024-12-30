import axios from "@/helpers/axios";

export const getEvents = async (page: string = "1", sorts: string = "asc") => {
  try {
    const { data } = await axios.get(`/events/?page=${page}&sorts=${sorts}`);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getEventById = async (
  id: string,
  end_date: number = 0,
  type: number = 0
) => {
  try {
    const { data } = await axios.get(
      `/events/${id}?end_date=${end_date}&type=${type}`
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getEventsOrganizer = async (type: string) => {
  try {
    const { data } = await axios.get(`/events/organizer?type=${type}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return data.result;
  } catch (err: any) {
    console.log(err.response.data.message);
  }
};

export const getEventsUser = async (type: "active" | "unactive") => {
  try {
    const { data } = await axios.get(`/users/events?type=${type}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return data.result;
  } catch (err) {
    console.log(err);
  }
};
