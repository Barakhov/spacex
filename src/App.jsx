import { useState, useEffect } from 'react'; 
import * as API from './services/launches';

export function App() {
  const [launches, setLaunches] = useState([]);

  useEffect(()=> {
    API.getAllLaunches().then(setLaunches);
  }, []);

  return (
    <>
      <section>
        <ul>
          {launches.map(launch => (
            <li key={launch.flight_number+launch.launch_date_unix}>
              {launch.mission_name} ({launch.launch_year})
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
