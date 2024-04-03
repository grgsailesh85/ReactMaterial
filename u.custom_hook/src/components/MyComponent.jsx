import React from "react";
import useFetchData from "./useFetchData";

const MyComponent = () => {
  // the 'useFetchData' hook is called with the URL and the hook returns an object conatining 'data', 'loading' and 'error' states
  const { data, loading, error } = useFetchData("https://api.example.com/data");

  //checks the loading state and if the loading is true it renders a loading message("Loading...")
  if (loading) {
    return <div>Loading...</div>;
  }

  //if an error occurs during data fetching the components renders an error message displaying the error message ('error.message')
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    //if there are no errors and the data is available ('data' is truthy), the component renders a list ('ul') containing items fetched from the API
    <div>
      {data && (
        //each item in the 'data' array is mapped to a list item ('li') with a unique 'key' attribute ('item.id') and the items name('item.name') as the content
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyComponent;
