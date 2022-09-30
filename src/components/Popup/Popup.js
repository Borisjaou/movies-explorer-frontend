import React from 'react';
import acceptedImage from '../../images/Unionaccepted.svg';
import './Popup.css';

function Popup(props) {
  return (
    <div
      className={
        `popup ${props.isOpen ? 'popup_is-opened' : null}`
      }
    >
      <div className='tooltip__popup'>
        <img
          className='popup__image'
          src={acceptedImage}
          alt='Сохранено'
        />
        <h2 className='popup__text'>{'Сохранено'}</h2>
      </div>
    </div >
  );
}
export default Popup;
