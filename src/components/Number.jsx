import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Number = (props) => {
    // const { input } = props
    const [ isNum, setIsNum ] = useState(false)
    const { number, bcolor, tcolor } = useParams();

    const checkNumber = () =>{
        if(isNaN(number)){
            setIsNum(!isNum)
        }
    }

    useEffect(()=>{
        console.log(number, bcolor, tcolor)
        checkNumber(number)
    },[])

    return (
        <>
            {isNum?
                <div style={{backgroundColor:bcolor, color:tcolor}}>The word is : {number}</div>
                :
                <div style={{backgroundColor:bcolor, color:tcolor}}>The number is : {number}</div>
            }
        </>
    )
}

export default Number