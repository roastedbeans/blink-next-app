import { satoshi } from '@/../public/fonts/fonts';
import { LoadingProvider } from '@/context/LoadingContext';
import type { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
	title: 'BLINK | Login',
	description: 'Business Solution Application',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			className={`${satoshi.className ? satoshi.className : 'font-inter'} antialiased transition-all`}>
			<body
				suppressHydrationWarning={true}
				className='flex w-full min-h-screen h-fit items-center justify-center mx-auto bg-white dark:bg-black dark:bg-dot-white/[0.2] bg-dot-secondary/[0.2] relative'>
				<LoadingProvider>{children}</LoadingProvider>
			</body>
		</html>
	);
}
