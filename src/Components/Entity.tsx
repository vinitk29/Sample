import React from 'react';
import { ICard } from './ICard';

const Entity = (props:ICard) => {
    const {isShow, picture, firstName, lastName, city, state, phone, id} = props;
    return (<div className={isShow?"col-md-4 animated fadeIn":"hidden"} key={id}>
    <div className="card">
      <div className="card-body">
        <div className="avatar">
          <img
            src={picture}
            className="card-img-top"
            alt=""
          />
        </div>
        <h5 className="card-title">
          {firstName +
            " " +
            lastName}
        </h5>
        <p className="card-text">
          {city +
            ", " +
            state}
          <br />
          <span className="phone">{phone}</span>
        </p>
      </div>
    </div>
  </div>
    );
};

export default Entity;