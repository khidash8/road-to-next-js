import {ThemeProvider as NextThemesProvider} from 'next-themes'
import React from 'react';

type ThemeProviderProps = {
    children: React.ReactNode;
}

const ThemeProvider = ({children}:ThemeProviderProps) => {
    return (
        <NextThemesProvider attribute={'class'} defaultTheme={'system'} enableSystem>
            {children}
        </NextThemesProvider>
    );
};

export default ThemeProvider;