import React, {useEffect} from 'react'

import { useStateValue } from '../../context/StateProvider';
import RentalListDisplay from './RentalListDisplay'

const RentalListContainer = () => {
  const [{ rentalList }, dispatch ] = useStateValue();

  useEffect(()=> {
    console.log('rentalList', rentalList)
  }, [rentalList])

  return (
    <RentalListDisplay rentalList={rentalList} />
  )
}

export default RentalListContainer
