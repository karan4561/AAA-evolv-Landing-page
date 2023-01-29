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
    <div className='bg-primary-color'>
      <div className=' bg-sunburn bg-center bg-cover items-center min-h-fit'>
        <div className='flex pt-7 pl-5 pr-5 md:pl-18 md:pr-18 justify-between'>
          <div className="flex justify-center md:hidden">
            <div className="inline-block cursor-pointer p-4">
              <div className="lines h-0.5 w-6 my-1 bg-light-color"></div>
              <div className="lines h-0.5 w-6 my-1 bg-light-color"></div>
              <div className="lines h-0.5 w-6 my-1 bg-light-color"></div>
            </div>
          </div>

          <img className="relative mt-3 w-[90px] h-[22px] md:w-[140px] md:h-[32px]" src={require("./assets/sunburn.png")}></img>
          <div className='hidden md:block mt-4 flex-row justify-center md:space-x-8 lg:space-x-36'>
            <span className="text-heading-color font-semibold text-xl cursor-pointer hover:underline">Tickets</span>
            <span className="text-heading-color font-semibold text-xl cursor-pointer hover:underline">Contact</span>
            <span className="text-heading-color font-semibold text-xl cursor-pointer hover:underline">FAQ</span>
          </div>

          <div className='hidden md:flex mt-2 flex-row space-x-8 justify-end'>
            <button className='bg-bg-color h-[43px] hover:underline px-8 py-2 rounded-md border-2 text-primary-color font-medium text-center'>Sign In</button>

            <div className="theme-switch-wrapper">
              <label className="theme-switch mt-1" htmlFor="checkbox">
                <input type="checkbox" id="checkbox" />
                <div className="slider round"></div>
              </label>
              <em className='text-light-color font-mono font-semibold pt-2 pl-1'>Enable Light Mode!</em>
            </div>
          </div>

          <button className="bg-bg-color md:hidden mt-2 mr-3 h-8 hover:underline px-8 py-1 rounded-md border-2 text-primary-color font-medium text-center">Sign In</button>
        </div>
        <h1 className="text-4xl text-secondary-color text-center items-center pt-48 md:text-7xl md:pt-[213px] justify-center font-extrabold">HEADING TEXT</h1>
        <p className="font-semibold md:font-bold text-lg pl-20 m text-center pt-[90px] pb-[75px] md:pt-[115px] md:pb-[100px] text-font-color items-center justify-center w-[90%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cupiditate maxime voluptatem dolor cum
          quo aut alias impedit tenetur! Eveniet corporis ut ratione debitis animi dicta. Quae, rem facere fugit
          asperiores nemo, neque, non voluptatem laborum eos quo harum! Saepe, amet corporis!</p>

        <button style={{ display: "block" }} className="bg-bg-color margin-left:auto display:block margin-right:auto items-end justify-center border-4 rounded-md hover:underline hover:opacity-95 md:hover:py-[24px] px-[32px] py-[16px] hover:border-white md:px-[40px] md:py-[22px] text-primary-color font-semibold text-base text-center">View
          Events</button>

        <div className='pb-[110px] md:pb-[175px]'></div>
      </div>

      <div>
        <div className='md:hidden flex flex-col items-center justify-center'>
          <img className='justify-center w-[350px] h-[350px] mt-28' src={require("./assets/guys.png")}></img>
          <div className='justify-center -ml-20 flex-col items-center'>
            <h1 className='text-4xl font-bold text-secondary-color pt-16'>Top Event Name</h1>
            <p className="text-gray-500 font-mono pt-[12px] pl-1 text-sm w-[184px]">Sun, JAN 22, 2023</p>
            <p className="text-xl pt-[51px] pl-2 font-medium text-secondary-color">Collection Name</p>
          </div>
          <p className="text-font-color text-xs text-left -ml-4 font-light w-[50%] pt-[14px] pl-2">Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Iure magnam doloribus quidem labore. Itaque, officiis optio corporis
            repellendus incidunt non modi nesciunt molestiae voluptatem, placeat est natus minus, harum animi.
          </p>
          <button className="bg-bg-color mt-16 md:hidden mr-3 h-8 hover:underline px-8 py-1 rounded-md border-2 text-primary-color font-medium text-center">Sign In</button>
          <div className='pb-[110px]'></div>
        </div>

        <div className='hidden md:flex mt-[156px] pb-[156px] space-x-16 flex-row'>
          <img className='relative  ml-[56px] w-[40%]' src={require("./assets/guys.png")}></img>
          <div className='flex flex-col mr-10 justify-center'>
            <h1 className='text-5xl font-bold text-secondary-color'>Top Event Name</h1>
            <p className="text-gray-700 font-mono pt-[20px] pl-2 text-sm w-[184px]">Sun, JAN 22, 2023</p>
            <p className="text-xl pt-[51px] pl-2 font-medium text-secondary-color">Collection Name</p>
            <p className="text-font-color text-xs text-left font-light w-[80%] pt-[14px] ml-2">Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Iure magnam doloribus quidem labore. Itaque, officiis optio corporis
              repellendus incidunt non modi nesciunt molestiae voluptatem, placeat est natus minus, harum animi.
            </p>
            <button className="bg-bg-color mt-[65px] border-4 rounded-md opacity-55 text-center w-[200px] py-[12px] ml-2 text-primary-color px-[20px] hover:underline">Book
              Tickets</button>
          </div>
        </div>
      </div>

      <div className='hidden md:block bg-ankit-tiwari md:bg-center md:bg-cover min-h-fit'>
        <div className='ml-[80px]'>
          <h1 className="text-5xl pt-[100px] font-bold text-heading-color">Banner Heading</h1>
          <p className="text-left pt-[36px] text-sm text-light-color w-[40%] pb-[74px]">Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Deleniti nihil facilis voluptatem illo non hic eligendi ex similique laborum
            suscipit, blanditiis aut, officiis animi magni alias repudiandae modi eos earum assumenda eum sequi,
            sit saepe?</p>
          <button className="bg-bg-color text-primary-color border-4 rounded-md opacity-55 text-center hover:underline px-[20px] py-[12px]">Book Tickets</button>
          <div className="pb-[100px]" />
        </div>
      </div>

      <div className="bg-[#252525] pb-12 w-screen flex flex-row justify-between object-center">
              <div className="justify-start object-left flex flex-col pl-[106px]">
                <img className="relative mt-10 md:w-[140px] md:h-[32px]" src={require("./assets/sunburn.png")} alt="" />
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

