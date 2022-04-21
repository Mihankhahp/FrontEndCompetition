import React, { useEffect, useState } from "react";
import { fetchData } from "./Components/Api/Api";
import Products from "./Components/Products/Products";

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchOffset, setFetchOffset] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);//eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!isLoading) return;
    else {
      setTimeout(() => {
        const newFetchOffset = fetchOffset + 1
        fetchData(newFetchOffset).then((data) => {
          setProducts(prevState => ([...prevState, ...data]))
          setFetchOffset(newFetchOffset)
          setIsLoading(false)
        }, 2000);
      })
    }
  }, [isLoading, fetchOffset]);

  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) return;
    setIsLoading(true);
    console.log("its on bottom");
  }

  // console.log("This is Data in App Component", products);
  // console.log("This is offset in App Component", fetchOffset);
  return (

    <div className="App">
      <Products products={products} isLoading={isLoading} />
    </div>
  );
}

export default App;


