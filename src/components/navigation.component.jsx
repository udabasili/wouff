import React,{useCallback} from 'react';

export default function Navigation() {
  const hideNav = useCallback(
    () => {
      let checkBox = document.querySelector(".navigation__checkbox");
      checkBox.checked = false;
      
    },
  )

  return (
    <div className="navigation">
        <input type="checkbox" className="navigation__checkbox" name="" id="navigation__toggle"/>
        <label htmlFor="navigation__toggle" className="navigation__button" >
            <span className="navigation__icon">&nbsp;</span>
        </label>
        <div className="navigation__background"></div>
        <nav  className="navigation__nav">
            <ul className="navigation__list">
                <li onClick={hideNav} className="navigation__item">
                  <a href="#about" class="navigation__link">About</a></li>
                <li onClick={hideNav} className="navigation__item">
                  <a href="#service" class="navigation__link">Services</a></li>
                <li onClick={hideNav} className="navigation__item">
                  <a href="#staff" class="navigation__link">Staff</a></li>
                <li className="navigation__item">
                  <a href="#location" class="navigation__link">Locations</a></li>
                <li className="navigation__item"><a href="#contact" class="navigation__link">Contact</a></li>
            </ul>
        </nav>
    </div>
  );
}
