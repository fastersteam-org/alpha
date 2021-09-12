import React from 'react';
import * as styles from "./FasterconPrograms.module.css"
import RonnieCarmen from "./RonnieCarmen"
import GioNakpil from "./GioNakpil.js"

const FasterconPrograms = ({  }) => {
  return (
    <body class="bg-white font-sans leading-normal tracking-normal">



	<div class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
	
		<div class="text-black flex flex-col w-full lg:w-1/2 justify-center items-start pt-12 pb-24 px-6">
			<h1 class="font-bold text-3xl my-4">FASTERCON PROGRAMS</h1>
      <ul class="flex space-x-1">
      <li class="-mb-px mr-1">
    <a class="bg-white inline-block  py-2 px-4 text-green-400 font-bold transition duration-150 border-b-8 border-transparent hover:border-green-500" href="#">Fight Anti-Asian Violence</a>
  </li>
  <li class="mr-1">
    <a class="bg-white inline-block  py-2 px-4 text-green-400 font-bold transition duration-150 border-b-8 border-transparent hover:border-green-500" href="#">Arts and Design Panels</a>
  </li>
  <li class="mr-1">
    <a class="bg-white inline-block  py-2 px-4 text-green-400 font-bold transition duration-150 border-b-8 border-transparent hover:border-green-500" href="#">Data Science and Engineering</a>
  </li>
  <li class="mr-1">
    <a class="bg-white inline-block  py-2 px-4 text-green-400 font-bold transition duration-150 border-b-8 border-transparent hover:border-green-500" href="#">Life Science Day</a>
  </li>
</ul>


<div className = {styles.Speaker1}>
  <RonnieCarmen/>

  <div className = {styles.RightText}>
  <div className = {styles.Date}>
  SAT, OCTOBER 10, 2021 | 10:00AM-10:45AM PDT
  </div>
  <div className = {styles.Name}>
  RONNIE DEL CARMEN | ARTS DAY SPEAKER
  </div>
  <div>
  Ronnie Del Carmen, Netflix
  </div>
  <button>
    REGISTER
  </button>
  </div>

</div>

<div className = {styles.Speaker2}>
<GioNakpil/>

  <div className = {styles.RightText}>
  <div className = {styles.Date}>
  SAT, OCTOBER 10, 2021 | 10:00AM-10:45AM PDT
  </div>
  <div className = {styles.Name}>
  GIO NAKPIL | ARTS DAY SPEAKER
  </div>
  <div>
  Ronnie Del Carmen, Netflix
  </div>
  <button>
    REGISTER
  </button>
  </div>
</div>





		</div>
	</div>
  
</body>
  );  
};

FasterconPrograms.displayName = 'FasterconPrograms';
export default FasterconPrograms;