import { RootState, Dispatch } from "@/rematch/store";
import { Outlet } from "react-router-dom"
import Words from "react-words"
import { useEffect, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import './style.scss'

function BasicSkeleton() {

  const navigateBar = useSelector((state: RootState) => state.navigateBar)
  const AppState = useSelector((state: RootState) => state.AppState)
  const dispatch = useDispatch<Dispatch>()

  const [show, setIsShow] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => {
      setIsShow(true)
    }, 1000)
  })

  return (
    <div className='basic-skeleton'>
      <div className='basic-skeleton__header'>
        <div className='basic-skeleton__header__background'>
          {/* <img className='basic-skeleton__header__background--image' src={require('../../static/images/bd39a71f22954ff756542b8088e4f053cc4733b6.gif')} alt='' /> */}
        </div>
        <div>
          <Words show={show}>uysegufygeuifgesugeuy</Words>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default BasicSkeleton;