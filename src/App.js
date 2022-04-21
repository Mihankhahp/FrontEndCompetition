import React, { useEffect, useState } from "react";
import { fetchData } from "./Components/Api/Api";
import Products from "./Components/Products/Products";
import Navbar from "./Components/Navbar/Navbar"

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchOffset, setFetchOffset] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) return;
      setIsLoading(true);
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
          setProducts((prevState) => {
            return [...new Set([...prevState, ...data])]
          })
          setFetchOffset(newFetchOffset)
          setIsLoading(false)
        }, 2000);
      })
    }
  }, [isLoading, fetchOffset]);

  const handleSearch = (inpval) => {
    setSearch(inpval)
  }


  const filteredProducts = products.filter(
    (product) => {
      return product.description.toLowerCase().includes(search.toLowerCase())
    }
  )

  // console.log("This is Data in App Component", products);
  // console.log("This is offset in App Component", fetchOffset);
  return (

    <div className="App">
      <Navbar sendVal={handleSearch} searchKey={search} />
      <Products products={search ? filteredProducts : products} isLoading={isLoading} />
    </div>
  );
}

export default App;


