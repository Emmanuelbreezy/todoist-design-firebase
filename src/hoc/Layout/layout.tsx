import React, { useEffect } from 'react';
import { ThemeContextValue } from '../../context/theme-context';

const Layout = (props: any) => {

    const { themeMode } = ThemeContextValue();

    useEffect(()=>{
        localStorage.setItem('themeMode',themeMode);
    },[themeMode])

    let switchClasses = (themeMode === 'darkTheme' ? "relative flex  flex-1 flex-col  bg-th-dark" : 
                            "relative flex  flex-1 flex-col  bg-th-light");
    return(
            <div className={switchClasses}>
            <div>{props.children}</div>
            </div>
    );
}


export default Layout;