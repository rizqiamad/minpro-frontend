interface EventTypeProps {
  setFieldValue: (a: string, b: string) => void
}

export default function EventType({ setFieldValue }: EventTypeProps) {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue('type', e.target.value)
  }

  return (
    <>
      <h3 className="mb-5 ml-2 text-lg font-medium text-slate-400">What is your event type ?</h3>
      <ul className="grid w-full gap-6 xl:grid-cols-2">
        <li>
          <input type="radio" id="free" name="type" value="free" className="hidden peer" onChange={handleChange} />
          <label htmlFor="free" className="inline-flex items-center justify-between w-full p-5 cursor-pointer border hover:border-blue-500 hover:text-blue-500 rounded-xl peer-checked:text-blue-500 peer-checked:border-blue-500">
            <div className="block">
              <div className="w-full text-lg font-semibold">FREE</div>
              <div className="w-full">Customer is not charged, whole event is free</div>
            </div>
            <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </label>
        </li>
        <li>
          <input type="radio" id="paid" name="type" value="paid" className="hidden peer" onChange={handleChange} />
          <label htmlFor="paid" className="inline-flex items-center justify-between w-full p-5 cursor-pointer border hover:border-blue-500 hover:text-blue-500 rounded-xl peer-checked:text-blue-500 peer-checked:border-blue-500">
            <div className="block">
              <div className="w-full text-lg font-semibold">PAID</div>
              <div className="w-full">You charge costumer depends on ticket</div>
            </div>
            <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </label>
        </li>
      </ul>
    </>
  )
}