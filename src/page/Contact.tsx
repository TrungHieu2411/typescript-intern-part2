import React, { useState } from "react";
import "../assets/style.css";
import { Button, Card, Form, Input, Select } from "antd";
import Header from "../components/Header";
import TextArea from "antd/es/input/TextArea";

function Contact() {
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
        <div>
          <h1
            className="titleContact text-white fw-bold"
            style={{ fontSize: 70 }}
          >
            Liên hệ
          </h1>
        </div>
        <img
          className="cardContact"
          src="../image/contact/cardContact.png"
          alt=""
          style={{ width: 780, height: 420 }}
        />
        <img
          className="cardContact2"
          src="../image/contact/cardContact2.png"
          alt=""
          style={{ width: 780, height: 410 }}
        />
        <img
          className="cardContact3"
          src="../image/contact/cardContact3.png"
          alt=""
          style={{ width: 770, height: 400 }}
        />
        <img
          className="cardContact4"
          src="../image/contact/cardContact4.png"
          alt=""
          style={{ width: 765, height: 395 }}
        />
        <img
          className="imgAlex"
          src="../image/contact/alex_AR.png"
          alt=""
          style={{ width: 240, height: 400 }}
        />
        <div>
          <div className="pageCardContact mt-4 ps-2">
            <p className="ps-5 pe-5" style={{ width: 800 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse ac mollis justo. Etiam volutpat tellus quis risus
              volutpat, ut posuere ex facilisis.
            </p>
            <Form className="ms-4 ps-4 pe-5 mx-5">
              <div className="row">
                <div className="col-5">
                  <Input
                    className="ip"
                    style={{ height: 40 }}
                    type="text"
                    placeholder="Tên"
                  />
                </div>
                <div className="col-7">
                  <Input
                    className="ip"
                    style={{ height: 40 }}
                    type="text"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-5">
                  <Input
                    className="ip py-2"
                    style={{ height: 40 }}
                    type="text"
                    placeholder="Số điện thoại"
                  />
                </div>
                <div className="col-7">
                  <Input
                    className="ip"
                    style={{ height: 40 }}
                    type="text"
                    placeholder="Địa chỉ"
                  />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col">
                  <TextArea
                    className="ip"
                    style={{ height: 40 }}
                    rows={4}
                    placeholder="Lời nhắn"
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
                    <span className="fw-bold fs-4 text-white">Gửi liên hệ</span>
                  </Button>
                </div>
              </div>
            </Form>
          </div>
        </div>
        <img
          className="cardContactRightOne"
          src="../image/contact/cardContactRight.png"
          alt=""
          style={{ width: 380, height: 125 }}
        />
        <img
          className="cardContactRightOne2"
          src="../image/contact/cardContactRight2.png"
          alt=""
          style={{ width: 380, height: 125 }}
        />
        <img
          className="cardContactRightOne3"
          src="../image/contact/cardContactRight3.png"
          alt=""
          style={{ width: 370, height: 115 }}
        />
        <img
          className="cardContactRightOne4"
          src="../image/contact/cardContactRight4.png"
          alt=""
          style={{ width: 365, height: 110 }}
        />
        <div>
          <div className="pageCardContactRightOne mt-4 pt-3 ps-2">
            <div className="row">
              <div className="col-2">
                <img
                  className="vector"
                  style={{ width: 35 }}
                  src="../image/contact/vector.png"
                  alt=""
                />
                <img
                  className="waze"
                  style={{ width: 35 }}
                  src="../image/contact/waze.png"
                  alt=""
                />
              </div>
              <div className="col-10">
                <h6 className="mb-0">Địa chỉ:</h6>
                <span style={{ fontSize: 10 }}>
                  86/33 Âu Cơ, Phường 9, Quận Tân Bình, TP. Hồ Chí Minh
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* //-------------  */}
        <img
          className="cardContactRightTwo"
          src="../image/contact/cardContactRight.png"
          alt=""
          style={{ width: 380, height: 125 }}
        />
        <img
          className="cardContactRightTwo2"
          src="../image/contact/cardContactRight2.png"
          alt=""
          style={{ width: 380, height: 125 }}
        />
        <img
          className="cardContactRightTwo3"
          src="../image/contact/cardContactRight3.png"
          alt=""
          style={{ width: 370, height: 115 }}
        />
        <img
          className="cardContactRightTwo4"
          src="../image/contact/cardContactRight4.png"
          alt=""
          style={{ width: 365, height: 110 }}
        />
        <div>
          <div className="pageCardContactRightTwo mt-2 pt-5 ps-2">
            <div className="row">
              <div className="col-2">
                <img
                  className="mail"
                  style={{ width: 35 }}
                  src="../image/contact/mail.png"
                  alt=""
                />
              </div>
              <div className="col-10 pt-3" style={{marginRight: 90}}>
                <h6 className="mb-0">Email:</h6>
                <p style={{ fontSize: 10 }}>investigate@your-site.com</p>
              </div>
            </div>
          </div>
        </div>
        {/* //-------------  */}
        <img
          className="cardContactRightThree"
          src="../image/contact/cardContactRight.png"
          alt=""
          style={{ width: 380, height: 125 }}
        />
        <img
          className="cardContactRightThree2"
          src="../image/contact/cardContactRight2.png"
          alt=""
          style={{ width: 380, height: 125 }}
        />
        <img
          className="cardContactRightThree3"
          src="../image/contact/cardContactRight3.png"
          alt=""
          style={{ width: 370, height: 115 }}
        />
        <img
          className="cardContactRightThree4"
          src="../image/contact/cardContactRight4.png"
          alt=""
          style={{ width: 365, height: 110 }}
        />
        <div>
          <div className="pageCardContactRightThree mt-4 pt-2 ps-2">
            <div className="row">
              <div className="col-2">
                <img
                  className="telephone"
                  style={{ width: 35 }}
                  src="../image/contact/telephone.png"
                  alt=""
                />
              </div>
              <div className="col-10 pt-1" style={{marginRight: 135}}>
                <h6 className="mb-0">Điện thoại:</h6>
                <span style={{ fontSize: 10 }}>+84 145 689 798</span>
              </div>
            </div>
          </div>
        </div>
        {/* //-------------  */}
      </div>
    </div>
  );
}

export default Contact;
