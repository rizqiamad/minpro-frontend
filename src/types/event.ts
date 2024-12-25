interface IOrganizer {
  name: string;
  avatar: string;
}

interface ILocation {
  name_place: string;
  address: string;
  city: ICity;
}

interface ICity {
  city: string;
}

interface IPrice {
  price: number;
}

export interface IEvent {
  id: string;
  name: string;
  image: string;
  start_date: string;
  end_date: string;
  start_time: string;
  end_time: string;
  type: string;
  organizer: IOrganizer;
  location: ILocation;
  description: string;
  terms_condition: string;
  Ticket: IPrice[];
}
