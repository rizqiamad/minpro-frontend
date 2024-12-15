interface IOrganizer {
  name: string;
  avatar: string;
}

export interface IEvent {
  id: string;
  name: string;
  image: string;
  start_date: string;
  end_date: string;
  organizer: IOrganizer;
}
