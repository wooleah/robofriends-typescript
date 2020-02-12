import React from 'react';
import {IRobot} from '../containers/App';

const Card = ({ id, name, email }: IRobot) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow shadow-5">
      <img alt="robot" src={`https://robohash.org/${id}?size=200x200&set=set4`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;