import React from 'react'

import { useStateValue } from '../../context/StateProvider';
import RentalListDisplay from './RentalListDisplay'

const RentalListContainer = () => {
  const [{ rentalList }] = useStateValue();

  return (
    <RentalListDisplay rentalList={rentalList} />
  )
}

export default RentalListContainer
