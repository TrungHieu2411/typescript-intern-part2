import React, { useState } from "react";
import "../assets/style.css";
import { Button, Form, Input, Select } from "antd";
import Header from "../components/Header";

function PayStore() {
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
            className="titlePayStore text-white fw-bold"
            style={{ fontSize: 80 }}
          >
            Thanh toán
          </h1>
        </div>
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
          className="imgPayStoreRight"
          style={{ width: 290, height: 50 }}
          src="../image/payStore/payStoreRight.png"
          alt=""
        />
        <img
          className="imgPayStoreRight2"
          style={{ width: 285, height: 45 }}
          src="../image/payStore/payStoreRight2.png"
          alt=""
        />

        <div>
          <div className="containerRightPayStore">
            <Form>
              <div className="row">
                <div className="col-12">
                  <label className="fw-bold" htmlFor="">
                    Số thẻ
                  </label>
                </div>
                <div className="col-12">
                  <Input
                    className="ip"
                    type="text"
                    style={{ width: 285, height: 40 }}
                    placeholder="Nhập số thẻ"
                  />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-12">
                  <label className="fw-bold" htmlFor="">
                    Họ tên chủ thẻ
                  </label>
                </div>
                <div className="col-12">
                  <Input
                    className="ip"
                    type="text"
                    style={{ width: 285, height: 40 }}
                    placeholder="Nhập họ và tên"
                  />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-12">
                  <label className="fw-bold" htmlFor="">
                    Ngày hết hạn
                  </label>
                </div>
                <div className="col">
                  <Input
                    className="ip"
                    type="text"
                    style={{ width: 220, height: 40 }}
                    placeholder="Ngày hết hạn"
                  />
                </div>
                <div className="col">
                  <Button
                    className="d-flex text-center button"
                    style={{ width: 40, height: 40, background: "#FFDE32" }}
                  >
                    <img src="../image/home/calendar.png" />
                  </Button>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-12">
                  <label className="fw-bold" htmlFor="">
                    CVV/CVC
                  </label>
                </div>
                <div className="col">
                  <Input
                    className="ip"
                    type="text"
                    style={{ width: 80, height: 40 }}
                    placeholder="CVV/CVC"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col ms-3 mt-3">
                  <Button
                    href="/paystore/complete"
                    className="custom-button"
                    style={{ width: 250, height: 40, background: "#FF000A" }}
                  >
                    <span className="fw-bold fs-4 text-white">Thanh toán</span>
                  </Button>
                </div>
              </div>
            </Form>
          </div>
        </div>
        <div>
          <h6 className="titlePayStoreRight text-white fw-bold">
            THÔNG TIN THANH TOÁN
          </h6>
        </div>

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

        <img
          className="imgCardCenter"
          style={{ width: 130, height: 420 }}
          src="../image/home/cardCenter.png"
          alt=""
        />
        <img
          className="triniArnold"
          src="../image/payStore/trini_Arnold.png"
          alt=""
          style={{ width: 230, height: 380 }}
        />

        <div>
          <p className="pageCardLeftPayStore" style={{ width: 580 }}>
            <div className="row mt-2">
              <div className="col me-5">
                <div className="row">
                  <div className="col-12">
                    <label className="fw-bold" htmlFor="">
                      Số tiền thanh toán
                    </label>
                  </div>
                  <div className="col-12 mt-1">
                    <Input
                      className="ip"
                      type="text"
                      style={{ width: 170, height: 40 }}
                      placeholder="Nhập họ và tên"
                    />
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="row">
                  <div className="col-12">
                    <label className="fw-bold" htmlFor="">
                      Số lượng vé
                    </label>
                  </div>
                  <div className="col-12 mt-1">
                    <Input
                      className="ip"
                      type="text"
                      style={{ width: 80, height: 40 }}
                      placeholder="Nhập họ và tên"
                    />{" "}
                    vé
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="row">
                  <div className="col-12">
                    <label className="fw-bold" htmlFor="">
                      Ngày sử dụng
                    </label>
                  </div>
                  <div className="col-12 mt-1">
                    <Input
                      className="ip"
                      type="text"
                      style={{ width: 170, height: 40 }}
                      placeholder="Nhập họ và tên"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col me-5">
                <div className="row">
                  <div className="col-12">
                    <label className="fw-bold" htmlFor="">
                      Thông tin liên hệ
                    </label>
                  </div>
                  <div className="col-12 mt-1">
                    <Input
                      className="ip"
                      type="text"
                      style={{ width: 320, height: 40 }}
                      placeholder="Nhập họ và tên"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col me-5">
                <div className="row">
                  <div className="col-12">
                    <label className="fw-bold" htmlFor="">
                      Điện thoại
                    </label>
                  </div>
                  <div className="col-12 mt-1">
                    <Input
                      className="ip"
                      type="text"
                      style={{ width: 170, height: 40 }}
                      placeholder="Nhập họ và tên"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col me-5">
                <div className="row">
                  <div className="col-12">
                    <label className="fw-bold" htmlFor="">
                      Email
                    </label>
                  </div>
                  <div className="col-12 mt-1">
                    <Input
                      className="ip"
                      type="text"
                      style={{ width: 320, height: 40 }}
                      placeholder="Nhập họ và tên"
                    />
                  </div>
                </div>
              </div>
            </div>
          </p>
        </div>

        <img
          className="imgPayStoreLeft"
          style={{ width: 285, height: 45 }}
          src="../image/payStore/payStoreLeft.png"
          alt=""
        />
        <img
          className="imgPayStoreLeft2"
          style={{ width: 280, height: 40 }}
          src="../image/payStore/payStoreLeft2.png"
          alt=""
        />
        <div>
          <h6 className="titlePayStoreLeft text-white fw-bold">
            VÉ CỔNG - VÉ GIA ĐÌNH
          </h6>
        </div>
      </div>
    </div>
  );
}

export default PayStore;
