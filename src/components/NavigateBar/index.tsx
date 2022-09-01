import { RootState, Dispatch } from "@/rematch/store";
import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { NavigateBarDataType } from "@/rematch/navigateBar"
import fetch from '@/utils/fetch'
import { Motion, spring } from "react-motion"
import HideButton from "./HideButton"
import Contact from "./Contact"
import './style.scss';

function NavigateBar() {

  const navigateBar = useSelector((state: RootState) => state.navigateBar)
  const AppState = useSelector((state: RootState) => state.AppState)
  const dispatch = useDispatch<Dispatch>()

  useEffect(() => {
    fetch.get<NavigateBarDataType>('userInfo')
      .then(data => {
        dispatch.navigateBar.setNavigateBarData({ ...data, header: '' })
      })
  }, [dispatch.navigateBar])

  //关闭弹窗
  const handleClickClose = useCallback(() => {
    dispatch.navigateBar.setIsShow(false)
  }, [dispatch])

  //打开弹窗 
  const handleClickOpen = useCallback(() => {
    dispatch.navigateBar.setIsShow(true)
  }, [dispatch])

  return (
    <>
      <HideButton onClick={handleClickOpen} AppState={AppState} />
      <Motion style={{ right: spring(navigateBar.isShow ? 0 : -280), opacity: spring(navigateBar.isShow ? 0.4 : 0) }}>
        {interpolatingStyle =>
          <>
            <div className='nav' style={{ left: `${interpolatingStyle.right}px` }}>
              <div className='nav__background'>
                <img className='nav__background--image' src={require('../../static/images/fe4a4d1f8c94cbb0f79dcfc31880446bd9128f00.gif')} alt='' />
                <div className='nav__background--gradual' />
                <div className='nav__body' style={{ left: `${interpolatingStyle.right}px` }}>
                  <i className='iconfont icon-guanbi' onClick={handleClickClose} />
                  <div className='nav__body__header'>
                    <img className='nav__body__header--image' src={navigateBar.data.header} alt='' />
                    <div className='nav__body__header--border' />
                  </div>
                  <Contact data={navigateBar.data.contacts} />
                </div>
              </div>
            </div>
            <div
              className='nav-mark'
              style={{ opacity: interpolatingStyle.opacity, display: navigateBar.isShow ? 'block' : 'none' }}
              onClick={handleClickClose}
            />
          </>
        }
      </Motion>
    </>
  );
}

export default NavigateBar;