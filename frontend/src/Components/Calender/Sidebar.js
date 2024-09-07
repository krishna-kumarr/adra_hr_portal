import React from "react";
import CreateEventButton from "./CreateEventButton";
import SmallCalendar from "./SmallCalendar";
import Labels from "./Labels";

export default function Sidebar() {
  return (
    <aside className="border p-4 col-3">
      <CreateEventButton />
      <SmallCalendar />
      <Labels />
    </aside>
  );
}
