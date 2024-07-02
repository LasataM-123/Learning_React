import React, { useState } from "react";
// import Calendar from "react-calendar";
// import "./Calendar.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
// const Cal = () => {
//   const [value, setValue] = useState(new Date(2020, 7, 10));

//   return (
//     <div>
//       <Calendar onChange={setValue} value={value}></Calendar>
//     </div>
//   );
// };
const Cal = () => {
  //return <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />;
  const headerToolbar = {
    left: "prev,next today",
    center: "title",
    right: "dayGridMonth,dayGridWeek,dayGridDay",
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      weekends={false}
      headerToolbar={headerToolbar}
      events={[
        { title: "event 1", date: "2024-07-01" },
        { title: "event 2", date: "2024-07-02" },
      ]}
    />
  );
};
export default Cal;
