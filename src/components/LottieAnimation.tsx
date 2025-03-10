import { useLottie } from 'lottie-react'
import animationData from '../assets/animations/data.json'

interface LottieProps {
  centering?: string
}

const Lottie = ({ centering }: LottieProps) => {
  const options = {
    animationData: animationData,
    loop: true,
  }

  const { View } = useLottie(options)

  const classes = centering
    ? 'animate-display'
    : 'animate-display w-48 absolute -top-7 -left-10'

  return <div className={classes}>{View}</div>
}

export default Lottie
