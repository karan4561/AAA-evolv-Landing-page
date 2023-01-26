import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'


function App() {

  useEffect(() => {
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
  
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light';
    if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);
      if (currentTheme === 'dark') {
          toggleSwitch.checked = true;
      }
    }
    toggleSwitch.addEventListener('change', switchTheme, false);

   // return () => toggleSwitch.removeEventListener('change');
  }, [])

  

  function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); //add this
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light'); //add this
    }    
  }

  // toggleSwitch.addEventListener('change', switchTheme, false);

return (
<div className="bg-primary-color">
        <div className="w-screen flex flex-col items-center object-center origin-center min-h-screen bg-sunburn">
          <div className="flex items-center min-h-[90px] w-[90%] pl-12 pr-28 pt-7 justify-between">
            <img className="relative w-[140px] h-[32px]" src={require("./assets/sunburn.png")} alt="" />
            <div className="flex justify-center flex-row items-center gap-x-9">
              <span className="text-heading-color cursor-pointer hover:underline">Tickets</span>
              <span className="text-heading-color cursor-pointer hover:underline">Contact</span>
              <span className="text-heading-color cursor-pointer hover:underline">FAQ</span>
              <button className="bg-bg-color hover:underline px-8 py-2 rounded-md border-4 text-primary-color font-medium text-center">Sign In</button>
              
              <div className="theme-switch-wrapper">
                  <label className="theme-switch " for="checkbox">
                      <input type="checkbox" id="checkbox" />
                      <div className="slider round"></div>
                  </label>
                  <em className='text-light-color font-mono font-semibold pl-3'>Enable Light Mode!</em>
              </div>

            </div>
          </div>
          <h1 className="text-6xl text-secondary-color text-center pt-[213px] justify-center font-extrabold">HEADING TEXT</h1>
          <p className="font-semibold text-center pt-[115px] pb-[100px] text-font-color items-center justify-center w-[90%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cupiditate maxime voluptatem dolor cum
            quo aut alias impedit tenetur! Eveniet corporis ut ratione debitis animi dicta. Quae, rem facere fugit
            asperiores nemo, neque, non voluptatem laborum eos quo harum! Saepe, amet corporis!</p>
          <button className="bg-bg-color border-4 rounded-md hover:underline hover:opacity-95 hover:py-[24px] hover:border-white px-[40px] py-[22px] items-center justify-center text-primary-color font-semibold text-base text-center">View
            Events</button>
          <div className="pb-[175px]" />
        </div>

        <div className="flex flex-row origin-center object-center items-center space-x-[120px]">
          <div className="left flex-shrink items-center">
            <img className="w-screen object-cover pl-[156px] pb-[268px] pt-[250px]" src={require('./assets/guys.png')} alt="" />
          </div>
          <div className="pl-[120px] right flex-col justify-center pr-[156px] items-center">
            <h1 className="text-5xl font-bold text-secondary-color"> Top Event Name</h1>
            <p className="text-gray-700 font-mono pt-[20px] pl-2 text-sm w-[184px]">Sun, JAN 22, 2023</p>
            <p className="text-xl pt-[51px] pl-2 font-medium text-secondary-color">Collection Name</p>
            <p className="text-font-color text-xs text-left font-light w-[80%] pt-[14px] pl-2">Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Iure magnam doloribus quidem labore. Itaque, officiis optio corporis
              repellendus incidunt non modi nesciunt molestiae voluptatem, placeat est natus minus, harum animi.
            </p>
            <button className="bg-bg-color mt-[65px] border-4 rounded-md opacity-55 text-center py-[12px] ml-2 text-primary-color px-[20px] hover:underline">Book
              Tickets</button>
          </div>
        </div>

        <div className="w-screen justify-left pl-[156px] items-left bg-no-repeat bg-ankit-tiwari">
          <div>
            <h1 className="text-5xl pt-[100px] font-bold text-heading-color">Banner Heading</h1>
            <p className="text-left pt-[36px] text-sm text-light-color w-[40%] pb-[74px]">Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Deleniti nihil facilis voluptatem illo non hic eligendi ex similique laborum
              suscipit, blanditiis aut, officiis animi magni alias repudiandae modi eos earum assumenda eum sequi,
              sit saepe?</p>
            <button className="bg-bg-color text-primary-color border-4 rounded-md opacity-55 text-center hover:underline px-[20px] py-[12px]">Book Tickets</button>
            <div className="pb-[100px]" />
          </div>
        </div>

        <div className="bg-[#252525] w-screen flex flex-row justify-center object-center">
          <div className="justify-start object-left flex flex-col pl-[106px]">
            <img className="relative mt-10 w-[140px] h-[32px]" src={require("./assets/sunburn.png")} alt="" />
            <p className="text-xs w-1/3 text-left pt-[44px] pb-10 text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et veniam quo maiores, quasi enim ad ut vitae eaque distinctio temporibus! Aut impedit modi ducimus, officiis, dignissimos minus veritatis vel, id aspernatur exercitationem numquam laudantium a.
            </p>
          </div>
          <div className="mt-[170px] flex flex-row pr-[120px] space-x-12">
            <div className="text-gray-400 text-xs">About</div>
            <div className="text-gray-400 text-xs">Contact</div>
            <div className="text-gray-400 text-xs">Privacy</div>
            <div className="text-gray-400 text-xs">Terms</div>
          </div>
        </div>
      </div>
  );
}

export default App;
