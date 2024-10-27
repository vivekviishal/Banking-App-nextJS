'use client'
import React from 'react'
import CountUp from 'react-countup'

function AnimatedCounter({ amount }: { amount: number }) {
    return (
        <CountUp className='w-full' end={amount}
            prefix='$'
            decimal=','
            duration={2}
            decimals={2}
        />
    )
}

export default AnimatedCounter