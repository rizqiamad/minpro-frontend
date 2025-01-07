'use client'

import sideContent from "@/components/sidebar/content/content.module.css";
import organizerGuard from "@/hoc/organizerProtect";
import OrganizerEvents from "@/components/organizer/organizerEvents";

function EventsPage() {
  return (
    <section className={sideContent.eventSection}>
      <div className={sideContent.eventContainer}>
        <OrganizerEvents />
      </div>
    </section>
  );
}

export default organizerGuard(EventsPage)