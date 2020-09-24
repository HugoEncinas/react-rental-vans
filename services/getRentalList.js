const getRentalList = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    throw err;
  }
};

export default getRentalList;