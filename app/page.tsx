import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import Image from "next/image";
import events from "@/lib/constants";

export default function Page() {
  return (
    <section>
      <h1 className="text-center">
        The Hub for every Dev <br /> Event You cant Miss
      </h1>
      <p className="text-center mt-5">Hackathons, Meetups, and Conferences, All in one place !</p>

      <ExploreBtn/>

      <div className="mt-20 space-y-7">
    <h3>Featured Events</h3>

    <ul className="events">
      {events.map((event)=>(
        <li key={event.title}>
<EventCard {...event}/>
        </li>
      ))}
    </ul>
      </div>
    </section>
  );
}
