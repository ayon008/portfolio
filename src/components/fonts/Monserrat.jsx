import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
    subsets: ['latin'], // or ['latin', 'latin-ext'] if you need extended characters
    weight: ['400', '700'], // Choose the font weights you need
    display: 'swap',
})

export default montserrat