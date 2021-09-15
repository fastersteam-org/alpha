import React from 'react';
import * as styles from "./Schedule.module.css"
const Schedule = ({  }) => {
  return (
    <body class="bg-white font-sans leading-normal tracking-normal">


  
	<div class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
	
		<div class="text-black flex flex-col w-full lg:w-1/ justify-center items-start pt-12 pb-24 px-6">
    <div>
      <h1 class="font-bold text-3xl my-4">SCHEDULE</h1>
      <ul class="flex space-x-1">
      <li class="-mb-px mr-1">
    
    <a class="bg-white inline-block  py-2 px-4 text-green-400 font-bold transition duration-150 border-b-8 border-transparent hover:border-green-500" href="#/FASTERCON21">Friday, October 8</a>
  </li>
  <li class="mr-1">
    <a class="bg-white inline-block  py-2 px-4 text-green-400 font-bold transition duration-150 border-b-8 border-transparent hover:border-green-500" href="#/FASTERCON21">Saturday, October 9</a>
  </li>
  <li class="mr-1">
    <a class="bg-white inline-block  py-2 px-4 text-green-400 font-bold transition duration-150 border-b-8 border-transparent hover:border-green-500" href="#/FASTERCON21">Sunday, October 10</a>
  </li>
</ul>
<hr class="solid"></hr>
</div>


<div >
		<div class="h-48 w-98flex flex-row mt-10 ">
      <div>
			<p class="uppercase tracking-loose">5:00PM-7:00PM PST</p>
      <p class="uppercase tracking-loose">8:00PM-10:00PM EST</p>
      </div>
      <div class = {styles.MoveLeft}>
			<p class="uppercase tracking-loose text-green-400">Panel featuring Asian Leader Alliance and LEAD Filipino</p>
      <h1 class="font-bold text ">Fighting Anti-Asian Violence </h1>
      <p >Featuring leaders from ALA, including Jimmy Hua, Founder, ALA, Salesforce, Brian Peng (Electronic Arts) Jea Paz (AlphaInsights), and LEAD Filipino Executive Director, Angelica Cortez </p>
      </div>
      
		</div>
       <hr class="solid"></hr>
	</div>

<div>
  <div class="h-48 flex flex-wrap content-center ...">
      <div>
			<p class="uppercase tracking-loose">5:00PM-6:30PM PST</p>
      <p class="uppercase tracking-loose">8:00PM-9:30PM EST</p>
      </div>
      <div class = {styles.MoveLeft}>
			<p class="uppercase tracking-loose text-green-400">FILIPINX AMERICANS IN DESIGN, DATA SCIENCE & ENGINEERING</p>
      <h1 class="font-bold text ">FILPINX AMERICANS: OUR BODIES AND VOICES IN TECH</h1>
      <p >We feature 3 panels on Filipinx Americans in creative (working at the intersection of media, entertainment and technology), data science and design, data science and engineering. </p>
    
      </div>
		</div>
    <hr class="solid"></hr>
    </div>


    
    <div class="h-48 flex flex-wrap content-center ...">
      <div>
			<p class="uppercase tracking-loose">11:00AM-12:30PM PST</p>
      <p class="uppercase tracking-loose">1:00PM-3:30PM EST</p>
      </div>
      <div class = {styles.MoveLeft}>
			<p class="uppercase tracking-loose text-green-400">FILIPINX AMERICANS IN LIFE SCIENCES</p>
      <p >We will have a panel with Filipinx Americans fighting COVID19 followed by a firesidechat featuring Professor Manilay (UC Merced). </p>
      </div>
    
		</div>

		</div>
	</div>
  
</body>
  );  
};

Schedule.displayName = 'Schedule';
export default Schedule;