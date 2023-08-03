import React, { useState } from "react";
import "../assets/style.css";
import { Button, Form, Input, Select } from "antd";
import Header from "../components/Header";

function Event() {
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
    <div style={{ background: "#FF7F0E", height: 789 }}>
      <Header />
      <div className="row bg">
        <div>
          <h1
            className="titleEvent text-white fw-bold"
            style={{ fontSize: 70 }}
          >
            Sự kiện nổi bật
          </h1>
        </div>

        <img className="bgEvent px-5" src="../image/event/eventBg.png" alt="" />
        <img
          className="bgLeftEvent"
          src="../image/event/leftEvent.png"
          alt=""
          style={{ width: 380, height: 200 }}
        />
        <img
          className="bgRightEvent"
          src="../image/event/rightEvent.png"
          alt=""
          style={{ width: 400, height: 220 }}
        />
        <div>
          <div className="row cardEvent px-5">
            <Button
              className="d-flex button btn me-2"
              style={{ width: 40, height: 40, background: "#FFDE32", marginTop: 165 }}
              onClick={handleButtonClick}
            >
              <img src="../image/event/arrowLeft.png" alt="ArrowDown" />
            </Button>
            <div className="col">
              <div className="card" style={{ width: 275, height: 380, borderRadius: 20 }}>
                <img
                  src="../image/event/rectangle.png"
                  className="card-img-top"
                  alt="..."
                  style={{borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
                />
                <div className="card-body">
                  <h5 className="card-title">Sự kiện 1</h5>
                  <span className="card-text">Đầm sen Park</span>
                  <div className="d-flex align-items-center my-1 pb-2">
                    <img src="../image/event/calendar2.png" alt="" />
                    <span style={{ fontSize: 12 }} className="ps-1">
                      30/05/2022 - 02/06/2022
                    </span>
                  </div>
                  <h5 style={{ color: "#FA7D09", fontWeight: "bold" }}>
                    <span>25.000</span> VNĐ
                  </h5>
                  <Button
                    href="#"
                    className="custom-button"
                    style={{
                      width: 120,
                      height: 25,
                      background: "#FF000A",
                    }}
                  >
                    <span className="fw-bold text-white">Xem chi tiết</span>
                  </Button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ width: 275, height: 380, borderRadius: 10}}>
                <img
                  src="../image/event/rectangle2.png"
                  className="card-img-top"
                  alt="..."
                  style={{borderTopLeftRadius: 10, borderTopRightRadius: 10}}
                />
                <div className="card-body">
                  <h5 className="card-title">Sự kiện 1</h5>
                  <span className="card-text">Đầm sen Park</span>
                  <div className="d-flex align-items-center my-1 pb-2">
                    <img src="../image/event/calendar2.png" alt="" />
                    <span style={{ fontSize: 12 }} className="ps-1">
                      30/05/2022 - 02/06/2022
                    </span>
                  </div>
                  <h5 style={{ color: "#FA7D09", fontWeight: "bold" }}>
                    <span>25.000</span> VNĐ
                  </h5>
                  <Button
                    href="#"
                    className="custom-button"
                    style={{
                      width: 120,
                      height: 25,
                      background: "#FF000A",
                    }}
                  >
                    <span className="fw-bold text-white">Xem chi tiết</span>
                  </Button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ width: 275, height: 380, borderRadius: 10}}>
                <img
                  src="../image/event/rectangle.png"
                  className="card-img-top"
                  alt="..."
                  style={{borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                />
                <div className="card-body">
                  <h5 className="card-title">Sự kiện 1</h5>
                  <span className="card-text">Đầm sen Park</span>
                  <div className="d-flex align-items-center my-1 pb-2">
                    <img src="../image/event/calendar2.png" alt="" />
                    <span style={{ fontSize: 12 }} className="ps-1">
                      30/05/2022 - 02/06/2022
                    </span>
                  </div>
                  <h5 style={{ color: "#FA7D09", fontWeight: "bold" }}>
                    <span>25.000</span> VNĐ
                  </h5>
                  <Button
                    href="#"
                    className="custom-button"
                    style={{
                      width: 120,
                      height: 25,
                      background: "#FF000A",
                    }}
                  >
                    <span className="fw-bold text-white">Xem chi tiết</span>
                  </Button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ width: 275, height: 380, borderRadius: 10 }}>
                <img
                  src="../image/event/rectangle.png"
                  className="card-img-top"
                  alt="..."
                  style={{borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                />
                <div className="card-body">
                  <h5 className="card-title">Sự kiện 1</h5>
                  <span className="card-text">Đầm sen Park</span>
                  <div className="d-flex align-items-center my-1 pb-2">
                    <img src="../image/event/calendar2.png" alt="" />
                    <span style={{ fontSize: 12 }} className="ps-1">
                      30/05/2022 - 02/06/2022
                    </span>
                  </div>
                  <h5 style={{ color: "#FA7D09", fontWeight: "bold" }}>
                    <span>25.000</span> VNĐ
                  </h5>
                  <Button
                    href="/event/detail"
                    className="custom-button"
                    style={{
                      width: 120,
                      height: 25,
                      background: "#FF000A",
                    }}
                  >
                    <span className="fw-bold text-white">Xem chi tiết</span>
                  </Button>
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
        </div>
      </div>
    </div>
  );
}

export default Event;
