import FilterAccordion from "./filterAccordion";

export default function Filter(){
  return (
    <div className="w-72 border-r py-6 border-slate-400">
      <h1 className="text-xl font-semibold mb-4 px-6">Filter</h1>
      <FilterAccordion filterName="Location"/>
      <FilterAccordion filterName="Category"/>
      <FilterAccordion filterName="Time"/>
    </div>
  )
}