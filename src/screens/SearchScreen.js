import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import { useResults } from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = React.useState("");
  const { searchApi, errorMesage, results } = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMesage && <Text>{errorMesage}</Text>}
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("$")}
          title={"Cost Effective"}
        />
        <ResultsList
          results={filterResultsByPrice("$$")}
          title={"Big Pricier"}
        />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title={"Big Spender"}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
