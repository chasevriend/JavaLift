import React from 'react';
import '../styles/ScrollBar.css';

import Muscle from './Muscle';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box } from '@mui/system';

const ScrollBar = ({ data, muscle, setMuscle }) => {
    return (
        <ScrollMenu>
            {data.map((item) => (
                <h3
                    key={item.id || item}
                    title={item.id || item}
                    itemId={item.id || item}
                    m=" 0 50px"
                >
                    <Muscle item={item} muscle={muscle} setMuscle={setMuscle} />
                </h3>
            ))}
        </ScrollMenu>
    )
}

export default ScrollBar