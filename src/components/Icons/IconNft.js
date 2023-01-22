const IconNft = (props) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' {...props} viewBox='0 0 48 48'>
      <mask id='ipTBlockchain0'>
        <g
          fill='none'
          stroke='#fff'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='4'
        >
          <path d='M40 30V15L27.5 7.969m-7 0L8 15v15m3 4.688L24 42l8-4.5l5-2.813'></path>
          <path
            fill='#555'
            d='m21 18.75l-3 1.75v7l3 1.75L24 31l3-1.75l3-1.75v-7l-3-1.75L24 17l-3 1.75Z'
          ></path>
          <path d='M24 17v-7m6 17l7 4m-19-4l-7 4'></path>
          <circle cx='24' cy='7' r='3' fill='#555'></circle>
          <circle cx='8' cy='33' r='3' fill='#555'></circle>
          <circle cx='40' cy='33' r='3' fill='#555'></circle>
        </g>
      </mask>
      <path
        fill='currentColor'
        d='M0 0h48v48H0z'
        mask='url(#ipTBlockchain0)'
      ></path>
    </svg>
  )
}
export default IconNft
