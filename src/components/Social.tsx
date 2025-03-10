function Social() {
  const icons = [
    {
      icon: 'discord.svg',
      link: 'https://discord.gg/anHD2ceePQ',
      alt: 'Discord',
    },
    {
      icon: 'instagram.svg',
      link: 'https://www.instagram.com/skilldorcom',
      alt: 'instagram',
    },
    {
      icon: 'tik-tok.svg',
      link: 'https://www.tiktok.com/@skilldor',
      alt: 'tik tok',
    },
    {
      icon: 'youtube.svg',
      link: 'https://www.youtube.com/@skilldorcom',
      alt: 'youtube',
    },
    {
      icon: 'x.svg',
      link: 'https://x.com/skilldorcom',
      alt: 'X',
    },
  ]

  return (
    <div className='flex items-center mt-6 gap-5 select-none'>
      {icons.map((icon, index) => (
        <a key={index} href={icon.link} target='_blank'>
          <img
            src={icon.icon}
            alt={icon.alt}
            className='w-6 h-6 hover:animate-hoverIcon hover:scale-110'
          />
        </a>
      ))}
    </div>
  )
}

export default Social
