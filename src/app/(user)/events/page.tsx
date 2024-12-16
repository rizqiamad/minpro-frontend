import Cards from "@/components/events/cards";
import Filter from "@/components/events/filter";
import EventPagination from "@/components/events/pagination";
import ResponsiveFilter from "@/components/events/responsiveFilter";

export default function EventsPage() {
  return (
    <main className="flex flex-col lg:flex-row">
      <div className="hidden lg:block border-slate-300 border-r">
        <Filter />
      </div>
      <ResponsiveFilter />
      <div className="w-full flex flex-col min-h-[40rem]">
        <div className="px-5 pt-4 text-end hidden lg:block">
          <label htmlFor="sorting" className="font-medium mr-3">Urutkan :</label>
          <select id="sorting" name="sorting" className="border text-black/60 border-slate-400 py-2 px-3 rounded-md outline-none cursor-pointer">
            <option value="volvo" className="hover:bg-slate-400">Waktu Mulai (Terdekat)</option>
            <option value="saab">Waktu Mulai (Terjauh)</option>
            <option value="mercedes">Nama Event (A-Z)</option>
            <option value="audi">Nama Event (Z-A)</option>
          </select>
        </div>
        <div className="w-full p-5 grid grid-cols-[repeat(auto-fit,minmax(13rem,1fr))] auto-rows-max gap-5">
          <Cards />
        </div>
        <div className="mt-auto flex gap-4 px-5 mb-4 justify-self-end">
          <EventPagination />
        </div>
      </div>
    </main>
  )
}