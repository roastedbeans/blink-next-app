'use client';

import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';
import Loading from '@/components/ui/Loading'; // Adjust the import path as necessary

interface LoadingContextType {
	loading: boolean;
	setLoading: Dispatch<SetStateAction<boolean>>;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

interface LoadingProviderProps {
	children: ReactNode;
}

export function LoadingProvider({ children }: LoadingProviderProps) {
	const [loading, setLoading] = useState<boolean>(true);
	const value: LoadingContextType = { loading, setLoading };

	return (
		<LoadingContext.Provider value={value}>
			{loading && <Loading />}
			{children}
		</LoadingContext.Provider>
	);
}

export function useLoading(): LoadingContextType {
	const context = useContext(LoadingContext);
	if (!context) {
		throw new Error('useLoading must be used within LoadingProvider');
	}
	return context;
}
