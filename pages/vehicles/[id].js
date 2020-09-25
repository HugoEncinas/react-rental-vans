import React from 'react'
import FullDetail from '../../components/FullDetail';

const Vehicle = ({ vehicleId }) => {
  return (
    <FullDetail vehicleId={vehicleId}/>
  )
}

Vehicle.getInitialProps = async ctx => {
  return {
    vehicleId: ctx.query.id
  };
};

export default Vehicle
