import type { Metadata } from 'next';
import { satoshi } from '@/../public/fonts/fonts';
import './../../globals.css';
import Sidebar from '@/components/ui/Sidebar';
import Header from '@/components/ui/header';

export const metadata: Metadata = {
	title: 'Components Template',
	description: 'Collection of my components',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			className={`${satoshi.className ? satoshi.className : 'font-inter'} antialiased`}>
			<body
				suppressHydrationWarning={true}
				className='flex w-full min-h-screen h-fit'>
				<nav className='h-fit max-h-screen relative'>
					<Sidebar />
				</nav>
				<main className='w-full h-fit min-h-screen'>
					<Header />
					{children}
				</main>
			</body>
		</html>
	);
}