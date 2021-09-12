import React from 'react';
import * as styles from "./Schedule.module.css"
const Schedule = ({  }) => {
  return (
    <body class="bg-white font-sans leading-normal tracking-normal">



	<div class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
	
		<div class="text-black flex flex-col w-full lg:w-1/2 justify-center items-start pt-12 pb-24 px-6">
			<h1 class="font-bold text-3xl my-4">SCHEDULE</h1>
      <ul class="flex space-x-1">
      <li class="-mb-px mr-1">
    <a class="bg-white inline-block  py-2 px-4 text-green-400 font-bold transition duration-150 border-b-8 border-transparent hover:border-green-500" href="#">Thursday, October 1</a>
  </li>
  <li class="mr-1">
    <a class="bg-white inline-block  py-2 px-4 text-green-400 font-bold transition duration-150 border-b-8 border-transparent hover:border-green-500" href="#">Friday, October 23</a>
  </li>
  <li class="mr-1">
    <a class="bg-white inline-block  py-2 px-4 text-green-400 font-bold transition duration-150 border-b-8 border-transparent hover:border-green-500" href="#">Saturday, October 24</a>
  </li>
</ul>
<div >
	
  
		<div class="h-48 flex flex-wrap content-center ...">
      <div>
			<p class="uppercase tracking-loose">5:00PM-6:30PM PDT</p>
      <p class="uppercase tracking-loose">8:00PM-9:30PM EST</p>
      </div>
      <div class = {styles.MoveLeft}>
			<p class="uppercase tracking-loose text-green-400">OPENING KEYNOTE SPEAKER</p>
      <h1 class="font-bold text ">JOSEPHINE SANTIAGO-BOND</h1>
      <p >Chief of NASA KSC Institutional Safety Division & Former Head of NASA Advanced Engineering</p>
      </div>
		</div>
    
    
	
	</div>
  <div class="h-48 flex flex-wrap content-center ...">
      <div>
			<p class="uppercase tracking-loose">5:00PM-6:30PM PDT</p>
      <p class="uppercase tracking-loose">8:00PM-9:30PM EST</p>
      </div>
      <div class = {styles.MoveLeft}>
			<p class="uppercase tracking-loose text-green-400">FILIPINX AMERICANS IN EXECUTIVE LEADERSHIP</p>
      <h1 class="font-bold text ">ANNE AARON</h1>
      <p >Chief of NASA KSC Institutional Safety Division & Former Head of NASA Advanced Engineering</p>
      </div>
		</div>


		</div>
	</div>
  
</body>
  );  
};

Schedule.displayName = 'Schedule';
export default Schedule;