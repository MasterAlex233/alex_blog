import { useEffect, useCallback } from "react";
import _ from 'lodash'
import { Routes, Route } from "react-router-dom"
import { NavigateBar } from "@/components"
import { BasicSkeleton } from "@/components/LayoutSkeleton"
import Home from '@/page/Home'
import Article from '@/page/Article'
import { useDispatch } from "react-redux";
import { Dispatch } from "./rematch/store";
import "./App.scss"
function App() {

  const dispatch = useDispatch<Dispatch>()

  useEffect(() => {
    window.addEventListener('resize', _.debounce(onResize, 50))
    window.addEventListener('scroll', _.debounce(onScroll, 50))
  }, [])

  const onResize = useCallback(() => {
    dispatch.AppState.setIsMobile(window.innerWidth < 768)
  }, [])

  const onScroll = useCallback(() => {
    dispatch.AppState.setScroll(window.scrollY)
  }, [])

  return (
    <div className="App">
      <NavigateBar />
      <Routes >
        <Route path="/" element={<BasicSkeleton />} >
          <Route path="home" element={<Home />} />
          <Route path="article/:articleId" element={<Article />} />
        </Route>
      </Routes>
    </div >
  );
}

export default App;
