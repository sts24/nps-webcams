import localFont from 'next/font/local'

export const NationalPark = localFont({
  src: [
    {
      path: '../fonts/NationalPark-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../fonts/NationalPark-Bold.woff2',
      weight: '700',
      style: 'normal'
    }
  ]
})

export const Pacifico = localFont({
  src: [
    {
      path: '../fonts/pacifico.woff2',
      weight: '400',
      style: 'normal'
    }
  ]
})