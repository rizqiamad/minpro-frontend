import axios from "@/helpers/axios";

export const getEvents = async (page: string = "1", sorts: string = "asc") => {
  try {
    const { data } = await axios.get(`/events/?page=${page}&sorts=${sorts}`);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getEventDetail = async (
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

export const getEventId = async (event_id: string) => {
  try {
    const { data } = await axios.get(`/events/review/${event_id}`);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getEventsOrganizer = async (type: string) => {
  try {
    const { data } = await axios.get(`/organizers/events?type=${type}`, {
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

export const getEventsDisplay = async () => {
  try {
    const { data } = await axios.get("/events/display");
    return data.result;
  } catch (err) {
    console.log(err);
  }
};
