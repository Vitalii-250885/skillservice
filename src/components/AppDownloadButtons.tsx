import Button from './Button'

function AppDownloadButtons() {
  return (
    <div className='w-full flex flex-col gap-7 bg-white px-12 py-8 rounded-2xl text-center mt-[1vh] md:mt-0 md:w-[40.7rem] xl:w-[14rem]'>
      <Button name='apple'>App Store</Button>
      <Button name='google'>Google Play</Button>
    </div>
  )
}

export default AppDownloadButtons
