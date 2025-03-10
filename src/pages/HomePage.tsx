import Form from '../components/Form'
import Lottie from '../components/LottieAnimation'
import RunningLine from '../components/RunningLine'
import Social from '../components/Social'
import CookiesBanner from '../components/CookiesBanner'

function HomePage() {
  return (
    <div className='relative pt-7 pb-4 min-w-full min-h-full flex flex-col items-center justify-between bg-gradient-to-b from-45% from-gradient-start to-gradient-end select-none'>
      <div className='flex flex-col xl:flex-row items-center w-full xl:px-14 xl:justify-between 2xl:px-32'>
        <div className='flex flex-col items-center xl:items-start'>
          <img src='logo.svg' alt='Skilldor' className='w-20' />
          <div className='relative'>
            <h1 className='select-none mt-6 font-lexend text-4xl w-full font-bold text-center text-primary-500 xl:text-left animate-displayFirst'>
              <span className='lg:whitespace-nowrap'>
                Master <br className='md:hidden' /> Your Game,
              </span>
              <br /> The Fun Way
            </h1>
            <h2 className='select-none absolute top-0 left-0 mt-6 font-lexend text-4xl w-full font-bold text-center text-primary-500 xl:text-left animate-displaySecond'>
              Skilldor: <br />
              <span className='md:whitespace-nowrap'>Discipline Gamified</span>
            </h2>
          </div>
          <span className='select-none mt-4 font-sourGummy text-lg text-primary-400 font-semibold'>
            Train. Improve. Reward Yourself
          </span>
          <Social />
        </div>
        <div className='relative w-28 h-28 mx-auto'>
          <Lottie />
        </div>
      </div>
      <Form />
      <RunningLine />
      <CookiesBanner />
    </div>
  )
}

export default HomePage
