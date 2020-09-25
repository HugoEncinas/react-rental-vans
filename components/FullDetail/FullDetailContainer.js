import React, { useState, useEffect } from 'react'
import { Typography, Button } from '@material-ui/core';
import getAPI from '../../services/getAPI'
import Link from 'next/link'
import FullDetailDisplay from './FullDetailDisplay'

const FullDetailContainer = ({vehicleId}) => {

  const [vehicleInfo, setVehicleInfo] = useState({
    data: {
      attributes: {
        display_vehicle_type: '',
        name: '',
        location: {
          city: '',
          state: ''
        },
        price_per_day: '',
        rental_score: '',
      }
    }
  })
  const [primaryImgURL, setPrimaryImgURL] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(()=> {
    const fetchData = async () => {
      const url = `https://odc-search-staging.herokuapp.com/rentals/${vehicleId}`;
      const response = await getAPI(url);
      if (response.status === '404') {
        setError(true)
      } else {
        setVehicleInfo(response)
      }
      setIsLoading(false)
    };
    fetchData();
  }, [])

  useEffect(()=> {
    if(!isLoading && !error) {
      const primaryImgID = vehicleInfo?.data?.relationships.primary_image.data.id
      const imgUrl = vehicleInfo?.included?.filter((item)=> item.id === primaryImgID)[0].attributes.url;
      setPrimaryImgURL(imgUrl);
    }
  }, [vehicleInfo, isLoading, error])

  if (isLoading) {
    return (
      <Typography variant="h4">
        Loading...
      </Typography>
    )
  }

  if (error) {
    return (
      <>
        <Link href={`/`}>
          <a>
            <Button size="small" color="primary">
              Go Back
            </Button>
          </a>
        </Link>
        <Typography variant="h4">
          Error: No results, this item doesn't have more info.
        </Typography>
      </> 
    )
  } 
  
  return (
    <FullDetailDisplay vehicleInfo={vehicleInfo.data} primaryImgURL={primaryImgURL} />
  )
}

export default FullDetailContainer
