import './App.css';
import Main from './views/Main';
import Products from './views/Products';
import LoginRegView from './views/LoginRegView';
import React, {useState} from 'react'
import { Route, Routes, useNavigate} from 'react-router-dom'
import axios from 'axios'
import AccountView from './views/AccountView';
import BrowseView from './views/BrowseView';
import Contact from './views/Contact';

function App() {
  const navigate = useNavigate()
  const [products, setProducts] = useState()
  const [training, setTraining] = useState()

  const searchFunction = (api) =>{
    axios.get(api)
            .then(res => { setProducts(res.data)
                navigate("/products")
                console.log(res.data)
                setTraining()
            })
            .catch(err => console.log(err))
  }

  const searchOne = (keyWord) =>{
    axios.get(`https://serpapi.com/search.json?engine=google&q=${keyWord}&api_key=e16508a17a343e33da2654476da99bbbeb97dcd0eb55d8e714c961c69446116f`)
      .then(res => { setProducts(res.data)
        navigate("/products")
        console.log("Products", res)
        setTraining()
      })
      .catch(err => console.log(err))
  }
  const searchTwo = (keyWord) =>{
    axios.get(`https://serpapi.com/search.json?engine=google&q=${keyWord}&api_key=e16508a17a343e33da2654476da99bbbeb97dcd0eb55d8e714c961c69446116f`)
    .then(res => { setTraining(res.data)
      navigate("/products")
      console.log("Training Results",res)
      setProducts()
    })
    .catch(err => console.log(err))
  }

  const loginStatus = (login, setLogin) =>{

  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Main searchFunction={searchFunction} searchOne={searchOne} searchTwo={searchTwo}
        loginStatus={loginStatus}
        />}
        />
        <Route path="/products" element={<Products searchFunction={searchFunction}
        products={products} training={training}/>}/>
        <Route path="/login" element={<LoginRegView loginStatus={loginStatus}/>}/>
        <Route path="/account/:user_id" element={<AccountView/>}></Route>
        <Route path="/browse" element={<BrowseView/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </div>
    
  );
}

export default App;
