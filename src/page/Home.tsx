import React, { useState } from "react";
import "../assets/style.css";
import { Button, DatePicker, Form, Input, Select } from "antd";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { createTicket } from "../redux/ticket/ticketSlice";
import dayjs from "dayjs";
import { firestore } from "../firebase/firebaseConfig";

interface TicketData {
  typeTicker: string;
  money: string;
  quantity: string;
  date: any;
  fullname: string;
  phoneNumber: string;
  email: string;
}

function Home() {
  const [ticker, setTicker] = useState<TicketData>({
    typeTicker: "",
    quantity: "",
    date: null, // Initialize date as null
    money: "",
    fullname: "",
    phoneNumber: "",
    email: "",
  });
  const [showOptions, setShowOptions] = useState(false);
  const [showDates, setShowDates] = useState(false);
  const [money, setMoney] = useState("");
  
  const handleButtonClick = () => {
    setShowOptions(!showOptions);
  };

  const handleButtonClickDate = () => {
    setShowDates(!showDates);
  };

  const handleDateChange = (value: any) => {
    setShowDates(false);
    setTicker({
      ...ticker,
      date: value,
    });
  };

  const handleOptionSelect = (value: string) => {
    setTicker({
      ...ticker,
      typeTicker: value,
    });

    // Set the money value based on the selected typeTicker
    if (value === "family") {
      setMoney("350.000");
    } else if (value === "couple") {
      setMoney("200.000");
    }
    setShowOptions(false);
  };

  const dispatch = useDispatch();
  const onFinish = async () => {
    const formattedDate = dayjs(ticker.date).format("DD/MM/YYYY");
    const ticketWithFormattedDate = {
      ...ticker,
      date: formattedDate,
      money: money,
    };
    await dispatch(createTicket(ticketWithFormattedDate) as any);
  };

  const [form] = Form.useForm();
  return (
    <div style={{ background: "#FF7F0E", height: 793 }}>
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
            <Form form={form} onFinish={onFinish}>
              <div className="row tickerForm">
                <div className="col ms-2">
                  <Form.Item
                    name="typeTicker"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng chọn gói",
                      },
                    ]}
                  >
                    <Select
                      className="ip custom-dropdown"
                      style={{ width: 270, height: 40 }}
                      open={showOptions}
                      onSelect={handleOptionSelect}
                      value={ticker.typeTicker}
                      onChange={(value) =>
                        setTicker({
                          ...ticker,
                          typeTicker: value,
                        })
                      }
                      placeholder="Chọn gói sử dụng"
                    >
                      <Select.Option value="family" className="ip">
                        Gói gia đình
                      </Select.Option>
                      <Select.Option value="couple" className="ip">
                        Gói cặp đôi
                      </Select.Option>
                    </Select>
                  </Form.Item>
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
              <div className="row tickerForm">
                <div className="col ms-2">
                  <Form.Item name="quantity">
                    <Input
                      value={ticker.quantity}
                      onChange={(e) =>
                        setTicker({
                          ...ticker,
                          quantity: e.target.value,
                        })
                      }
                    required
                      className="ip"
                      style={{ width: 100, height: 40 }}
                      placeholder="Số lượng vé"
                    />
                  </Form.Item>
                </div>
                <div className="col ps-0">
                  <Form.Item
                    name="date"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng chọn ngày",
                      },
                    ]}
                  >
                    <DatePicker
                      className="ip"
                      open={showDates}
                      onSelect={handleDateChange}
                      style={{ width: 158, height: 40 }}
                      placeholder="Ngày sử dụng"
                      value={ticker.date}
                      onChange={(value) =>
                        setTicker({
                          ...ticker,
                          date: value,
                        })
                      }
                    />
                  </Form.Item>
                </div>
                <div className="col p-0">
                  <Form.Item>
                    <Button
                      className="d-flex text-center button"
                      style={{ width: 40, height: 40, background: "#FFDE32" }}
                      onClick={handleButtonClickDate}
                    >
                      <img src="../image/home/calendar.png" alt="Calendar" />
                    </Button>
                  </Form.Item>
                </div>
              </div>
              <div className="row tickerForm">
                <div className="col ms-2">
                  <Form.Item name="fulname">
                    <Input
                      value={ticker.fullname}
                      onChange={(e) =>
                        setTicker({
                          ...ticker,
                          fullname: e.target.value,
                        })
                      }
                    required
                      className="ip"
                      style={{ width: 322, height: 40 }}
                      placeholder="Họ và tên"
                    />
                  </Form.Item>
                </div>
              </div>
              <div className="row tickerForm">
                <div className="col ms-2">
                  <Form.Item name="phoneNumber">
                    <Input
                      value={ticker.phoneNumber}
                      onChange={(e) =>
                        setTicker({
                          ...ticker,
                          phoneNumber: e.target.value,
                        })
                      }
                    required
                      className="ip"
                      style={{ width: 322, height: 40 }}
                      placeholder="Số điện thoại"
                    />
                  </Form.Item>
                </div>
              </div>
              <div className="row tickerForm">
                <div className="col ms-2">
                  <Form.Item name="email">
                    <Input
                      value={ticker.email}
                      onChange={(e) =>
                        setTicker({
                          ...ticker,
                          email: e.target.value,
                        })
                      }
                    required
                      className="ip"
                      style={{ width: 322, height: 40 }}
                      placeholder="Địa chỉ email"
                    />
                  </Form.Item>
                </div>
              </div>
              <div className="row mt-1">
                <div className="col ms-2 text-center">
                  <Form.Item>
                    <Button
                      htmlType="submit"
                      className="custom-button"
                      style={{ width: 250, height: 40, background: "#FF000A" }}
                    >
                      <span className="fw-bold fs-4 text-white">Đặt vé</span>
                    </Button>
                  </Form.Item>
                </div>
              </div>
            </Form>
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
          <h1
            className="titleDamsen fw-bold text-white"
            style={{ width: 250, fontSize: 50 }}
          >
            Đầm Sen Park
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
