import localFont from 'next/font/local';
import { Inter } from 'next/font/google';

export const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-sans',
});

const satoshi = localFont({ src: './Satoshi-Variable.ttf', preload: false, fallback: ['inter'] });

const satoshi_italic = localFont({ src: './Satoshi-VariableItalic.ttf' });

const interClass = inter.variable;

export { satoshi, satoshi_italic, interClass };
