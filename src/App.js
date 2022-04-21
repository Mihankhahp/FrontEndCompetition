import React, { useEffect, useReducer } from "react";
import { fetchData } from "./Components/Api/Api";
import Products from "./Components/Products/Products";
import Navbar from "./Components/Navbar/Navbar"
import { INITIALSTATE, reducer } from "./ActionCenter/Reducer";
import { setIsLoading, setProducts, setFetchOffset, setSearchKeyWord } from "./ActionCenter/Action";

function App() {

  const [{ fetchingOffset, isLoading, products, searchKeyWord }, dispatch] = useReducer(reducer, INITIALSTATE)
  console.log("offset Value", fetchingOffset);
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) return;
      dispatch(setIsLoading(true));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);

  useEffect(() => {
    if (!isLoading) return;
    else {
      setTimeout(() => {
        const newFetchOffset = fetchingOffset + 1
        fetchData(newFetchOffset).then((data) => {
          dispatch(setProducts(data))
          dispatch(setFetchOffset(newFetchOffset))
          dispatch(setIsLoading(false))
        }, 2000);
      })
    }
  }, [isLoading, fetchingOffset]);
  const filteredProducts = products && products.filter(
    (product) => {
      return product.description.toLowerCase().includes(searchKeyWord.toLowerCase())
    }
  )
  return (

    <div className="App">
      <Navbar sendVal={(inpval) => dispatch(setSearchKeyWord(inpval))} searchKey={searchKeyWord} />
      <Products products={searchKeyWord ? filteredProducts : products} isLoading={isLoading} />
    </div>
  );
}

export default App;


