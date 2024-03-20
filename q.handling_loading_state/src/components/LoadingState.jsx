import React, { useState, useEffect } from "react";

const LoaodingState = () => {
  // State to store data fetched from an API
  const [data, setData] = useState(null);
  // State to track loading status
  const [isLoading, setIsLoading] = useState(false);
  // State to track error status
  const [error, setError] = useState(null);

  // Function to fetch data from an API
  const fetchData = async () => {
    // Set loading state to true
    setIsLoading(true);
    // Reset error state
    setError(null);

    try {
      // Simulate fetching data from an API (replace with actual API call)
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      // Check if response is successful
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      // Convert response to JSON format
      const fetchedData = await response.json();
      // Update data state with fetched data
      setData(fetchedData);
    } catch (error) {
      // Set error state if fetching data fails
      setError(error.message);
    } finally {
      // Set loading state to false regardless of success or failure
      setIsLoading(false);
    }
  };

  // Use useEffect hook to fetch data when component mounts
  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures that the effect runs only once when component mounts

  // Render UI based on loading and error states
  return (
    <div>
      <h1>Loading Example</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <div>
          <h2>Data Received:</h2>
          <p>User ID: {data.userId}</p>
          <p>Title: {data.title}</p>
          <p>Body: {data.body}</p>
        </div>
      )}
    </div>
  );
};
export default LoaodingState;
