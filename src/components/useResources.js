import { useState, useEffect } from 'react';
import axios from 'axios';

const useResources = (resource) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    (async resource => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)

    setResources(response.data);
  })(resource)}, [resource])

// DEFINING & IMMEDIATELY INVOKING FUNC REPLACES FUNC CALLBACK:
  // const fetchResource = async (resource) => {
  //   const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
  //   setResources(response.data);
  // };
  //
  // useEffect(() => {
  //   fetchResource(resource);
  // }, [resource])
  return resources;
};

export default useResources;
