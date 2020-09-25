import React, { useState, useEffect } from 'react'
import getAPI from '../../services/getAPI'
import FullDetailDisplay from './FullDetailDisplay'

const FullDetailContainer = ({vehicleId}) => {

  const [vehicleInfo, setVehicleInfo] = useState({})
  

  useEffect(()=> {
    const fetchData = async () => {
      const url = `https://odc-search-staging.herokuapp.com/rentals/${vehicleId}`;
      const {data} = await getAPI(url);
      console.log('data', data)
      setVehicleInfo(data)
    };
    fetchData();
  }, [])

  return (
    <FullDetailDisplay vehicleId={vehicleId} vehicleInfo={vehicleInfo} />
  )
}

export default FullDetailContainer
