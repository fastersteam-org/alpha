import React from 'react';
import { Link } from "gatsby";



const EventsHeader= () => {
  return (
    <div class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
	
		<div class="text-black flex flex-col w-full lg:w-1/2 justify-center items-start pt-12 pb-24 px-6">
			<p class="uppercase tracking-loose">FASTER PRESENTS</p>
			<h1 class="font-bold text-3xl my-4">FASTERCON21</h1>
			<p class="leading-normal mb-4">FRIDAY, OCTOBER 8- SUNDAY OCTOBER 10,</p>
      <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <Link
                to="/events"
                className="no-underline hover:underline text-green-400 hover:text-green-500"
              >
               Learn More 
              </Link>  
            </li>
		</div>
	
	</div>
  );
};

EventsHeader.displayName = 'EventsHeader';
export default EventsHeader;