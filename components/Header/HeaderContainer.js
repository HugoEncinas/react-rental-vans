import React, { useEffect, useRef, useState } from 'react'

import { useStateValue } from '../../context/StateProvider';
import getRentalList from '../../services/getRentalList'
import HeaderDisplay from './HeaderDisplay'

const HeaderContainer = () => {
  const [searchValue, setSearchValue] = useState('');
  const [pagelimit, setPagelimit] = useState(10);
  const [pageoffset, setPageoffset] = useState(0);
  const [_, dispatch ] = useStateValue();
  const inputEl = useRef(null);
  

  const searchHandler = () => {
    setSearchValue(inputEl.current.value.toLowerCase())
  };

  const submitHandler = event => {
    if (event.type === 'click' || event.charCode === 13) {
      console.log('event', event.type);
      fetchData();
    }
  };

  const fetchData = async () => {
    const url = `https://odc-search-staging.herokuapp.com/rentals?filter[type]=${searchValue}&address=san%20francisco&page[limit]=${pagelimit}&page[offset]=${pageoffset}`;
    const {data} = await getRentalList(url);
    dispatch({
      type: 'SET_RENTAL_LIST',
      payload: data
    })
  };

  return (
    <HeaderDisplay searchHandler={searchHandler} submitHandler={submitHandler} inputEl={inputEl}/>
  )
}

export default HeaderContainer
