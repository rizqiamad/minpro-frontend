interface ITicketTransaction {
  quantity: number;
  subtotal: number;
  ticket: {
    name: string;
    price: number;
    events: {
      name: string;
      image: string;
      start_date: string;
      end_date: string;
      start_time: string;
      end_time: string;
      location: {
        name_place: string;
        address: string;
        city: {
          city: string;
        };
      };
    };
  };
}

export interface ITransaction {
  expiresAt: string;
  coupon: boolean;
  point: number;
  base_price: number;
  final_price: number;
  Ticket_Transaction: ITicketTransaction[];
}
