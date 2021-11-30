import React from 'react';

const Counter = ({number, onIncrease, onDecrease}) => {
    return (
        <section className={'section'}>
            <div className={'summary'}>{number}</div>
            <div className={'btn--group'}>
                <button onClick={onIncrease} className={'btn'}>+1</button>
                <button onClick={onDecrease} className={'btn'}>-1</button>
            </div>
        </section>
    );
};

export default Counter;