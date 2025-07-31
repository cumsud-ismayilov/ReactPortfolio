import { Typewriter } from 'react-simple-typewriter';

function TypewriterComponent() {
  return (
    <div className="py-[50px] text-left">
      <span className='text-[40px] font-bold text-[#cd5ff8]'>
        <Typewriter
          words={['Front-End Developer', 'React Developer', 'Back-End Developer']}
          loop={0} // loop sonsuz üçün -1, 0 isə bir dəfə
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
    </div>
  );
}

export default TypewriterComponent;
