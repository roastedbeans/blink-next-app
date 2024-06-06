'use client';
import { ButtonGroup, ButtonGroupDisabled } from '@/components/groups/ButtonGroup';
import InputGroup from '@/components/groups/InputGroup';
import { LoginForm } from '@/components/ui/LoginForm';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';

const Components = () => {
	return (
		<div className='flex w-full min-h-screen h-fit mx-auto items-center justify-center text-center bg-gradient-to-tr from-background-secondary to-background relative antialiased md:p-8 p-4'>
			{/* <BackgroundBeams /> */}

			<BentoGrid className='max-w-4xl w-full mx-auto auto-rows-auto z-10 rounded-2xl'>
				{items.map((item, i) => (
					<BentoGridItem
						key={i}
						title={item.title}
						description={item.description}
						header={item.header}
						className={item.className}
					/>
				))}
			</BentoGrid>
		</div>
	);
};
const ButtonDisplay = () => (
	<div className='p-2 flex flex-col flex-1 w-full items-center justify-start mx-auto h-hit min-h-[6rem] gap-4 rounded-lg dark:bg-dot-white/[0.2] bg-dot-black/[0.2] border-2 border-border overflow-clip dark:border-white/[0.2] bg-white dark:bg-black overflow-y-auto'>
		<div className='flex-wrap flex gap-2 items-center justify-center h-auto mx-auto'>
			<ButtonGroup />
		</div>
		<div className='flex-wrap flex gap-2 items-center justify-center h-auto mx-auto'>
			<ButtonGroupDisabled />
		</div>
	</div>
);

const InputDisplay = () => (
	<div className='p-2 flex flex-col flex-1 w-full h-full min-h-[6rem] gap-4 rounded-lg dark:bg-dot-white/[0.2] bg-dot-black/[0.2] border-2 border-border overflow-clip dark:border-white/[0.2] bg-white dark:bg-black overflow-y-auto'>
		<div className='flex-wrap flex gap-2 items-start w-fit h-fit mx-auto'>
			<InputGroup />
		</div>
	</div>
);

const LoginFormDisplay = () => (
	<div className='p-2 flex flex-col flex-1 w-full h-full min-h-[6rem] gap-4 rounded-lg dark:bg-dot-white/[0.2] bg-dot-black/[0.2] border-2 border-border dark:border-white/[0.2] bg-white dark:bg-black overflow-y-auto'>
		<LoginForm />
	</div>
);

const Skeleton = () => (
	<div className='flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black'></div>
);

const items = [
	{
		title: 'Buttons',
		description: 'Button variants.',
		header: <ButtonDisplay />,
		className: 'md:col-span-2 h-full p-2',
	},
	{
		title: 'Input Text',
		description: 'Input text variants.',
		header: <InputDisplay />,
		className: 'md:col-span-1 h-full p-2',
	},
	{
		title: 'Skeleton',
		description: 'Description.',
		header: <LoginFormDisplay />,
		className: 'md:col-span-2 h-full p-2',
	},
	{
		title: 'Skeleton',
		description: 'Description.',
		header: <Skeleton />,
		className: 'md:col-span-1 h-full p-2',
	},
];

export default Components;
