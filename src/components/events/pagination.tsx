export default function EventPagination() {
  return (
    <>
      {[1,2,3,4,5].map((item, idx) => {
        return (
          <button key={idx} className="border text-black/60 rounded-md px-4 py-2 hover:border-orange-400 hover:text-orange-400">{item}</button>
        )
      })}
    </>
  )
}