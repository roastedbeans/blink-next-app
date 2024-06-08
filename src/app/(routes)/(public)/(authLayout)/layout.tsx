import { LoadingProvider } from '@/context/LoadingContext';
import type { Metadata } from 'next';
import '../../../globals.css';

export const metadata: Metadata = {
	title: 'BLINK | Login',
	description: 'Business Solution Application',
};

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className='flex w-full min-h-screen h-fit items-center justify-center mx-auto bg-white dark:bg-black dark:bg-dot-white/[0.2] bg-dot-secondary/[0.2] relative'>
			<LoadingProvider>
				<div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
				{children}
			</LoadingProvider>
		</main>
	);
}
