import React, { useEffect, useState } from 'react'
import lineaSup from '../Assets/linea-masLarga.png'
import lineaInf from '../Assets/Linea-inferior.png'
import logo from '../Assets/BlancoLogo.png'
import photo from '../Assets/Screen+Shot.png'
import icono from '../Assets/icon-padel.png'
import { Loading } from '../Components/loading'
const Score2 = () => {
    const [first, setfirst] = useState(false)
    useEffect(() => {
        setfirst(true)

        setTimeout(() => {
            setfirst(false)
        }, 2000);

    }, [])

    return (
        <>
            {
                first ? <Loading /> : (<>

                    <header>
                        <div className='container'>
                            <div className='name-one'>
                                <h2>JESUS / JOANGEL</h2>
                            </div>
                            <div className='name-two'>
                                <h2>JULIO / KENNY</h2>
                            </div>
                            <img src={lineaSup} className='line-score' />

                            <div className='sets-partida'>
                                <h1 className='sets-left'>2</h1>
                                <h1 className='sets-righ'>0</h1>
                            </div>

                            <div className='numbers'>
                                <img src={icono} className='icon' />
                                <h2 className='num-left'>5</h2>
                                <h2 className='num-right'>3</h2>
                                <h3 className='time'>00:00</h3>
                            </div>
                        </div>
                    </header>

                    <div>
                        <img src={photo} className='photo' />
                    </div>

                    <div>
                        <div>
                            <img src={lineaInf} className='line-inf' />
                        </div>
                         
                            <h3 className='sacador'>JESUS</h3>
                        <div className='puntos'>
                            <h1 className='punto-iz'>40</h1>
                            <h1 className='punto-ez'>40</h1>
                        </div>
                        <img src={logo} className='logo' />
                    </div>
                </>
                )
            }
        </>
    )
}

export default Score2