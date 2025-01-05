import sideContent from "@/components/sidebar/content/content.module.css";
<<<<<<< HEAD
import OrganizerEvents from "@/components/organizer/organizerEvents";

export default async function event() {
=======
import organizerGuard from "@/hoc/organizerProtect";

 function event() {
  //tipe tab
  type Tab = "active" | "draft" | "previous";

  //useState tab aktif
  const [activeTab, setActiveTab] = useState<Tab>("active");

  //fungsi klik pada tab
  const handleClick = (tab: Tab) => {
    setActiveTab(tab);
  };

>>>>>>> dashboard
  return (
    <section className={sideContent.eventSection}>
      <h1 className={sideContent.mainTitle}>Event Saya</h1>
      <div className={sideContent.eventContainer}>
        <OrganizerEvents />
      </div>
    </section>
  );
}

export default organizerGuard(event)