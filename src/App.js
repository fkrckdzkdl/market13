import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ItemList from './components/itemList/ItemList';
import Board from './components/board/Board';
import Member from './components/member/Member';
import WishList from './components/wishList/WishList';
import Bottom from './components/frame/Bottom';
import Header from './components/frame/Header';
import MyNavbar from './components/frame/MyNavbar';


function App() {
  return (
    <div className="App">
      
      <Header />
      <MyNavbar />
      <BrowserRouter>
				<Routes>
					
          <Route path="/itemlist" element={<ItemList />}></Route>
          <Route path="/board" element={<Board />}></Route>
          <Route path="/member" element={<Member />}></Route>
          <Route path="/wishlist" element={<WishList />}></Route>
          
				</Routes>
			</BrowserRouter>
      <div id='bot'>
      <Bottom />
      </div>
        
    </div>
  );
}

export default App;
