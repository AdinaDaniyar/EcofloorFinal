import React, {useEffect, useState} from 'react';
import arrow from '../../assets/images/arrowup.webp'
import {Link} from 'react-scroll'
import './Arrow.css'

const Arrow = () => {

    const [scrollPosition,setScrollPosition] = useState(0)

    const handleScroll = ()=>{
        const position = window.scrollY
        setScrollPosition(position)
    }

    useEffect(()=>{
        window.addEventListener('scroll',handleScroll,{passive:true})
        return ()=>{
            window.removeEventListener('scroll', handleScroll)
        }
    },[])
    console.log(scrollPosition)


    return (

        <Link

            className={scrollPosition> 300 ? "arrow show" : "arrow"}
            to='cover'
            smooth={true}
            offset={-100}
            delay={500}>
            <img  className='arrow__img' src={arrow} alt=""/>
        </Link>

    );
};

export default Arrow;