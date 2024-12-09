import Card from "@/components/events/card";
import Filter from "@/components/events/filter";
import ResponsiveFilter from "@/components/events/responsiveFilter";

export default function EventsPage() {
  return (
    <main className="flex min-h-[45rem] flex-col md:flex-row">
      <div className="hidden md:block">
        <Filter />
      </div>
      <ResponsiveFilter />
      <div className="md:w-[78%] flex flex-col">
        <div className="px-4 pt-4 text-end hidden md:block">
          <label htmlFor="sorting" className="font-medium mr-3">Urutkan :</label>
          <select id="sorting" name="sorting" className="border text-black/60 border-slate-400 py-2 px-3 rounded-md outline-none cursor-pointer">
            <option value="volvo" className="hover:bg-slate-400">Waktu Mulai (Terdekat)</option>
            <option value="saab">Waktu Mulai (Terjauh)</option>
            <option value="mercedes">Nama Event (A-Z)</option>
            <option value="audi">Nama Event (Z-A)</option>
          </select>
        </div>
        <div className="w-full p-5 grid grid-cols-[repeat(auto-fit,minmax(13rem,1fr))] auto-rows-max gap-5">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </main>
  )
}