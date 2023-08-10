import React, { useEffect, useState } from "react";
import "../assets/style.css";
import { Button, Card, DatePicker, Form, Input, Modal, Select } from "antd";
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
  //--------NGÀY THÁNG NĂM---
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

  //--------GỌI API-----

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


  const numSlides = +payStore.quantity; // Số lượng slides
  const idLength = 10; // Độ dài của ID
  const generateRandomID = () => {
    let id = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < idLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      id += characters[randomIndex];
    }
    return id;
  };
  for (let i = 0; i < numSlides; i++) {
    const generatedID = generateRandomID();
  }

  //-------------

  const dispatch = useDispatch<ThunkDispatch<RootState, null, any>>();
  const onFinish = async () => {
    if (typeof id === "string") {
      try {
        // Check if the cardinalNumber contains characters (letters)
        if (isNaN(parseFloat(payStore.cardinalNumber))) {
          // If it contains characters, show the modal
          handleOpenModal();
        } else {
          // If it's a number, proceed with the dispatch
          const formattedDate = dayjs(payStore.dateLine).format("DD/MM/YYYY");
          const payStoreWithFormattedDate = {
            ...payStore,
            dateLine: formattedDate,
          };
          await dispatch(updateTicket(id, payStoreWithFormattedDate));
          console.log("Service updated successfully!");
        }
      } catch (error) {
        console.error("Error updating service:", error);
      }
    }
  };

  const [form] = Form.useForm();
  //------TỔNG TIỀN THANH TOÁN--------
  const calculatePaymentAmount = () => {
    const quantity = parseFloat(payStore.quantity);
    const money = parseFloat(payStore.money);
    return isNaN(quantity) || isNaN(money)
      ? ""
      : (quantity * money).toString() + ".000 VNĐ";
  };
  //-----ẨN HIỆN MODAL------------
  const [visible, setVisible] = useState(false);

  const handleCloseModal = () => {
    setVisible(false);
  };
  //Nhập cả chữ lẫn số------
  const alphanumericRegex = /^[a-zA-Z0-9]+$/;

  const handleOpenModal = () => {
    //sai nên hiển thị modal, đúng thì không hiển thị
    if (!alphanumericRegex.test(payStore.cardinalNumber)) {
      setVisible(true);
    }
  };

  return (
    <div style={{ background: "#FF7F0E", height: 795 }}>
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
            <Form form={form} onFinish={onFinish}>
              <div className="row payStoreForm">
                <div className="col-12">
                  <label className="fw-bold" htmlFor="">
                    Số thẻ
                  </label>
                </div>
                <div className="col-12">
                  <Form.Item
                    name="cardinalNumber"
                    rules={[
                      {
                        required: true,
                        message: "",
                      },
                    ]}
                  >
                    <Input
                      className="ip"
                      type="text"
                      style={{ width: 285, height: 40 }}
                      placeholder="Nhập số thẻ"
                      value={payStore.cardinalNumber}
                      onChange={(e) =>
                        setPayStore({
                          ...payStore,
                          cardinalNumber: e.target.value,
                        })
                      }
                      maxLength={10}
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
                  <Form.Item
                    name="nameCardinalNumber"
                    rules={[
                      {
                        required: true,
                        message: "",
                      },
                    ]}
                  >
                    <Input
                      className="ip"
                      type="text"
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
                        message: "",
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
                  <Form.Item
                    name="cvvAndCvc"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập đầy đủ thông tin",
                      },
                    ]}
                  >
                    <Input.Password
                      className="ip"
                      type="text"
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
                    className="custom-button"
                    style={{ width: 250, height: 40, background: "#FF000A" }}
                  >
                    <span className="fw-bold fs-5 text-white titlePayStoreRight2">
                      Thanh toán
                    </span>
                  </Button>
                </div>
              </div>
            </Form>
          </div>
        </div>
        {visible && (
          <Modal
            style={{ paddingRight: 120, paddingLeft: 120 }}
            visible={visible}
            onCancel={handleCloseModal}
            footer={null} // Để loại bỏ footer, nếu không cần
            centered
            className="modalEmoji"
          >
            <h2
              style={{
                padding: 25,
                borderTopLeftRadius: 32,
                borderTopRightRadius: 32,
                backgroundColor: "#FF8B15",
              }}
            >
              <img
                src="../image/completePayStore/sadEmoji.png"
                style={{ width: 80 }}
                className="emoji"
                alt=""
              />
            </h2>
            <p className="pb-3 pt-2 px-3 ms-3" style={{ fontSize: 13 }}>
              Hình như đã có lỗi xảy ra khi thanh toán... <br />
              Vui lòng kiểm tra lại thông tin liên hệ, thông tin thẻ và thử lại.
            </p>
          </Modal>
        )}
        <div>
          <h6 className="titlePayStoreRight text-white fw-bold">
            THÔNG TIN THANH TOÁN
          </h6>
        </div>

        <img
          className="imgCardLeft"
          style={{ width: 765, height: 420 }}
          src="../image/home/cardLeft.png"
          alt=""
        />
        <img
          className="imgCardLeft2"
          style={{ width: 765, height: 420 }}
          src="../image/home/cardLeft2.png"
          alt=""
        />
        <img
          className="imgCardLeft3"
          style={{ width: 745, height: 400 }}
          src="../image/home/cardLeft3.png"
          alt=""
        />
        <img
          className="imgCardLeft4"
          style={{ width: 735, height: 395 }}
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
                        value={calculatePaymentAmount()}
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
