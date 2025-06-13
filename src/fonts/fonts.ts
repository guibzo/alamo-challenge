import localFont from 'next/font/local'

const blinkMac = localFont({
  src: [
    {
      path: './local/blink-mac/blinkmac-black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './local/blink-mac/blinkmac-bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './local/blink-mac/blinkmac-semibold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './local/blink-mac/blinkmac-medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './local/blink-mac/blinkmac-regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  weight: '',
  variable: '--font-blink-mac',
})

export { blinkMac }
