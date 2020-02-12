import React from 'react';
import Card from './Card';
import {IRobot} from '../containers/App';

const CardList = ({ robots }: {robots: Array<IRobot>}) => {
    // For testing purpose
    // if (true) {
    //     throw new Error('You DIED')
    // }
    console.log('CardList');
    return (
        <>
            {robots.map(robot => <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />)}
        </>
    );
}

export default CardList;