import React from 'react';
import '../styles/ScrollBar.css';

import Muscle from './Muscle';

const ScrollBar = ({ data, muscle, setMuscle }) => {
    return (
    <div>
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
    </div>
    )
}

export default ScrollBar