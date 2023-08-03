import React, { useState } from "react";
import "../assets/style.css";
import { Button, Form, Input, Select } from "antd";
import Header from "../components/Header";

function DetailEvent() {
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
            className="titleEventDetail text-white fw-bold"
            style={{ fontSize: 70 }}
          >
            Sự kiện 1
          </h1>
        </div>

        <img className="bgEvent" src="../image/event/eventBg.png" alt="" />
        <img
          className="bgLeftEvent"
          src="../image/event/leftEvent.png"
          alt=""
          style={{ width: 370, height: 200 }}
        />
        <img
          className="bgRightEvent"
          src="../image/event/rightEvent.png"
          alt=""
          style={{ width: 380, height: 200 }}
        />

        <img
          className="cardEventDetail"
          src="../image/event/cardEventDetail.png"
          alt=""
          style={{ width: 1130, height: 420 }}
        />
        <img
          className="cardEventDetail2"
          src="../image/event/cardEventDetail2.png"
          alt=""
          style={{ width: 1130, height: 410 }}
        />
        <img
          className="cardEventDetail3"
          src="../image/event/cardEventDetail3.png"
          alt=""
          style={{ width: 1120, height: 400 }}
        />
        <div>
          <div className="row cardEventDetail px-5 mt-5">
            {/* //---  */}
            <div className="col-3">
              <img
                src="../image/event/rectangle2.png"
                style={{ width: 240, height: 220, borderRadius: 20 }}
                alt=""
              />
              <p style={{ width: 240 }}>
                <div className="d-flex align-items-center mt-3">
                  <img src="../image/event/calendar2.png" alt="" />
                  <span style={{ fontSize: 12 }} className="ps-1">
                    30/05/2022 - 02/06/2022
                  </span>
                </div>
                <p className="mb-0">Đầm sen Park</p>
                <h4 style={{ color: "#FA7D09", fontWeight: "bold" }}>
                  <span>25.000</span> VNĐ
                </h4>
              </p>
            </div>
            {/* //---  */}
            <div className="col-3">
              <p style={{ textAlign: "justify", fontSize: 12, width: 240 }}>
                <span
                  style={{
                    color: "#FA7D09",
                    fontSize: 30,
                    fontWeight: "bold",
                  }}
                >
                  Lorem Ipsum
                </span>{" "}
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic sdsd
                typesetting, remaining cssa essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, of Lorem Ipsum.
              </p>
            </div>
            {/* //---  */}
            <div className="col-3">
              <img
                src="../image/event/rectangle2.png"
                style={{ width: 240, height: 150, borderRadius: 20 }}
                alt=""
                className="mb-3"
              />
              <p style={{ textAlign: "justify", width: 240, fontSize: 12 }}>
                <span>Lorem Ipsum</span> Lorem Ipsum is not simply random text.
                It has roots in a piece of classical Latin literature from 45
                BC, making it over 2000 years old. words, consectetur, from a
                Lorem Ipsum passage, and going through the cites of the word in
                classical literature,
              </p>
            </div>
            {/* //---  */}
            <div className="col-3">
              <p style={{ textAlign: "justify", width: 240, fontSize: 12 }}>
                <span>Lorem Ipsum</span> Lorem Ipsum is not simply random text.
                It has roots in a piece of classical Latin literature from 45
                BC, making it over 2000 years old. words, consectetur, from a
                Lorem Ipsum passage, and going through the cites of the word in
                classical literature,
              </p>
              <img
                src="../image/event/rectangle2.png"
                alt=""
                style={{ width: 240, height: 150, borderRadius: 20 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailEvent;
