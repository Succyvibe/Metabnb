import React from "react";
import ReactDOM from "react-dom";
import img from "../../src/imgs/image-66.png";
import img2 from "../../src/imgs/image-69.png";
import vector from "../../src/imgs/vector-10.png";
import closeBtn from "../../src/imgs/x.png";

const Modal = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay fixed top-0 left-0 z-[1040] w-screen h-screen bg-black opacity-50" />
          <div
            className="modal-wrapper fixed top-0 left-0 z-[1050] w-full h-full overflow-x-hidden overflow-y-auto outline-none"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal z-[100] bg-white relative mt-32 mx-auto rounded-2xl max-w-[600px] ">
              <div className=" py-[1rem] px-[2rem]">
                <div className="modal-header flex justify-between">
                  <h1 className="text-[24px]">Connect Wallet</h1>
                  <button
                    type="button"
                    className="modal-close-button text-[2rem] font-[700] leading-1 text-black opacity-30 cursor-pointer border-none"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={hide}
                  >
                    <img src={closeBtn} alt="" />
                  </button>
                </div>
              </div>

              <hr />
              <div className="p-[2rem]">
                <p className="mb-3">Choose your preffered wallet</p>
                <div className="flex flex-col space-y-3">
                  <div className="flex justify-between border border-1 rounded-xl items-center py-[0.5rem] px-[1rem] hover:bg-gray-200 transition">
                    <div className="flex items-center space-x-2">
                      <img src={img} alt="" />
                      <p className="text-[24px]">MetaMask</p>
                    </div>
                    <div>
                      <img src={vector} alt="" />
                    </div>
                  </div>
                  <div className="flex justify-between border border-1 rounded-xl items-center py-[0.5rem] px-[1rem] hover:bg-gray-200 transition">
                    <div className="flex items-center space-x-2">
                      <img src={img2} alt="" />
                      <p className="text-[24px]">MetaMask</p>
                    </div>
                    <div>
                      <img src={vector} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;
