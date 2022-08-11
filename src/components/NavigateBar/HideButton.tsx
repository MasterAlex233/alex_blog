import { AppStateType } from "@/rematch/AppState";
import './style.scss';

interface HideButtonProps {
  AppState: AppStateType
  onClick: () => void
}

function HideButton(props: HideButtonProps) {

  if (props.AppState.scroll > 400) {
    return (
      <div className='nav-icon-mini' onClick={props.onClick}>
        <i className='iconfont icon-liebiaoshitucaidan' />
      </div>
    )
  }

  return (
    <div className='nav-icon' onClick={props.onClick}>
      <i className='iconfont icon-liebiaoshitucaidan' />
      <div className='nav-icon_test'>MENU</div>
    </div>
  );
}

export default HideButton;