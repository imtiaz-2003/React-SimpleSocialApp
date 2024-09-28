import "bootstrap/dist/css/bootstrap.css"
import './App.css';
import Header from './components/Header';
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListProvider from "./store/PostListStore";


function App() {
 const [selectTab , setSelectTab] = useState("Home");
  return (

    <PostListProvider>
    <div className="d-flex ">
    <Sidebar selectTab={selectTab} setSelectTab={setSelectTab}/>
    <div className="content w-100">
    <Header/>
    {
      selectTab === "Home" ? <PostList/> :<CreatePost/>
    }
    <Footer/>
    </div>
    </div>
    </PostListProvider>
  )
}

export default App
