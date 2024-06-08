import { satoshi } from '@/../public/fonts/fonts';
import Sidebar from '@/components/ui/Sidebar';
import Header from '@/components/ui/header';
import type { Metadata } from 'next';
import '../../../globals.css';

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
				<LoadingProvider>
					<main className='w-full h-fit min-h-screen'>
						<Header />
						{children}
					</main>
				</LoadingProvider>
			</body>
		</html>
	);
}
