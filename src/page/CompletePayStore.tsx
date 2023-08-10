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
    slidesToShow: +payStore.quantity > 4 ? 4 : +payStore.quantity,
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
      const randomTicketString = randomTicketStrings[i];
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
              <h5 className="card-title">{randomTicketString}</h5>
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
  const generateRandomString = (length: number) => {
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    return result;
  };
  const [randomTicketStrings, setRandomTicketStrings] = useState<string[]>([]);
  useEffect(() => {
    const generateRandomStrings = () => {
      const numSlides = parseInt(payStore.quantity);
      const strings = [];
      for (let i = 0; i < numSlides; i++) {
        strings.push(generateRandomString(10));
      }
      return strings;
    };

    setRandomTicketStrings(generateRandomStrings());
  }, [payStore.quantity]);

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Dam Sen Park - THANK YOU!: ", 15, 10);
    doc.text(`Event QR Code: ${payStore.cardinalNumber}`, 15, 20);
    doc.text(`Money: ${payStore.money}`, 15, 30);
    doc.text(`Quantity Ticket: ${payStore.quantity}`, 15, 40);
    doc.text(`Total: ${calculatePaymentAmount()}`, 15, 50);
    doc.text(`Phone Number: ${payStore.phoneNumber}`, 15, 60);
    doc.text(`Email: ${payStore.email}`, 15, 70);
    doc.text(`Date Line: ${payStore.dateLine}`, 15, 80);
   const numSlides = parseInt(payStore.quantity);
    for (let i = 0; i < numSlides; i++) {
      doc.text(`Ticket ${i + 1}: ${randomTicketStrings[i]}`, 15, 90 + i * 10);
    }
    doc.save("card_information.pdf");
  };
  const handleDownloadClick = () => {
    generatePDF();
  };
  //-------GỬI EMAIL DỰA VÀO VIỆC SỬ DỤNG THƯ VIỆN emailJs--------
  const handleSendEmailClick = () => {
    const randomTicketStrings = Array.from({ length: parseInt(payStore.quantity) }, () => generateRandomString(10));
    const emailParams = {
      to_email: `${payStore.email}`, // Địa chỉ email người nhận
      from_name: "Đầm sen Park", // Tên người gửi (có thể để trống)
      subject: "Mã QR cho sự kiện", // Chủ đề email (có thể để trống)
      message: JSON.stringify(
        `Dear ${payStore.fullname}, Thank you for pay Ticket!, Money: ${
          payStore.money
        } VND, Quantity Ticket: ${
          payStore.quantity
        } ticket, Total: ${calculatePaymentAmount()}, Date Line: ${payStore.dateLine}, ` +
        randomTicketStrings.map((ticketString, index) => `Ticket ${index + 1}: ${ticketString}`).join(' - ')
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
