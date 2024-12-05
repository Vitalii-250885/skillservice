function Social() {
  const icons = [
  {
    icon: 'instagram.svg',
    link: 'https://www.instagram.com/skilldorcom',
    alt: 'instagram'
  },
  {
    icon: 'tik tok.svg',
    link: 'https://www.tiktok.com/@skilldor',
    alt: 'tik tok'
  },
  {
    icon: 'youtube.svg',
    link: 'https://www.youtube.com/@skilldorcom',
    alt: 'youtube'
  },
  {
    icon: 'X.svg',
    link: 'https://x.com/skilldorcom',
    alt: 'X'
  }
]

  return (
    <div className='flex mt-[1.6vh]'>
      {icons.map(icon => (
        <a href={icon.link} target='_blank'>
          <img
            src={icon.icon}
            alt={icon.alt}
            className='p-2 w-[5.55vh] md:w-[6vh] xl:w-[6.5vh] 2xl:w-[5.6vh] hover:animate-hoverIcon hover:scale-110'
          />
        </a>
      ))}
    </div>
  )
}

export default Social