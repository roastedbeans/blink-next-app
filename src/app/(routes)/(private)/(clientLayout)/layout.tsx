import type { Metadata } from 'next';
import { satoshi } from '@/../public/fonts/fonts';
import './../../globals.css';
import Sidebar from '@/components/ui/Sidebar';
import Header from '@/components/ui/header';

export const metadata: Metadata = {
	title: 'BLINK',
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
				className='flex w-full min-h-screen h-fit'>
				<nav className='h-fit min-h-screen md:max-w-64 max-w-16 w-full relative overflow-hidden'>
					<Sidebar />
				</nav>
				<main className='w-full h-fit min-h-screen relative'>
					<Header />
					{children}
				</main>
			</body>
		</html>
	);
}
