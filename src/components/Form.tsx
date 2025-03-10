import { useForm } from '@formspree/react'
import DownloadPanel from './DownloadPanel'

function Form() {
  const [state, handleSubmit] = useForm(
    `${import.meta.env.VITE_FORMSPREE_CODE}`
  )
  if (state.succeeded) {
    return (
      <p className='z-10 text-white text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl text-center font-koulen'>
        Thanks for your subscription! <br className='xl:hidden' />
        Stay tuned for updates.
      </p>
    )
  }

  return (
    <div className='max-w-96 w-full px-4 z-10 flex flex-col gap-3.5 md:flex-row md:items-center md:px-6 justify-between xl:px-14 xl:gap-0 2xl:px-32'>
      {/* <h3 className='select-none text-white font-lexend text-[3.4vh] font-semibold text-center md:text-[7.18vw] md:text-left md:leading-[1.1] xl:text-[5vw] 2xl:text-[4.8vw]'>
        Coming this Spring 2025
      </h3> */}
      <h3 className='select-none text-primary-400 md:text-white font-lexend text-2xl font-semibold text-center md:text-left'>
        Download now
      </h3>
      <DownloadPanel />
      <form
        onSubmit={handleSubmit}
        className='w-full bg-primary-400 p-6 rounded-2xl text-center md:mt-0 2xl:h-56'>
        <h4 className='select-none text-white font-sourGummy text-2xl leading-none xl:text-2xl'>
          Subscribe for updates
        </h4>
        <div className='flex gap-1.5 mt-3.5'>
          <input
            name='email'
            type='email'
            placeholder='Your email'
            className='select-none w-full placeholder:text-sm placeholder:font-lexend p-4 h-12 rounded-lg text-sm xl:mt-4 xl:h-12'
          />
          <button className='whitespace-nowrap px-3 select-none w-28 bg-primary-300 h-12 hover:bg-primary-200 active:bg-primary-100 rounded-lg font-lexend text-sm xl:h-12 xl:mt-4'>
            Join wishlist
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form
