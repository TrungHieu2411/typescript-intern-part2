import React, { useState } from "react";
import "../assets/style.css";
import { Button, Form, Input, Select } from "antd";
import Header from "../components/Header";

function CompletePayStore() {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleButtonClick = () => {
    setShowOptions(!showOptions);
  };

  const handleOptionSelect = (value: any) => {
    setSelectedOption(value);
    setShowOptions(false);
  };
  //-----------

  return (
    <div style={{ background: "#FF7F0E", height: 793 }}>
      <Header />
      <div className="row bg">
        <div>
          <h1
            className="titleCompele text-white fw-bold"
            style={{ fontSize: 70 }}
          >
            Thanh toán thành công
          </h1>
        </div>
        <img
          className="cardComplete"
          style={{ width: 1100, height: 420 }}
          src="../image/completePayStore/cardComplete.png"
          alt=""
        />
        <img
          className="cardComplete2"
          style={{ width: 1100, height: 420 }}
          src="../image/completePayStore/cardComplete2.png"
          alt=""
        />
        <img
          className="cardComplete3"
          style={{ width: 1085, height: 410 }}
          src="../image/completePayStore/cardComplete3.png"
          alt=""
        />
        <img
          className="cardComplete4"
          style={{ width: 1075, height: 400 }}
          src="../image/completePayStore/cardComplete4.png"
          alt=""
        />
        <img
          className="alvinArnold"
          style={{ width: 270, height: 410 }}
          src="../image/completePayStore/alvin_Arnold.png"
          alt=""
        />
        <div>
          <div className="row buttonComplete">
            <div className="col">
              <Button
                href="/paystore/complete"
                className="custom-button"
                style={{ width: 120, height: 30, background: "#FF000A" }}
              >
                <span className="fw-bold text-white">Tải vé</span>
              </Button>
            </div>
            <div className="col">
              <Button
                href="/paystore/complete"
                className="custom-button"
                style={{ width: 120, height: 30, background: "#FF000A" }}
              >
                <span className="fw-bold text-white">Gửi Email</span>
              </Button>
            </div>
          </div>
        </div>
        <div>
          <div className="row cardCompletePayStore px-5">
            <Button
              className="d-flex button btn me-2"
              style={{ width: 40, height: 40, background: "#FFDE32", marginTop: 165 }}
              onClick={handleButtonClick}
            >
              <img src="../image/event/arrowLeft.png" alt="ArrowDown" />
            </Button>
            <div className="col">
              <div className="card" style={{ width: 200, height: 330, borderRadius: 10 }}>
                <img
                  src="../image/completePayStore/qr.png"
                  className="card-img-top pt-4 px-5"
                  alt="..."
                />
                <div className="card-body text-center">
                  <h5 className="card-title">ALT20210501</h5>
                  <span className="card-text textPay">VÉ CỔNG</span>
                  <div className=" ">
                    <span>
                      ---
                    </span>
                  </div>
                  <p style={{fontSize: 10}}>
                    <span>Ngày sử dụng: 31/05/2021</span>
                  </p>
                 <img src="../image/completePayStore/tick.png" className="tick" alt="" />
                </div>
              </div>
            </div>
           
            <div className="col">
              <div className="card" style={{ width: 200, height: 330, borderRadius: 10 }}>
                <img
                  src="../image/completePayStore/qr.png"
                  className="card-img-top pt-4 px-5"
                  alt="..."
                />
                <div className="card-body text-center">
                  <h5 className="card-title">ALT20210501</h5>
                  <span className="card-text textPay">VÉ CỔNG</span>
                  <div className=" ">
                    <span>
                      ---
                    </span>
                  </div>
                  <p style={{fontSize: 10}}>
                    <span>Ngày sử dụng: 31/05/2021</span>
                  </p>
                 <img src="../image/completePayStore/tick.png" className="tick" alt="" />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ width: 200, height: 330, borderRadius: 10 }}>
                <img
                  src="../image/completePayStore/qr.png"
                  className="card-img-top pt-4 px-5"
                  alt="..."
                />
                <div className="card-body text-center">
                  <h5 className="card-title">ALT20210501</h5>
                  <span className="card-text textPay">VÉ CỔNG</span>
                  <div className=" ">
                    <span>
                      ---
                    </span>
                  </div>
                  <p style={{fontSize: 10}}>
                    <span>Ngày sử dụng: 31/05/2021</span>
                  </p>
                 <img src="../image/completePayStore/tick.png" className="tick" alt="" />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ width: 200, height: 330, borderRadius: 10 }}>
                <img
                  src="../image/completePayStore/qr.png"
                  className="card-img-top pt-4 px-5"
                  alt="..."
                />
                <div className="card-body text-center">
                  <h5 className="card-title">ALT20210501</h5>
                  <span className="card-text textPay">VÉ CỔNG</span>
                  <div className=" ">
                    <span>
                      ---
                    </span>
                  </div>
                  <p style={{fontSize: 10}}>
                    <span>Ngày sử dụng: 31/05/2021</span>
                  </p>
                 <img src="../image/completePayStore/tick.png" className="tick" alt="" />
                </div>
              </div>
            </div>
            <Button
              className="d-flex button btn ms-2"
              style={{ width: 40, height: 40, background: "#FFDE32",  marginTop: 165 }}
              onClick={handleButtonClick}
            >
              <img src="../image/event/arrowRight.png" alt="ArrowDown" />
            </Button>
          </div>
          <div>
          <span className="titleTicket">Số lượng: 12 vé</span>
          </div>
          <div>
          <span className="titleTicket2">Trang 1/3</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletePayStore;
