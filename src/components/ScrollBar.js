import React from 'react';
import '../styles/ScrollBar.css';

import Muscle from './Muscle';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box } from '@mui/system';

const ScrollBar = ({ data, muscle, setMuscle }) => {
    return (
        <>
            {data.map((item) => (
                <div
                    className='scroll__item'
                    key={item.id || item}
                    title={item.id || item}
                    itemId={item.id || item}
                    m=" 0 50px"
                >
                    <Muscle item={item} muscle={muscle} setMuscle={setMuscle} />
                </div>
            ))}
        </>
    )
}

export default ScrollBar