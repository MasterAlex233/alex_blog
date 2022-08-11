import { RootState, Dispatch } from "@/rematch/store";
import { Outlet } from "react-router-dom"
import Words from "react-words"
import { useEffect, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import './style.scss'

export interface ArticleItemProps {
  // id: string,
  // editTime: string,
  // description: string,
  // abstract: string,
}


function ArticleItem(props: { data: ArticleItemProps }) {

  return (
    <div className='home-article-item'>
      <div className='home-article-item__title'>数据采集与预处理课设——人在回路的气温数据动态处理与可视化</div>
      <div className='home-article-item__description'>
        <i className='iconfont icon-shijian'/> 2022-08-04 09:22:34
      </div>
      <div className='home-article-item__abstract'>摘要： 数据采集与预处理课设——人在回路的气温数据动态处理与可视化 摘要 本次研究旨在通过python网络爬虫技术，获得中国各城市近90天的气象数据，运用HTML、Xpath、jieba、counter等技术对数据进行处理，绘制动态可视化图、词云图等，结合@chenjiandongx等人提供的pyechar</div>
      <span className='home-article-item__button'>阅读全文 »</span>
    </div>
  );
}

export default ArticleItem;