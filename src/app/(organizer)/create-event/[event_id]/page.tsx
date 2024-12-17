import CreateTicket from "@/components/createTicket/createTicket";

export default function TicketPage() {
  return (
    <main>
      <div className='rounded-2xl sm:mx-10 p-10 tablet:mx-52 shadow-2xl md:my-20'>
        <CreateTicket />
      </div>
    </main>
  )
}