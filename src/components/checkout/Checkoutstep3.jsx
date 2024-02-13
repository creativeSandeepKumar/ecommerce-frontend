import React, { useCallback, useEffect, useState } from "react";
import Payviaupi from "./step3/Payviaupi";
import COD from "./step3/COD";
import Payviacard from "./step3/Payviacard";
import Payviawallet from "./step3/Payviawallet";

const paymentMethodOptions = [
  {
    amount: "₹1284",
    paymentmethod: "Pay Via UPI",
    payurl: "payviaupi",
    paymentIcons:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRPHfEFRPALAppgWyl6Y-3H7NKIhbhzzL_ujBE3GmGLZ4T8Z19A",
  },
  {
    amount: "₹1384",
    paymentmethod: "Cash On Delivery",
    payurl: "cod",
  },
  {
    amount: "₹1299",
    paymentmethod: "Pay Via Card",
    payurl: "payviacard",
    paymentIcons:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSeOGVjf5UjEz03_1A_MNUrDpIaooXpv_fO8T1dKqRogly9YPK_",
  },
  {
    amount: "₹1299",
    paymentmethod: "Pay Via Wallet",
    payurl: "payviawallet",
    paymentIcons:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRPHfEFRPALAppgWyl6Y-3H7NKIhbhzzL_ujBE3GmGLZ4T8Z19A",
  },
  {
    amount: "₹1299",
    payurl: "netbanking",
    paymentmethod: "Pay Via Netbanking/Amex",
  },
];

const Checkoutstep3 = ({ topnumber, setTopnumber }) => {
  const [paymentOptions, setPaymentOptions] = useState({
    payviaupi: false,
    cod: false,
    payviacard: false,
    payviawallet: false,
    netbanking: false,
  });

  const handlePaymentOptions = useCallback(
    (option) => {
      if (topnumber === "top3") {
        setTopnumber("");
      }
      setPaymentOptions((prevData) => ({
        [option]: !prevData[option],
      }));
    },
    [setPaymentOptions, setTopnumber]
  );

  useEffect(() => {
    if (topnumber === "top3") {
      setPaymentOptions({
        netbanking: false,
      });
    }
  }, [topnumber]);

  return (
    <div className="font-[Raleway] text-white max-h-60 overflow-y-auto px-4 pb-4">

      {Object.values(paymentOptions).every((item) => !item) && (
        <section>
          <p className="text-xs text-gray-700 text-center">
            Please select payment method to complete the order
          </p>
          <p className="font-medium text-center text-sm">
            Extra ₹15 discount on UPI
          </p>
          <div className="flex flex-wrap gap-3 items-center justify-center">
            {paymentMethodOptions.map((item, index) => (
              <aside
              onClick={(e) => handlePaymentOptions(item.payurl)}
                key={index}
                className="flex w-5/12 bg-gray-900 px-3 py-2 rounded-md justify-between items-center"
              >
                <div>
                  <h4 className="font-semibold">{item.amount}</h4>
                  <h5 className="text-sm font-semibold">
                    {item.paymentmethod}
                  </h5>
                </div>
                <div>
                  {item.paymentIcons && (
                    <img
                      src={item.paymentIcons}
                      alt="payment icon"
                      className="max-w-16"
                    />
                  )}
                </div>
              </aside>
            ))}
          </div>
          <p className="text-xs text-gray-700 text-center pt-3">
            COD fee of Rs.49 is added to Cash on Delivery
          </p>
        </section>
      )}
      {paymentOptions.payviaupi && (
        <Payviaupi/>
      )}
      {paymentOptions.cod && (
        <COD/>
      )}
      {paymentOptions.payviacard && (
        <Payviacard/>
      )}
      {paymentOptions.payviawallet&& (
        <Payviawallet/>
      )}
    </div>
  );
};

export default Checkoutstep3;
