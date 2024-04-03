import { useState, useEffect } from "react";

//defines a custom hook named 'useFetchData'
const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //defines an asunchronous function "fetchData" responsible for fetching data from the specified URL.
    const fetchData = async () => {
      try {
        //sets 'loading' to 'true' to indicate that data fetching is in progress.
        setLoading(true);
        //makes a "fetch" request to the provide URL
        const response = await fetch(url);
        //checks if the response is successful
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        //parses the JSON response and updates the data state with the fetched data using setData
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        //if an errror occurs during the fetch operation, it is caught in the 'catch' block and 'error' state is updated using 'setError'
        setError(error);
      } finally {
        //"finally" block sets 'loading'  to 'false' reagrdless of the fetch operation's outcome indicating that data fetching is complete
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  //returns an object containing the 'data', 'loading' and 'error' states. This object serves as the custom hooks interface allowing components to access and utillize these states
  return { data, loading, error };
};

export default useFetchData;
