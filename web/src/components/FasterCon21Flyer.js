import React from 'react';
import FASTERWHITESVG from './FASTERWHITESVG'

const FasterCon21Flyer = ({ url }) => {
  return (
    
    <div style={{backgroundColor:'rgb(9, 18, 38)',maxwidth:"500px"}}>
    <body class="text-center">
    <span style={{color:'rgb(81, 177, 158)',fontSize: "50px", fontWeight:"bolder"}}>FASTERCON</span>
    <span style={{color:'rgb(255, 255, 255)',fontSize: "50px", fontWeight:"bolder"}}>21</span>
  </body>
  
  <p class="uppercase tracking-loose text-center text-sm">filipinx americans in steam annual conferences </p>
  
 <div class = "flex justify-center pt-8 pb-3">
   
  <button class="bg-FasterGreen hover:bg-blue-700 text-white font-bold py-2 px-4  border-blue-700 p-2 ">
   FRI, OCT 8
 </button>
 </div>

 <body class="text-center">
    <p class = "font-semibold text-white">FASTER FIGHTERS: Call for Justice to</p>
    <p class = "font-semibold">Build Asian American Solidarity against Hate</p>
    <p class = "font-semibold">and</p>
    <p class = "font-semibold">Remember Angelo Quinto</p>
    <p class="uppercase tracking-loose text-sm font-thin">5:00PM-7:00PM PST / 8:00PM-10:00PM EST</p>
  </body>
 
       <div class = "flex justify-center p-2 pb-3">
       <button class="bg-FasterGreen hover:bg-blue-700 text-white font-bold py-2 px-4  border-blue-700 p-2 ">
  SAT, OCT 9
 </button>
 </div>

 <body class="text-center">
 <p class = "font-semibold">Filipinx Americans in Creative, Design, Arts</p>
      <p class = "font-semibold">Data Science and Artificial Intelligence</p>
       <p class="uppercase tracking-loose text-sm font-thin">9:30AM-3:00PM PST / 12:30PM:6:00PM EST</p>
  </body>

 <div class = "flex justify-center p-2 pb-3">
 <button class="bg-FasterGreen hover:bg-blue-700 text-white font-bold py-2 px-4  border-blue-700 p-2 ">
  SUN, OCT 10
 </button>
 </div>

 <body class="text-center">
 <p class = "font-semibold">Filipinx Americans in Life Sciences</p>
       <p class = "font-semibold">Fireside Chat</p>
       <p class = "font-semibold">COVID19 Panel</p>
      <p class="uppercase tracking-loose text-sm font-thin">10:00AM-12:30PM PST / 1:00PM-3:30PM EST</p>
  </body>
  
  <div style={{display:'flex',justifyContent: "right", fontWeight:"bolder"}}>
  <FASTERWHITESVG/>
 </div>
    </div>
    
//<div><h2 style={{"background-color" : rgb(9, 18, 38)}}>rgb(9, 18, 38)</h2></div>

 //Command+k+c+shift
//     <body class="bg-white font-sans leading-normal tracking-normal">
// 	<div class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
	
// 		<div class="text-black flex flex-col w-full lg:w-1/ justify-center items-start pt-12 pb-24 px-6">
//     <div>
//       <h1 class="font-bold text-3xl my-4">FASTERCON21</h1>
//       <ul class="flex space-x-1 uppercase tracking-loose">filipinx americans in steam annual conferences
//       <li class="-mb-px mr-1">
//   </li>
// </ul>
// <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
//   FRI, OCT 8
// </button>
// <div >
// 		<div class="h-48 w-98flex flex-row mt-10 ">
//       <div>
// 			<p>FASTER FIGHTERS: Call for Justice to</p>
//       <p>Build Asian American Solidarity against Hate</p>
//       <p>and</p>
//       <p>Remember Angelo Quinto</p>
//       <p class="uppercase tracking-loose">5:00PM-7:00PM PST /8:00PM-10:00PM EST</p>
//       </div>
//       <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
//   SAT, OCT 9
// </button>
// <div>
// 			<p>Filipinx Americans in Creative, Design, Arts</p>
//       <p>Data Science and Artificial Intelligence</p>
//       <p class="uppercase tracking-loose">9:30AM-3:00PM PST/12:30PM:6:00PM EST</p>
//       </div>
//       <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
//   SUN, OCT 10
// </button>
// <div>
// 			<p>Filipinx Americans in Life Sciences</p>
//       <p>Fireside Chat</p>
//       <p>COVID19 Panel</p>
//       <p class="uppercase tracking-loose">10:00AM-12:30PM PST/1:00PM-3:30PM EST</p>
//       </div>

// </div>




      
// 		</div>
//        <hr class="solid"></hr>
// 	</div>




    
   

// 		</div>
// 	</div>
  
// </body>
  );  
};

FasterCon21Flyer.displayName = 'FasterCon21Flyer';
export default FasterCon21Flyer;