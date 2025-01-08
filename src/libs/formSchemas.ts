import * as Yup from "yup";

export const avatarSchema = Yup.object().shape({
  image: Yup.mixed()
    .test(
      "filesize",
      "the image is too large",
      (value) =>
        !value || (value instanceof File && value.size <= 2 * 1024 * 1024)
    )
    .test(
      "fileExtension",
      "The extension is not proper",
      (value) =>
        !value ||
        (value instanceof File &&
          ["image/jpeg", "image/png", "image/jpg", "image/webp"].includes(
            value.type
          ))
    )
    .required("Image is required"),
});

export const eventSchema = Yup.object().shape({
  name: Yup.string().required("Event name is required"),
  image: Yup.mixed()
    .test(
      "filesize",
      "the image is too large",
      (value) =>
        !value || (value instanceof File && value.size <= 2 * 1024 * 1024)
    )
    .test(
      "fileExtension",
      "The extension is not proper",
      (value) =>
        !value ||
        (value instanceof File &&
          ["image/jpeg", "image/png", "image/jpg", "image/webp"].includes(
            value.type
          ))
    )
    .required("Image is required"),
  start_date: Yup.date().required("Start Date is required"),
  end_date: Yup.date().required("End date is required"),
  start_time: Yup.string().required("Start Time is required"),
  end_time: Yup.string().required("End time is required"),
  name_place: Yup.string().required("Name of place is required"),
  address: Yup.string().required("Address is required"),
  city: Yup.string().required("Name of city is required"),
  category: Yup.string()
    .oneOf([
      "Festival",
      "Konser",
      "Pertandingan",
      "Workshop",
      "Konferensi",
      "Seminar",
      "Pertunjukkan",
      "Lainnya",
    ])
    .required("Category is required"),
  type: Yup.string()
    .oneOf(["paid", "free"])
    .required("Choose type of your event"),
  description: Yup.string(),
  terms_condition: Yup.string(),
  coupon_seat: Yup.number().when("type", {
    is: "paid",
    then: (schema) => schema.nullable(),
    otherwise: (schema) =>
      schema.test(
        "no-value",
        "There is no coupon promo for free event",
        (value) => value === 0
      ),
  }),
});

export const ticketEventSchema = (type: "paid" | "free") =>
  Yup.object().shape({
    name: Yup.string().required("Ticket name is required"),
    seats: Yup.number()
      .min(1, "Ticket must be greater or equal to 1")
      .required("There is must be a seats"),
    price: Yup.number().when([], {
      is: () => type === "paid",
      then: (schema) =>
        schema
          .required("Price is required")
          .min(20000, "Minimum price is Rp20.000"),
      otherwise: (schema) =>
        schema.test(
          "no-value",
          "The ticket is free, the ticket price must be 0",
          (value) => !value
        ),
    }),
    description: Yup.string(),
    start_date: Yup.date().required("Set the ticket sales period"),
    end_date: Yup.date().required("Set the ticket sales period"),
  });

export const reviewSchema = Yup.object().shape({
  rating: Yup.number()
    .oneOf([1, 2, 3, 4, 5], "You have to set rating for this event")
    .required("You have to set the rate first"),
  comment: Yup.string().required("Give your honest review about this event"),
});
