import { useState } from "react";
import ListGroup from "../components/ListGroup";
import Navbar from "../components/Navbar";

function EventPage() {
  const [businessEvents, updateBusinessEvents] = useState([
    "Meeting @ 9am",
    "Lunch with HR @ 1pm",
    "Meeting @ 4pm",
  ]);
  const [otherEvents, updateOtherEvents] = useState([
    "Interview with Y Company @ 6pm",
    "Company Christmas Party @ 7pm",
  ]);

  // wait for document to load first
  document.addEventListener("DOMContentLoaded", function (event) {
    const eventButton = document.getElementById(
      "eventBtn"
    ) as HTMLButtonElement;
    eventButton.onclick = function () {
      const val = (document.getElementById("eventInput") as HTMLInputElement)
        .value;
      if (val.length > 0) {
        updateBusinessEvents([...businessEvents, val]);
        (document.getElementById("eventInput") as HTMLInputElement).value = "";
      }
    };

    const otherButton = document.getElementById(
      "otherBtn"
    ) as HTMLButtonElement;
    otherButton.onclick = function () {
      const val = (document.getElementById("otherInput") as HTMLInputElement)
        .value;
      if (val.length > 0) {
        updateOtherEvents([...otherEvents, val]);
        (document.getElementById("otherInput") as HTMLInputElement).value = "";
      }
    };
  });

  return (
    <div>
      <Navbar />
      <br />
      <ListGroup items={businessEvents} heading={"Business Events"} />
      <br />
      <div className="mb-3">
        <label className="ms-5">
          Add a Business Event:
          <input id="eventInput" className="ms-3" />
          <button id="eventBtn" className="ms-3 btn btn-outline-primary">
            Add Event
          </button>
        </label>
      </div>
      <ListGroup items={otherEvents} heading={"Other Events"} />
      <br />
      <div className="mb-3">
        <label className="ms-5">
          Add an Other Event:
          <input id="otherInput" className="ms-3" />
          <button id="otherBtn" className="ms-3 btn btn-outline-primary">
            Add Event
          </button>
        </label>
      </div>
    </div>
  );
}

export default EventPage;
