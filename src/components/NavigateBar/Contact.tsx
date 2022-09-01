import { RootState, Dispatch } from "@/rematch/store";
import { useCallback } from "react";
import { Motion, spring, presets } from "react-motion"
import { ContactType as ReduxContactType } from '@/rematch/navigateBar'
import './style.scss';

interface ContactType {
  data: ReduxContactType[]
}

function Contact(props: ContactType) {

  const renderContactValue = useCallback((item: ReduxContactType) => {
    if (item.hoverImageSrc) {

    }
    if (item.link) {
      return <a href={item.link} target="_blank" rel="noreferrer">{item.value}</a>
    }
    return item.value
  }, [])

  return (
    <div className='contact'>
      <div className='contact__name'>
        {props.data.map(item =>
          <div key={item.name} className='contact__name-item'>
            <div className='contact__name-item--text'>{item.name.split('').map((nameStr, index) => <span key={index}>{nameStr}</span>)}</div>
            <div className='contact__name-item--icon'>:</div>
          </div>
        )}
      </div>
      <div className='contact__value'>
        {props.data.map(item => <div key={item.name} className='contact__value-item'>{renderContactValue(item)}</div>)}
      </div>
    </div>
  );
}

export default Contact;