interface IProps {
  params: {
    event_name: string
  }
  searchParams: {
    name: string
  }
}

export default function EventDetail({ params, searchParams }: IProps) {
  const par = new URLSearchParams(searchParams);
  par.set('email', 'hanif@gmail.com')
  console.log(par.toString());
  // console.log(searchParams);
  return (
    <div>
      <h1>This is params:{params.event_name}, this query: {searchParams.name} detail page</h1>
    </div>
  )
}