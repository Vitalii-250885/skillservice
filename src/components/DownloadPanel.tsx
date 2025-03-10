import AppleIcon from './icons/AppleIcon'
import GooglePlayIcon from './icons/GooglePlayIcon'

function DownloadPanel() {
  return (
    <div className='bg-white py-5 md:py-12 px-5 gap-5 md:px-8 rounded-2xl text-center flex md:gap-7'>
      <a
        href='#'
        className='select-none w-40 h-12 border-2 rounded-lg font-medium flex items-center justify-center gap-3'>
        <AppleIcon />
        App Store
      </a>
      <a
        href='#'
        className='select-none w-40 h-12 border-2 rounded-lg font-medium flex items-center justify-center gap-3'>
        <GooglePlayIcon />
        Google Play
      </a>
    </div>
  )
}

export default DownloadPanel
