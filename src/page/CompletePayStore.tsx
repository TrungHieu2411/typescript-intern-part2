import React, { Component, useEffect, useState } from "react";
import "../assets/style.css";
import { Button, Form, Input, QRCode, Select, Space, message } from "antd";
import Header from "../components/Header";
//-----------------------------
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams } from "react-router-dom";
import { firestore } from "../firebase/firebaseConfig";
import jsPDF from "jspdf";
import emailjs from "emailjs-com";
function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <Button
      className={"buttonRight btn me-4 d-flex"}
      style={{
        width: 40,
        height: 40,
        background: "#FFDE32",
      }}
      onClick={onClick}
    >
      <img src="../../image/event/arrowRight.png" alt="ArrowDown" />
    </Button>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <Button
      className={"buttonLeft btn d-flex"}
      style={{
        width: 40,
        height: 40,
        background: "#FFDE32",
      }}
      onClick={onClick}
    >
      <img src="../../image/event/arrowLeft.png" alt="ArrowDown" />
    </Button>
  );
}
//-----------------------------

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
//-------------
function CompletePayStore() {
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
  //---------------GỌI API---------------
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
  //----------------------------

  //-------------
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: (current: number) => {
      setCurrentPage(Math.floor(current / itemsPerPage) + 1);
    },
  };
  const renderSlides = () => {
    const numSlides = parseInt(payStore.quantity);
    const slides = [];

    for (let i = 0; i < numSlides; i++) {
      slides.push(
        <div className="col" key={i}>
          <div
            className="card canvaQr"
            style={{ width: 210, height: 320, borderRadius: 10 }}
          >
            <Space direction="vertical" align="center">
              <QRCode value={payStore.cardinalNumber || "-"} />
            </Space>
            <div className="card-body text-center">
              <h5 className="card-title">ALT2021050{i}</h5>
              <span className="card-text textPay">VÉ CỔNG</span>
              <div className=" ">
                <span>---</span>
              </div>
              <p style={{ fontSize: 10 }}>
                <span>Ngày sử dụng: {payStore.dateLine}</span>
              </p>
              <img
                src="../../image/completePayStore/tick.png"
                className="tick"
                alt=""
              />
            </div>
          </div>
        </div>
      );
    }

    return slides;
  };
//số trang hiển thị -- tính toán dựa vào số vé để nhân ra số lần
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    if (!payStore.quantity || isNaN(parseInt(payStore.quantity))) {
      setTotalPages(1);
    } else {
      const totalItems = parseInt(payStore.quantity);
      const totalPages = Math.ceil(totalItems / itemsPerPage);
      setTotalPages(totalPages);
    }
  }, [payStore.quantity]);
  //-----------------
  //------TỔNG TIỀN THANH TOÁN--------
  const calculatePaymentAmount = () => {
    const quantity = parseFloat(payStore.quantity);
    const money = parseFloat(payStore.money);
    return isNaN(quantity) || isNaN(money)
      ? ""
      : (quantity * money).toString() + ".000 VND";
  };
  //-------XUẤT FILE PDF SỬ DỤNG DỰA VÀO VIỆC SỬ DỤNG THƯ VIỆN jsPDF--------
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Card Information: ", 15, 10);
    doc.text(`Money: ${payStore.money}`, 15, 20);
    doc.text(`Quantity Ticket: ${payStore.quantity}`, 15, 30);
    doc.text(`Total: ${calculatePaymentAmount()}`, 15, 40);
    doc.text(`Cardinal Number: ${payStore.cardinalNumber}`, 15, 50);
    doc.text(`Phone Number: ${payStore.phoneNumber}`, 15, 60);
    doc.text(`Email: ${payStore.email}`, 15, 70);
    doc.text(`Date Line: ${payStore.dateLine}`, 15, 80);
    doc.save("card_information.pdf");
  };
  const handleDownloadClick = () => {
    generatePDF();
  };
  //-------GỬI EMAIL DỰA VÀO VIỆC SỬ DỤNG THƯ VIỆN emailJs--------
  const handleSendEmailClick = () => {
    const emailParams = {
      to_email: "trunghieu2k350@gmail.com", // Địa chỉ email người nhận
      from_name: payStore.fullname, // Tên người gửi (có thể để trống)
      subject: "Đầm sen Park", // Chủ đề email (có thể để trống)
      message: JSON.stringify(
        `Money: ${payStore.money}, Quantity Ticket: ${
          payStore.quantity
        }, Total: ${calculatePaymentAmount()}, Cardinal Number: ${
          payStore.cardinalNumber
        }, Phone Number: ${payStore.phoneNumber}, Date Line: ${payStore.dateLine}`
      ),
    };

    // Thay thế các thông tin dưới đây bằng thông tin tương ứng bạn đã nhận được từ EmailJS
    const emailServiceId = "service_q3un88h"; // ID của service email
    const emailTemplateId = "template_f3dx1ij"; // ID của template email
    const emailUserId = "wVBzGTmwZqVcFFQOG"; // User ID của bạn

    // Gửi email
    emailjs
      .send(emailServiceId, emailTemplateId, emailParams, emailUserId)
      .then(
        () => {
          message.success(`Email sent successfully!`);
        },
        (error) => {
          console.log("Failed to send email:", error);
        }
      );
  };
  //---------------------------------------------------------------------
  return (
    <div style={{ background: "#FF7F0E", height: 782 }}>
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
          src="../../image/completePayStore/cardComplete.png"
          alt=""
        />
        <img
          className="cardComplete2"
          style={{ width: 1100, height: 420 }}
          src="../../image/completePayStore/cardComplete2.png"
          alt=""
        />
        <img
          className="cardComplete3"
          style={{ width: 1085, height: 410 }}
          src="../../image/completePayStore/cardComplete3.png"
          alt=""
        />
        <img
          className="cardComplete4"
          style={{ width: 1075, height: 400 }}
          src="../../image/completePayStore/cardComplete4.png"
          alt=""
        />
        <img
          className="alvinArnold"
          style={{ width: 270, height: 410 }}
          src="../../image/completePayStore/alvin_Arnold.png"
          alt=""
        />
        <div>
          <div className="row buttonComplete">
            <div className="col">
              <Button
                href="#"
                className="custom-button"
                style={{ width: 120, height: 30, background: "#FF000A" }}
                onClick={handleDownloadClick}
              >
                <span className="fw-bold text-white buttonBottomComplete">
                  Tải vé
                </span>
              </Button>
            </div>
            <div className="col">
              <Button
                href="#"
                className="custom-button"
                style={{ width: 120, height: 30, background: "#FF000A" }}
                onClick={handleSendEmailClick}
              >
                <span className="fw-bold text-white buttonBottomComplete">
                  Gửi Email
                </span>
              </Button>
            </div>
          </div>
        </div>
        <div>
          <div className="container cardCompletePayStore px-5 mx-4">
            <div
              className="row"
              style={{ paddingRight: 100, paddingLeft: 130 }}
            >
              <Slider {...settings} className="px-5 ms-3">
                {renderSlides()}
              </Slider>
            </div>
          </div>
          <div>
            <span className="titleTicket">
              Số lượng: <span>{payStore.quantity}</span> vé
            </span>
          </div>
          <div>
            <span className="titleTicket2">
              Trang{" "}
              <span>
                {currentPage}/{totalPages}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletePayStore;
