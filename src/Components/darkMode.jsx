import React, { useEffect, useState } from 'react'

const DarkMode = () => {
    const [theme, setTheme] = useState('light')
   

    useEffect(() => {
        if (theme === "dark") {
            document.querySelector('html').classList.add('dark')
        }else{
            document.querySelector('html').classList.remove('dark')
        }
    }, [theme])
    const handleChangeTheme = () =>{
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
    }
  return (
    <div className='h-screen flex justify-center items-center dark:bg-slate-900'>
        <button  className='bg-slate-200 px-4 py-2 rounded hover:bg-slate-300 dark:bg-slate-950
        dark: text-white dark:hover:bg-slate-900 
        '  onChange={handleChangeTheme}>
            Changed Theme
        </button>
    </div>
  )
}

export default DarkMode