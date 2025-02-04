import Icon from './Icon'

interface ButtonProps {
  children: string
  name?: string
}

function Button({ children, name }: ButtonProps) {
  return (
    <button type='button' className='border h-12 font-medium flex items-center'>
      <Icon name={name} />
      {children}
    </button>
  )
}

export default Button
