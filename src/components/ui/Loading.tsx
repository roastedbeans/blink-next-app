'use client';

import blinking from '@/../public/lottieFiles/blinking.json';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { TypewriterEffect } from './typewriter-effect';
import { AnimatePresence, motion } from 'framer-motion';

const Loading = () => {
	return (
		<AnimatePresence>
			<div className='fixed w-full h-screen overflow-clip flex flex-col items-center justify-center bg-white/5 backdrop-blur-sm z-[999]'>
				<motion.div
					initial={{ rotate: 360, scale: 0 }}
					animate={{ rotate: 0, scale: 1 }}
					exit={{ rotate: -360, scale: 1 }}>
					<Player
						autoplay
						loop
						src={blinking}
						style={{ height: '80px', width: '80px' }}>
						<Controls visible={false} />
					</Player>
				</motion.div>
				<TypewriterEffect
					words={[{ text: 'blinking...' }]}
					className='lg:text-lg md:text-md sm:text-sm justify-center text-secondary dark:text-dark-secondary'
				/>
			</div>
		</AnimatePresence>
	);
};

export default Loading;
