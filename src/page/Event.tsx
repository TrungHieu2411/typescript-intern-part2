import React, { Component, useEffect, useState } from "react";
import "../assets/style.css";
import { Button, Form, Input, Select } from "antd";
import Header from "../components/Header";
//----------------
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getEvent } from "../redux/event/eventSlice";
import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
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
      <img src="../image/event/arrowRight.png" alt="ArrowDown" />
    </Button>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <Button
      className={"buttonLeft btn me-2 d-flex"}
      style={{
        width: 40,
        height: 40,
        background: "#FFDE32",
      }}
      onClick={onClick}
    >
      <img src="../image/event/arrowLeft.png" alt="ArrowDown" />
    </Button>
  );
}
//----------------

interface EventData {
  id: string;
  titleEvent: string;
  nameEvent: string;
  date: any;
  dateLine: any;
  money: string;
  imgOne: string;
  imgTwo: string;
  imgThree: string;
}
function Event() {
  //Gọi API
  const dispatch = useDispatch<ThunkDispatch<RootState, null, any>>();
  const deviceData = useSelector(
    (state: RootState) => state.firestoreEventData.data
  ) as EventData[];
  useEffect(() => {
    dispatch(getEvent());
  }, []);
  //--------
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  //----------CARD-----------
  const renderSlides = () => {
    if (!deviceData) return null;

    return deviceData.map((eventItem, index) => (
      <div className="col" key={index}>
        <div
          className="card"
          style={{ width: 265, height: 380, borderRadius: 20 }}
        >
          <img
            src={eventItem.imgOne}
            className="card-img-top"
            alt="..."
            style={{
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              height: 180,
            }}
          />
          <div className="card-body">
            <h5 className="card-title fw-bold">{eventItem.titleEvent}</h5>
            <span className="card-text">{eventItem.nameEvent}</span>
            <div className="d-flex align-items-center my-1 pb-2">
              <img src="../image/event/calendar2.png" alt="" />
              <span style={{ fontSize: 12 }} className="ps-1">
                {eventItem.date} - {eventItem.dateLine}
              </span>
            </div>
            <h3 style={{ color: "#FA7D09", fontWeight: "bold" }}>
              <span>{eventItem.money}</span> VNĐ
            </h3>
            <Button
              href={`/event/detail/${eventItem.id}`}
              className="custom-button"
              style={{
                width: 165,
                height: 30,
                background: "#FF000A",
              }}
            >
              <span className="fw-bold text-white textDetail">
                Xem chi tiết
              </span>
            </Button>
          </div>
        </div>
      </div>
    ));
  };
  //----------CARD-----------

  return (
    <div style={{ background: "#FF7F0E", height: 782 }}>
      <Header />
      <div className="row bg">
        <div>
          <h1
            className="titleEvent text-white fw-bold"
            style={{ fontSize: 80 }}
          >
            Sự kiện nổi bật
          </h1>
        </div>

        <img
          className="bgEvent px-5 pt-5 mt-5"
          src="../image/event/eventBg.png"
          alt=""
        />
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
          <div className="container cardEvent px-5 mx-4">
            <div className="row">
              <Slider {...settings} className="px-5">
                {renderSlides()}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Event;
