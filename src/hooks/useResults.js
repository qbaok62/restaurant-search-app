import React from "react";
import yelp from "../api/yelp";

export const useResults = () => {
  const [results, setResults] = React.useState([]);
  const [errorMesage, setErrorMessage] = React.useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };

  React.useEffect(() => {
    searchApi("pasta");
  }, []);

  return {
    searchApi,
    results,
    errorMesage,
  };
};
