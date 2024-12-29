import sideContent from "@/components/sidebar/content/content.module.css";
import OrganizerEvents from "@/components/organizer/organizerEvents";
import Link from "next/link";

export default async function event() {
  return (
    <section className={sideContent.eventSection}>
      <h1 className={sideContent.mainTitle}>Event Saya</h1>
      <div className={sideContent.eventContainer}>
        <OrganizerEvents />
      </div>
    </section>
  );
}
