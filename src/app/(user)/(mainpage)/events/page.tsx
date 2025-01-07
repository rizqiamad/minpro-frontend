import Cards from "@/components/events/cards";
import Filter from "@/components/events/filter";
import EventPagination from "@/components/events/pagination";
import ResponsiveFilter from "@/components/events/responsiveFilter";
import Sorting from "@/components/events/sorting";
import { getEvents } from "@/libs/events";
import { IEvent } from "@/types/event";

export default async function EventsPage({ searchParams }: { searchParams: Record<string, string> }) {
  const params = new URLSearchParams(searchParams as Record<string, string>);
  const { result, total_page }: { result: IEvent[], total_page: number } = await getEvents(params);

  return (
    <main className="flex flex-col lg:flex-row">
      <div className="hidden lg:block border-slate-300 border-r">
        <Filter />
      </div>
      <ResponsiveFilter />
      <div className="w-full flex flex-col min-h-[40rem]">
        <div className="px-8 pt-4 text-end hidden lg:block">
          <Sorting />
        </div>
        <Cards result={result} />
        <div className="mt-auto flex gap-4 px-5 mb-4 justify-self-end">
          <EventPagination total_page={total_page} />
        </div>
      </div>
    </main>
  )
}