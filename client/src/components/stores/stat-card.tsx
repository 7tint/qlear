import React from 'react';

interface CardProps {
  number: string;
  text: string;
  icon: string;
}

const StatCard: React.SFC<CardProps> = (props) => {
  return (
    <div className="column is-full-touch">
      <div className="card">
        <div className="card-content">
          <div className="content">
            <div className="is-flex is-flex-direction-row is-align-items-center is-justify-content-space-between mx-3">
              <div className="is-flex is-flex-direction-column has-text-left">
                <div className="title is-size-4 has-text-theme-green-1 has-font-weight-semibold my-2">
                  {props.number}
                </div>
                <div className="is-size-7">
                  {props.text}
                </div>
              </div>
              <i className={`fa ${props.icon} is-size-2 has-text-theme-green-2`}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

StatCard.defaultProps = {
  number: "0",
  text: "Undefined",
  icon: "fa-question"
}

export default StatCard;
