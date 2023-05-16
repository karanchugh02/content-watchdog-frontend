import React, { useState } from 'react';

const Calculator: React.FC = () => {
  const [textAmount, setTextAmount] = useState<number>(0);
  const [imageAmount, setImageAmount] = useState<number>(0);
  const [videoAmount, setVideoAmount] = useState<number>(0);

  const totalAmount = textAmount + imageAmount + videoAmount;

  const textAmountInputHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTextAmount(Number(event.target.value) * 1.5);
  };

  const imageAmountInputHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setImageAmount(Number(event.target.value) * 2);
  };

  const videoAmountInputHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setVideoAmount(Number(event.target.value) * 3);
  };

  if (textAmount < 0 || imageAmount < 0 || videoAmount < 0) {
    alert('Please enter a valid amount');
    setTextAmount(0);
    setImageAmount(0);
    setVideoAmount(0);
  }

  const validateAmount = () => {
    if (textAmount + videoAmount + imageAmount < 100) {
      alert('Total Amount should be more than 100');
    } else {
      alert('You are good to pay');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-cover bg-blur-lg bg-center bg-black text-white ">
      <div className="text-center border-2 border-white p-20">
        <h3 className="text-xl mb-4 flex justify-around">
          Text requests :
          <span>
            <input
              onChange={textAmountInputHandler}
              type="number"
              placeholder="No of requests"
              min="0"
              className='text-black'
            />
          <span>*1.5</span>
          </span>
        </h3>

        <br />
        <div>
          <h3 className="text-xl mb-4 flex justify-around">
            <span>Image requests : </span>
            <span>
              <input
                onChange={imageAmountInputHandler}
                type="number"
                placeholder="No of requests"
                min="0"
                className='text-black'
              />
            <span>*2</span>{' '}
            </span>{' '}
          </h3>
          <br />
        </div>
        <div>
          <h3 className="text-xl flex justify-around">
            <span>Video requests : </span>
            <span>
              <input
                onChange={videoAmountInputHandler}
                type="number"
                placeholder="No of requests"
                min="0"
                className='text-black'
              />
            <span>*3</span>
            </span>{' '}
          </h3>
          <br />
        </div>
        <div className="text-center my-2">
          <strong className="text-2xl">
            Total Amount : INR {textAmount + videoAmount + imageAmount}
          </strong>
          <br />
          <button
            onClick={validateAmount}
            className=" my-4 py-2 px-4 text-2xl border-2 border-white hover:border-black hover:bg-white hover:text-black font-bold rounded-full "
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
