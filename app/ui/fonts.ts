import { Inter, Roboto_Mono, Lusitana } from 'next/font/google';


export const inter = Inter({
  subsets: ['latin']
});

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})

export const roboto_mono_small = Roboto_Mono({
  subsets:['greek'],
  weight:['100','400']
})

export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: "normal"
})
