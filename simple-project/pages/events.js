import { useState } from 'react';
import { useRouter } from 'next/router';

export default function EventList({ eventsList }) {
  const [events, setEvents] = useState(eventsList);
  const router = useRouter();
  const fetchSportsEvents = async () => {
    const response = await fetch(
      'http://localhost:4000/events?category=sports'
    );
    const data = await response.json();
    setEvents(data);
    router.push('/events?category=sports', undefined, { shallowCopy: true });
  };

  return (
    <>
      <button onClick={fetchSportsEvents}>Sports Events</button>
      <h1>List of events</h1>
      {events.map(({ id, title, date, category, description }) => {
        return (
          <div key={id}>
            <h2>
              {id} | {title} | {date} | {category}
            </h2>
            <p>{description}</p>
          </div>
        );
      })}
    </>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;
  const queryString = category ? 'category=sports' : '';
  const response = await fetch(`http://localhost:4000/events/${queryString}`);
  const data = await response.json();

  return {
    props: {
      eventsList: data,
    },
  };
}
