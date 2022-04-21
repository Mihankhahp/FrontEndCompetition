import React, { useEffect, useReducer } from "react";
import { fetchData } from "./Components/Api/Api";
import Products from "./Components/Products/Products";
import Navbar from "./Components/Navbar/Navbar"
import { InitialState, reducer } from "./ActionCenter/Reducer";
import { setIsLoading, setProducts, setFetchOffset, setSearchKeyWord } from "./ActionCenter/Action";

function App() {
  
  const [{ isLoading, products, fetchOffset, searchKeyWord }, dispatch] = useReducer(reducer, InitialState)

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) return;
      dispatch(setIsLoading(true));
      console.log("its on bottom");
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);

  useEffect(() => {
    if (!isLoading) return;
    else {
      setTimeout(() => {
        const newFetchOffset = fetchOffset + 1
        fetchData(newFetchOffset).then((data) => {
          dispatch(setProducts(data))
          dispatch(setFetchOffset(newFetchOffset))
          dispatch(setIsLoading(false))
        }, 2000);
      })
    }
  }, [isLoading, fetchOffset]);

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


