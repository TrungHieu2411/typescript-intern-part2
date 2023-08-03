import React, { useEffect, useState } from "react";
import "../assets/style.css";
import { Button, DatePicker, Form, Input, Select } from "antd";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { firestore } from "../firebase/firebaseConfig";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../redux/store";
import { updateTicket } from "../redux/ticket/ticketSlice";
import dayjs from "dayjs";

interface PayStoreData {
  id: string;
  money: string;
  quantity: string;
  date: any;
  fullname: string;
  phoneNumber: string;
  email: string;
  cardinalNumber: string;
  nameCardinalNumber: string;
  dateLine: any;
  cvvAndCvc: string;
}

function PayStore() {
  //-----------
  const [showDates, setShowDates] = useState(false);

  const handleButtonClickDate = () => {
    setShowDates(!showDates);
  };

  const handleDateChange = (value: any) => {
    setShowDates(false);
    setPayStore({
      ...payStore,
      dateLine: value,
    });
  };

  //-------------

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchPayStore = async () => {
      const payStoreRef = firestore.collection("tickets").doc(id);
      const payStoreSnapshot = await payStoreRef.get();
      if (payStoreSnapshot.exists) {
        const payStoreData = payStoreSnapshot.data() as PayStoreData;
        setPayStore(payStoreData);
      }
    };
    fetchPayStore();
  }, [id]);
  //-------------

  const [payStore, setPayStore] = useState<PayStoreData>({
    id: "",
    money: "",
    quantity: "",
    date: null,
    fullname: "",
    phoneNumber: "",
    email: "",
    cardinalNumber: "",
    nameCardinalNumber: "",
    dateLine: null,
    cvvAndCvc: "",
  });

  const [form] = Form.useForm();

  const dispatch = useDispatch<ThunkDispatch<RootState, null, any>>();
  const handleUpdateTicket = async () => {
    if (typeof id === "string") {
      try {
        const formattedDate = dayjs(payStore.dateLine).format("DD/MM/YYYY");
        const payStoreWithFormattedDate = {
          ...payStore,
          dateLine: formattedDate,
        };
        await dispatch(updateTicket(id, payStoreWithFormattedDate));
        console.log("Service updated successfully!");
        
        // Thực hiện chuyển hướng sau khi cập nhật thành công
        window.location.href = "/paystore/complete";
      } catch (error) {
        console.error("Error updating service:", error);
      }
    }
  };

  return (
    <div style={{ background: "#FF7F0E", height: 793 }}>
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
            <Form form={form}>
              <div className="row payStoreForm">
                <div className="col-12">
                  <label className="fw-bold" htmlFor="">
                    Số thẻ
                  </label>
                </div>
                <div className="col-12">
                  <Form.Item>
                    <Input
                      className="ip"
                      type="text"
                      required
                      style={{ width: 285, height: 40 }}
                      placeholder="Nhập số thẻ"
                      value={payStore.cardinalNumber}
                      onChange={(e) =>
                        setPayStore({
                          ...payStore,
                          cardinalNumber: e.target.value,
                        })
                      }
                    />
                  </Form.Item>
                </div>
              </div>
              <div className="row payStoreForm">
                <div className="col-12">
                  <label className="fw-bold" htmlFor="">
                    Họ tên chủ thẻ
                  </label>
                </div>
                <div className="col-12">
                  <Form.Item>
                    <Input
                      className="ip"
                      type="text"
                      required
                      style={{ width: 285, height: 40 }}
                      placeholder="Nhập họ và tên chủ thẻ"
                      value={payStore.nameCardinalNumber}
                      onChange={(e) =>
                        setPayStore({
                          ...payStore,
                          nameCardinalNumber: e.target.value,
                        })
                      }
                    />
                  </Form.Item>
                </div>
              </div>
              <div className="row payStoreForm">
                <div className="col-12">
                  <label className="fw-bold" htmlFor="">
                    Ngày hết hạn
                  </label>
                </div>
                <div className="col">
                  <Form.Item
                    name="dateLine"
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
                      style={{ width: 220, height: 40 }}
                      placeholder="Ngày hết hạn"
                      value={payStore.dateLine}
                      onChange={(value) =>
                        setPayStore({
                          ...payStore,
                          dateLine: value,
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
                      <img src="../image/home/calendar.png" />
                    </Button>
                  </Form.Item>
                </div>
              </div>
              <div className="row payStoreForm mt-1 pt-1">
                <div className="col-12">
                  <label className="fw-bold" htmlFor="">
                    CVV/CVC
                  </label>
                </div>
                <div className="col">
                  <Form.Item name="cvvAndCvc">
                    <Input.Password
                      className="ip"
                      type="text"
                      required
                      style={{ width: 80, height: 40 }}
                      placeholder="CVV/CVC"
                      value={payStore.cvvAndCvc}
                      onChange={(e) =>
                        setPayStore({
                          ...payStore,
                          cvvAndCvc: e.target.value,
                        })
                      }
                    />
                  </Form.Item>
                </div>
              </div>
              <div className="row">
                <div className="col ms-3 mt-3">
                  <Button
                    htmlType="submit"
                    onClick={handleUpdateTicket}
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
            <Form>
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
                        value={payStore.money}
                        onChange={(e) =>
                          setPayStore({
                            ...payStore,
                            money: e.target.value,
                          })
                        }
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
                        value={payStore.quantity}
                        onChange={(e) =>
                          setPayStore({
                            ...payStore,
                            quantity: e.target.value,
                          })
                        }
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
                        value={payStore.date}
                        onChange={(e) =>
                          setPayStore({
                            ...payStore,
                            date: e.target.value,
                          })
                        }
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
                        value={payStore.fullname}
                        onChange={(e) =>
                          setPayStore({
                            ...payStore,
                            fullname: e.target.value,
                          })
                        }
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
                        value={payStore.phoneNumber}
                        onChange={(e) =>
                          setPayStore({
                            ...payStore,
                            phoneNumber: e.target.value,
                          })
                        }
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
                        value={payStore.email}
                        onChange={(e) =>
                          setPayStore({
                            ...payStore,
                            email: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Form>
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
