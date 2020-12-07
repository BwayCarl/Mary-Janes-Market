import React, { useState, useEffect } from 'react';
import "../styles/AgeModal.css"
import { useStoreContext } from "../utils/GlobalState";
import { SET_CART_ID } from '../utils/Actions.js'

const Modal = () => {
  const [state, dispatch] = useStoreContext();
  console.log(state, "from the agemodal.js")

  const [isShown, setIsShown] = useState(false);
  // eslint-disable-next-line
  const showModal = () => {
    setIsShown(true);
  };


  const closeModal = () => {
    dispatch({
      id: Math.floor(Math.random() * 100000000000) + 1 ,
      type: SET_CART_ID
    })

    setIsShown(false);
    
  };

  const dynammicModalClass = () => (isShown ? { display: 'block' } : '');

  useEffect(() => {
    if (!sessionStorage.popupModal) {
      const timer = setTimeout(() => {
        setIsShown(true);
        sessionStorage.popupModal = 1;
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  return isShown ? (
    <div className="modal" style={dynammicModalClass()} id="channelModal">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            {/* Age Modal Title */}
            <h5 className="col-12 modal-title text-light text-center">Age Verification</h5>
          </div>

          <div className="modal-body">
            <img src="./assets/Image/mj-modal-dark-bg.jpg" alt="marijuana-dark-bg" />
              <div className="row">
                <div className="col-12">
                {/* Age verification text */}
                  <p className="text-light modal-text"><br></br>
                  Mary Jane's Market products are only sold for use in New Jersey where the sale and consumption of such products is soon to be legal. </p>
              
                  <p className="text-light modal-text">I certify that I am over the age of 21 and will comply with the above statement.</p>
              </div>
            </div>
          </div>

          <div className="modal-footer">
            {/* Over 21 Button */}
            <button onClick={closeModal} type="button" className="btn btn-success btn-block">
                  I am over 21.{' '}
            </button>
            {/* Too Young Button */}
            <button className="btn btn-danger btn-block"><a className="modal-link" href="https://norml.org/principles/">
            I'll come back when I'm old enough.{' '}
            </a></button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;