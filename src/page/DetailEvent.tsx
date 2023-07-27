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
    <div style={{ background: "#FF7F0E" }}>
      <Header />
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* /// svg one  */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1784 957"
                fill="none"
              >
                <path
                  opacity="0.4"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M657.307 0.521423C657.307 0.521423 755.512 831.147 1783.68 957.442H-6.75937V0.521423H657.307Z"
                  fill="#FFC500"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_194_191"
                    x1="888.457"
                    y1="957.433"
                    x2="888.457"
                    y2="0.51264"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.0171" stop-color="#FF8B2C" />
                    <stop offset="0.0422" stop-color="#FF8D2A" />
                    <stop offset="0.3782" stop-color="#FFA413" />
                    <stop offset="0.6939" stop-color="#FFB105" />
                    <stop offset="0.9665" stop-color="#FFB600" />
                  </linearGradient>
                </defs>

                {/* //-----------  */}
                <foreignObject
                  x="300"
                  y="-10"
                  width="1500"
                  height="1000"
                  className="svg-container"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 907 1000"
                    fill="none"
                  >
                    <path
                      opacity="0.4"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M453.111 4.48305C453.111 4.48305 436.657 822.803 0.0631714 957.423H906.678V0.502258L453.111 4.48305Z"
                      fill="#FFC500"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_194_192"
                        x1="453.361"
                        y1="957.433"
                        x2="453.361"
                        y2="0.512639"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.0171" stop-color="#FFA12C" />
                        <stop offset="0.9665" stop-color="#FFC500" />
                      </linearGradient>
                    </defs>
                    {/* //-----------  */}
                  </svg>
                </foreignObject>

                {/* //-----------  */}
                <foreignObject x="130" y="230" width="1700" height="700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1519"
                    height="624"
                    viewBox="0 0 1519 624"
                    fill="none"
                  >
                    <path
                      d="M39.3318 624C17.6536 624 0 604.628 0 580.84V43.8873C0 20.0658 17.6536 0.7276 39.3318 0.7276H1479.67C1501.38 0.7276 1519 20.0993 1519 43.8873V580.84C1519 604.662 1501.35 624 1479.67 624H39.3318Z"
                      fill="#FFCA7B"
                    />
                  </svg>
                </foreignObject>
                <foreignObject x="130" y="200" width="1700" height="700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1519"
                    height="637"
                    viewBox="0 0 1519 637"
                    fill="none"
                  >
                    <path
                      d="M39.3447 637C17.6594 637 0 617.202 0 592.89V44.1103C0 19.7641 17.6594 0 39.3447 0H1479.66C1501.37 0 1519 19.7983 1519 44.1103V592.89C1519 617.236 1501.34 637 1479.66 637H39.3447Z"
                      fill="#FDE8B3"
                    />
                  </svg>
                </foreignObject>
                <foreignObject x="140" y="210" width="1700" height="700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1499"
                    height="616"
                    viewBox="0 0 1499 616"
                    fill="none"
                  >
                    <path
                      d="M1469.86 614H29.1394C14.1365 614 2 600.304 2 583.45V32.5502C2 15.6618 14.167 2 29.1394 2H1469.86C1484.86 2 1497 15.6961 1497 32.5502V583.45C1497 600.338 1484.86 614 1469.86 614Z"
                      stroke="#FFB489"
                      stroke-width="3"
                      stroke-miterlimit="2.61313"
                      stroke-linecap="round"
                      stroke-dasharray="10 10"
                    />
                  </svg>
                </foreignObject>
                <foreignObject x="-50" y="280" width="100%" height="100%">
                  <div className="container">
                    <div className="row">
                      {/* //---  */}
                      <div className="col-4">
                        <img
                          src="../image/Rectangle2.png"
                          style={{ width: 411, height: 337 }}
                          alt=""
                        />
                        <p>
                          <div className="d-flex mt-3 mb-2">
                            <img src="../image/calendar2.png" alt="" />
                            <span>30/05/2022 - 02/06/2022</span>
                          </div>
                          <p>Đầm sen Park</p>
                          <h2 style={{ color: "#FA7D09", fontWeight: "bold" }}>
                            <span>25.000</span> VNĐ
                          </h2>
                        </p>
                      </div>
                      {/* //---  */}
                      <div className="col-3">
                        <p
                          className="fs-5"
                          style={{ textAlign: "justify" }}
                        >
                          <span
                            style={{
                              color: "#FA7D09",
                              fontSize: 30,
                              fontWeight: "bold",
                            }}
                          >
                            Lorem Ipsum
                          </span>{" "}
                          is simply dummy text of the printing and typesetting
                          industry. Lorem Ipsum has been the industry's standard
                          dummy text ever since the 1500s, when an unknown
                          printer took a galley of type and scrambled it to make
                          a type specimen book. It has survived not only five
                          centuries, but also the leap into electronic sdsd
                          typesetting, remaining cssa essentially unchanged. It
                          was popularised in the 1960s with the release of
                          Letraset sheets containing Lorem Ipsum passages, of
                          Lorem Ipsum.
                        </p>
                      </div>
                      {/* //---  */}
                      <div className="col-3">
                        <img
                          src="../image/Rectangle2.png"
                          style={{ width: 288, height: 208 }}
                          alt=""
                        />
                        <p className="fs-5" style={{ textAlign: "justify", width: 288 }}>
                          <span
                            style={{
                              color: "#FA7D09",
                              fontSize: 30,
                              fontWeight: "bold",
                            }}
                          >
                            Lorem Ipsum
                          </span>{" "}
                          Lorem Ipsum is not simply random text. It has roots in
                          a piece of classical Latin literature from 45 BC,
                          making it over 2000 years old. words, consectetur,
                          from a Lorem Ipsum passage, and going through the
                          cites of the word in classical literature,
                        </p>
                      </div>
                      {/* //---  */}
                      <div className="col-2">
                        <p className="fs-5" style={{ textAlign: "justify", width: 288 }}>
                          <span
                            style={{
                              color: "#FA7D09",
                              fontSize: 30,
                              fontWeight: "bold",
                            }}
                          >
                            Lorem Ipsum
                          </span>{" "}
                          Lorem Ipsum is not simply random text. It has roots in
                          a piece of classical Latin literature from 45 BC,
                          making it over 2000 years old. words, consectetur,
                          from a Lorem Ipsum passage, and going through the
                          cites of the word in classical literature,
                        </p>
                        <img
                          src="../image/Rectangle2.png"
                          style={{ width: 288, height: 208 }}
                          alt=""
                        />
                      </div>
                      {/* //---  */}
                    </div>
                  </div>
                </foreignObject>
                {/* //-------  */}
                <foreignObject x="0" y="0" width="1500" height="500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="483"
                    height="174"
                    viewBox="0 0 483 174"
                    fill="none"
                  >
                    <path
                      d="M203.349 134.592C99.2989 169.68 -10.2619 180.898 -122.271 167.931L-122.062 166.166C103.383 192.26 317.76 119.96 481.575 -37.4292L482.797 -36.142C401.406 42.0438 307.377 99.4863 203.349 134.592Z"
                      fill="#474747"
                    />
                  </svg>
                </foreignObject>
                <foreignObject
                  x="700"
                  y="50"
                  width="1500"
                  height="500"
                  className="svg-container"
                >
                  <div className="row">
                    <div className="col d-flex align-items-center">
                      <h1
                        style={{
                          fontSize: 100,
                          color: "white",
                          fontWeight: "bold",
                        }}
                      >
                        Sự kiện 1
                      </h1>
                    </div>
                  </div>
                </foreignObject>
                <foreignObject x="1260" y="0" width="1500" height="500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="524"
                    height="246"
                    viewBox="0 0 524 246"
                    fill="none"
                  >
                    <path
                      d="M246.521 185.104C152.604 143.245 69.9813 81.5198 0.956968 1.61337L2.21072 0.529817C141.136 161.361 334.644 247.556 547.055 243.27L547.088 244.928C441.553 247.061 340.421 226.939 246.521 185.104Z"
                      fill="#474747"
                    />
                  </svg>
                </foreignObject>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailEvent;
