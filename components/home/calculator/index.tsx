import React, { useState } from "react";

const Calculator: React.FC = () => {
  const [textAmount, setTextAmount] = useState<number>(0);
  const [imageAmount, setImageAmount] = useState<number>(0);
  const [videoAmount, setVideoAmount] = useState<number>(0);

  const totalAmount = textAmount + imageAmount + videoAmount;

  const textAmountInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextAmount(Number(event.target.value) * 1.5);
  };

  const imageAmountInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImageAmount(Number(event.target.value) * 2);
  };

  const videoAmountInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVideoAmount(Number(event.target.value) * 3);
  };

  if (textAmount < 0 || imageAmount < 0 || videoAmount < 0) {
    alert("Please enter a valid amount");
    setTextAmount(0);
    setImageAmount(0);
    setVideoAmount(0);
  }

  const validateAmount = () => {
    if (textAmount + videoAmount + imageAmount < 100) {
      alert("Total Amount should be more than 100");
    } else {
      alert("You are good to pay");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-cover bg-blur-lg bg-center bg-gray-300">
      <div className="text-center">
        <h3 className="text-gray-900">
          Text requests :
          <span>
            {" "}
            <input
              className="text-gray-900"
              onChange={textAmountInputHandler}
              type="number"
              placeholder="No of requests"
              min="0"
            />
          </span>
          <span>*1.5</span>
        </h3>

        <br />
        <div>
          <h3 className="text-gray-900">
            Image requests :{" "}
            <span>
              <input
                className="text-gray-950"
                onChange={imageAmountInputHandler}
                type="number"
                placeholder="No of requests"
                min="0"
              />
            </span>{" "}
            <span>*2</span>{" "}
          </h3>
          <br />
        </div>
        <div>
          <h3 className="text-gray-900">
            Video requests :{" "}
            <span>
              <input
                className="text-gray-950"
                onChange={videoAmountInputHandler}
                type="number"
                placeholder="No of requests"
                min="0"
              />
            </span>{" "}
            <span>*3</span>
          </h3>
          <br />
        </div>
        <div className="text-center">
          <strong className="text-gray-900">
            Total Amount : INR {textAmount + videoAmount + imageAmount}
          </strong>
          <br />
          <button
            onClick={validateAmount}
            className=" m-5 border-2 border-white hover:border-black hover:bg-white hover:text-black font-bold px-2 py-2 rounded-full "
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
