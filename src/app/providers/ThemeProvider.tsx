'use client'

import React, { ReactNode, useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../context/ThemeContext'

interface ThemeProviderProps {
	children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	const {theme} = useContext(ThemeContext); 
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);

	}, [])

	if (mounted) {
		return (
			<div className={theme}>{children}</div>
		)
	}
}

export default ThemeProvider;
