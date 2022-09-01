import { RootState, Dispatch } from "@/rematch/store";
import { Outlet } from "react-router-dom"
import Words from "react-words"
import { useEffect, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import './style.scss'

export interface ArticleItemProps {
  id: string,
  title: string,
  editTime: string,
  abstract: string,
  content: string,
}


function ArticleItem(props: ArticleItemProps) {

  return (
    <div className='home-article-item'>
      <div className='home-article-item__title'>{props.title}</div>
      <div className='home-article-item__description'>
        <i className='iconfont icon-shijian' /> {props.editTime}
      </div>
      <div className='home-article-item__abstract'>摘要： {props.abstract}</div>
      <span className='home-article-item__button'>阅读全文 »</span>
    </div>
  );
}

export default ArticleItem;