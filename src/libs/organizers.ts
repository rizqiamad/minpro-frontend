import axios from "@/helpers/axios";

export const getOrganizers = async () => {
  try {
    const { data } = await axios.get("/organizers/");
    return data.result;
  } catch (err) {
    console.log(err);
  }
};
