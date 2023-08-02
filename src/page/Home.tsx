import React, { useState } from "react";
import "../assets/style.css";
import { Button, Form, Input, Select } from "antd";
import Header from "../components/Header";

function Home() {
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
      <div className="row bg" style={{ height: 750 }}>
        <img
          className="imgFixhair"
          style={{ width: 510, height: 250 }}
          src="../image/home/fixhair.png"
          alt=""
        />
        <img
          className="img18455"
          src="../image/home/18455.png"
          alt=""
          style={{ width: 125, height: 145 }}
        />
        <img
          className="imgCardRight"
          style={{ width: 400, height: 420 }}
          src="../image/home/cardRight.png"
          alt=""
        />
        <img
          className="imgCardRight2"
          style={{ width: 400, height: 420 }}
          src="../image/home/cardRight2.png"
          alt=""
        />
        <img
          className="imgCardRight3"
          style={{ width: 380, height: 400 }}
          src="../image/home/cardRight3.png"
          alt=""
        />
        <img
          className="imgCardRight4"
          style={{ width: 370, height: 395 }}
          src="../image/home/cardRight4.png"
          alt=""
        />
        <img
          className="imgCardRightTitle"
          style={{ width: 210, height: 50 }}
          src="../image/home/cardRightTitle.png"
          alt=""
        />
        <img
          className="imgCardRightTitle2"
          style={{ width: 205, height: 45 }}
          src="../image/home/cardRightTitle2.png"
          alt=""
        />
        
        <div>
          <div className="form-containerRight">
            <div className="row">
              <div className="col ms-2">
                <Select
                  className="ip custom-dropdown"
                  style={{ width: 270, height: 40 }}
                  value={selectedOption}
                  open={showOptions}
                  onSelect={handleOptionSelect}
                  placeholder="Chọn gói sử dụng"
                >
                  <Select.Option value="family" className="ip">
                    Gói gia đình
                  </Select.Option>
                  <Select.Option value="couple" className="ip">
                    Gói cặp đôi
                  </Select.Option>
                </Select>
              </div>
              <div className="col p-0">
                <Button
                  className="d-flex text-center button"
                  style={{ width: 40, height: 40, background: "#FFDE32" }}
                  onClick={handleButtonClick}
                >
                  <img src="../image/home/arrowDown.png" alt="ArrowDown" />
                </Button>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col ms-2">
                <Input
                  className="ip"
                  type="text"
                  style={{ width: 100, height: 40 }}
                  placeholder="Số lượng vé"
                />
              </div>
              <div className="col ps-0">
                <Input
                  className="ip"
                  type="text"
                  style={{ width: 158, height: 40 }}
                  placeholder="Ngày sử dụng"
                />
              </div>
              <div className="col p-0 ">
                <Button
                  className="d-flex text-center button"
                  style={{ width: 40, height: 40, background: "#FFDE32" }}
                >
                  <img src="../image/home/calendar.png" />
                </Button>
              </div>
            </div>
            <div className="row">
              <div className="col ms-2 mt-3">
                <Input
                  className="ip"
                  type="text"
                  style={{ width: 322, height: 40 }}
                  placeholder="Họ và tên"
                />
              </div>
            </div>
            <div className="row">
              <div className="col ms-2 mt-3">
                <Input
                  className="ip"
                  type="text"
                  style={{ width: 322, height: 40 }}
                  placeholder="Số điện thoại"
                />
              </div>
            </div>
            <div className="row">
              <div className="col ms-2 mt-3">
                <Input
                  className="ip"
                  type="text"
                  style={{ width: 322, height: 40 }}
                  placeholder="Địa chỉ email"
                />
              </div>
            </div>
            <div className="row">
              <div className="col ms-2 my-3 text-center">
                <Button
                  href="/paystore"
                  className="custom-button"
                  style={{ width: 250, height: 40, background: "#FF000A" }}
                >
                  <span className="fw-bold fs-4 text-white">Đặt vé</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h6 className="titleCardRight text-white fw-bold">VÉ CỦA BẠN</h6>
        </div>

        <img
          className="img18454"
          src="../image/home/18454.png"
          alt=""
          style={{ width: 125, height: 130 }}
        />

        <img
          className="img18452"
          src="../image/home/18452.png"
          alt=""
          style={{ width: 120, height: 130 }}
        />
        <img
          className="img18451"
          src="../image/home/18451.png"
          alt=""
          style={{ width: 90, height: 100 }}
        />
        <img
          className="imgCardLeft"
          style={{ width: 800, height: 420 }}
          src="../image/home/cardLeft.png"
          alt=""
        />
        <img
          className="imgCardLeft2"
          style={{ width: 800, height: 420 }}
          src="../image/home/cardLeft2.png"
          alt=""
        />
        <img
          className="imgCardLeft3"
          style={{ width: 780, height: 400 }}
          src="../image/home/cardLeft3.png"
          alt=""
        />
        <img
          className="imgCardLeft4"
          style={{ width: 770, height: 395 }}
          src="../image/home/cardLeft4.png"
          alt=""
        />

        <div>
          <p className="pageCardLeft" style={{ width: 700 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            ac mollis justo. Etiam volutpat tellus quis risus volutpat, ut
            posuere ex facilisis.
            <p className="mt-3">
              Suspendisse iaculis libero lobortis condimentum gravida. Aenean
              auctor iaculis risus, lobortis molestie lectus consequat a.
            </p>
            <h4 className="ms-5 d-flex align-items-center">
              <img src="../image/home/start.png" style={{ width: 25 }} alt="" />
              <span className="ms-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </span>
            </h4>
            <h4 className="ms-5 d-flex align-items-center">
              <img src="../image/home/start.png" style={{ width: 25 }} alt="" />
              <span className="ms-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </span>
            </h4>
            <h4 className="ms-5 d-flex align-items-center">
              <img src="../image/home/start.png" style={{ width: 25 }} alt="" />
              <span className="ms-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </span>
            </h4>
            <h4 className="ms-5 d-flex align-items-center">
              <img src="../image/home/start.png" style={{ width: 25 }} alt="" />
              <span className="ms-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </span>
            </h4>
          </p>
        </div>

        <img
          className="imgCardCenter"
          style={{ width: 130, height: 420 }}
          src="../image/home/cardCenter.png"
          alt=""
        />

        <img
          className="imgLisa mb-4"
          src="../image/home/lisa_Arnold.png"
          alt=""
          style={{ width: 250, height: 365 }}
        />
        <img
          className="img18453"
          src="../image/home/18453.png"
          alt=""
          style={{ width: 120, height: 130 }}
        />
        <img
          className="img18456"
          src="../image/home/18456.png"
          alt=""
          style={{ width: 140, height: 220 }}
        />
        
        <div>
          <img
            className="imgDamsen"
            src="../image/home/logoDamSen.png"
            alt=""
            style={{ width: 110, height: 95 }}
          />
          <h1 className="titleDamsen fw-bold text-white" style={{ width: 250, fontSize: 50 }}>
            Đầm Sen Park
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
