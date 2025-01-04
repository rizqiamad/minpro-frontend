import axios from "@/helpers/axios";

export const getEventMetadata = async (event_id: string) => {
  try {
    const { data } = await axios.get(`/metadata/event/${event_id}`);
    return data.result;
  } catch (err) {
    console.log(err);
  }
};
