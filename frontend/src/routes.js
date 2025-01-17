import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "components/Header";
import Footer from "components/Footer";
import Home from "pages/Home";
import Title from "pages/Title";
import Categories from "pages/Categories";
import Reader from "pages/Reader";
import Producer from "pages/Producer";
import Blog from "pages/Blog";
import About from "pages/About";
import Search from "pages/Search";
import Plans from "pages/Plans";
import Account from "pages/Account";
import Send from "pages/Send";
import NotFound from "pages/NotFound";
import UserPosts from "pages/Blog/components/UserPosts";
import CreateAccount from "pages/CreateAccount";

export default function AppRoutes() {
  const profile = global.localStorage.getItem("profile");

  return(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/quadrinho/:id/:chap" element={<Title />} />
        <Route path="/catalogo" element={<Categories />} />
        <Route path="/leitor" element={<Reader />} />
        <Route path="/quadrinista" element={<Producer />} />
        <Route path="/comunidade" element={<Blog />} />
        <Route path="/comunidade/minhas-resenhas" element={<UserPosts />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/planos" element={<Plans />} />
        <Route 
          path="/perfil" 
          element={
            profile === "leitor" ? 
            <Reader /> :
            <Producer />
          } 
        />
        <Route path="/enviar" element={<Send />} />
        <Route path="/criar-conta" element={<CreateAccount />} />
        <Route path="/search/:search" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}