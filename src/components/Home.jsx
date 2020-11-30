import React, { useState, useEffect } from 'react'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles({
    button: {
        background: '#4CAF50',
        border: 0,
        borderRadius: '50%',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '30px',
    },
})

function Home() {
    const [count, setCount] = useState(0)
    useEffect(()=>{console.log('useEffect')}, [count])
    const classes = useStyles()
  return (
    <div>
      <h1>Home</h1>
        <button
            onClick={()=>setCount(count + 1)}
            className={classes.button}
        >
            {count}
        </button>
    </div>
  );
}

export default Home;
