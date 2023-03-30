import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { reducer } from "./reducer";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const api = await fetch(`https://dummyjson.com/products`);
    const { products } = await api.json();
    setProductList(products);
    setLoading(false);
  };

  const initialState = {
    products: [],
    cart: [],
    detail: [],
  };

  useEffect(() => {
    dispatch({ type: "GET_PRODUCTS", payLoad: productList });
    const filter = productList?.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    dispatch({ type: "GET_PRODUCTS", payLoad: filter });
  }, [productList, search]);

  const [state, dispatch] = useReducer(reducer, initialState);

  const data = {
    search,
    setSearch,
    state,
    dispatch,
    loading,
  };

  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export const useContextCustom = () => useContext(StateContext);
