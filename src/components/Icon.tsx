interface IconProps {
  name?: string
}

function Icon({ name }: IconProps) {
  return (
    <>
      {name === 'apple' && (
        <svg
          width='21'
          height='26'
          viewBox='0 0 21 26'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M17.5397 13.8267C17.5654 11.8196 18.6355 9.92049 20.333 8.86924C19.2621 7.32862 17.4684 6.35183 15.6022 6.29301C13.6117 6.08256 11.6821 7.49276 10.6678 7.49276C9.63384 7.49276 8.07216 6.31391 6.3905 6.34876C4.19852 6.42009 2.15504 7.67542 1.0886 9.60578C-1.20383 13.6037 0.506116 19.4794 2.70207 22.711C3.80076 24.2934 5.08481 26.0611 6.76495 25.9984C8.40908 25.9297 9.02313 24.9423 11.0077 24.9423C12.9739 24.9423 13.55 25.9984 15.2643 25.9585C17.0285 25.9297 18.14 24.3691 19.2002 22.7716C19.9896 21.6441 20.597 20.3979 21 19.0792C18.9267 18.1959 17.5422 16.0942 17.5397 13.8267Z'
            fill='black'
          />
          <path
            d='M14.3018 4.16773C15.2637 3.00454 15.7376 1.50947 15.6229 0C14.1533 0.155481 12.7958 0.862984 11.8208 1.98154C10.8675 3.07443 10.3714 4.5432 10.4652 5.99497C11.9353 6.01022 13.3806 5.32189 14.3018 4.16773Z'
            fill='black'
          />
        </svg>
      )}

      {name === 'google' && (
        <svg
          width='21'
          height='26'
          viewBox='0 0 21 26'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <g filter='url(#filter0_ii_1633_28583)'>
            <path
              d='M0.421218 0.401185C0.156556 0.712529 0.000121682 1.19572 0.000121682 1.82144V24.1775C0.000121682 24.8043 0.156556 25.2865 0.421218 25.5978L0.48852 25.6706L11.7562 13.1471V12.9995V12.8519L0.48852 0.327393L0.421218 0.401185Z'
              fill='url(#paint0_linear_1633_28583)'
            />
            <path
              d='M15.5113 17.3229L11.756 13.147V12.9994V12.8518L15.5122 8.677L15.5968 8.73058L20.0469 11.5408C21.3175 12.3434 21.3175 13.6565 20.0469 14.4601L15.5968 17.2703L15.5113 17.3229Z'
              fill='url(#paint1_linear_1633_28583)'
            />
            <g filter='url(#filter1_i_1633_28583)'>
              <path
                d='M15.5968 17.2696L11.7551 12.9998L0.421021 25.5981C0.839388 26.0914 1.53151 26.152 2.31095 25.6607L15.5968 17.2696Z'
                fill='url(#paint2_linear_1633_28583)'
              />
            </g>
            <path
              d='M15.5968 8.72983L2.31095 0.339724C1.53151 -0.152563 0.839388 -0.0909008 0.421021 0.402397L11.756 13.0007L15.5968 8.72983Z'
              fill='url(#paint3_linear_1633_28583)'
            />
          </g>
          <defs>
            <filter
              id='filter0_ii_1633_28583'
              x='0.00012207'
              y='0'
              width='20.9998'
              height='26'
              filterUnits='userSpaceOnUse'
              color-interpolation-filters='sRGB'>
              <feFlood flood-opacity='0' result='BackgroundImageFix' />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='BackgroundImageFix'
                result='shape'
              />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset dy='-0.15' />
              <feComposite
                in2='hardAlpha'
                operator='arithmetic'
                k2='-1'
                k3='1'
              />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0'
              />
              <feBlend
                mode='normal'
                in2='shape'
                result='effect1_innerShadow_1633_28583'
              />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset dy='0.15' />
              <feComposite
                in2='hardAlpha'
                operator='arithmetic'
                k2='-1'
                k3='1'
              />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0'
              />
              <feBlend
                mode='normal'
                in2='effect1_innerShadow_1633_28583'
                result='effect2_innerShadow_1633_28583'
              />
            </filter>
            <filter
              id='filter1_i_1633_28583'
              x='0.421021'
              y='12.9998'
              width='15.1758'
              height='13.0002'
              filterUnits='userSpaceOnUse'
              color-interpolation-filters='sRGB'>
              <feFlood flood-opacity='0' result='BackgroundImageFix' />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='BackgroundImageFix'
                result='shape'
              />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset dy='-0.15' />
              <feComposite
                in2='hardAlpha'
                operator='arithmetic'
                k2='-1'
                k3='1'
              />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0'
              />
              <feBlend
                mode='normal'
                in2='shape'
                result='effect1_innerShadow_1633_28583'
              />
            </filter>
            <linearGradient
              id='paint0_linear_1633_28583'
              x1='10.7574'
              y1='1.5849'
              x2='-6.1125'
              y2='16.7632'
              gradientUnits='userSpaceOnUse'>
              <stop stop-color='#00A0FF' />
              <stop offset='0.0066' stop-color='#00A1FF' />
              <stop offset='0.2601' stop-color='#00BEFF' />
              <stop offset='0.5122' stop-color='#00D2FF' />
              <stop offset='0.7604' stop-color='#00DFFF' />
              <stop offset='1' stop-color='#00E3FF' />
            </linearGradient>
            <linearGradient
              id='paint1_linear_1633_28583'
              x1='21.7008'
              y1='12.9994'
              x2='-0.305171'
              y2='12.9994'
              gradientUnits='userSpaceOnUse'>
              <stop stop-color='#FFE000' />
              <stop offset='0.4087' stop-color='#FFBD00' />
              <stop offset='0.7754' stop-color='#FFA500' />
              <stop offset='1' stop-color='#FF9C00' />
            </linearGradient>
            <linearGradient
              id='paint2_linear_1633_28583'
              x1='13.5105'
              y1='15.3186'
              x2='-9.3672'
              y2='35.9022'
              gradientUnits='userSpaceOnUse'>
              <stop stop-color='#FF3A44' />
              <stop offset='1' stop-color='#C31162' />
            </linearGradient>
            <linearGradient
              id='paint3_linear_1633_28583'
              x1='-2.43352'
              y1='-7.03973'
              x2='7.78203'
              y2='2.15146'
              gradientUnits='userSpaceOnUse'>
              <stop stop-color='#32A071' />
              <stop offset='0.0685' stop-color='#2DA771' />
              <stop offset='0.4762' stop-color='#15CF74' />
              <stop offset='0.8009' stop-color='#06E775' />
              <stop offset='1' stop-color='#00F076' />
            </linearGradient>
          </defs>
        </svg>
      )}
    </>
  )
}

export default Icon
