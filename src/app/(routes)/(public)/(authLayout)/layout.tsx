import type { Metadata } from 'next';
import { satoshi } from '@/../public/fonts/fonts';
import './../../globals.css';
import Sidebar from '@/components/ui/Sidebar';
import Header from '@/components/ui/header';
import { LoadingProvider } from '@/context/LoadingContext';

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
				<LoadingProvider>
					<div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
					{children}
				</LoadingProvider>
			</body>
		</html>
	);
}
