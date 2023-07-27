import React, { useState } from "react";
import "../assets/style.css";
import { Button, Form, Input, Select } from "antd";
import Header from "../components/Header";

function Event() {
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
                <foreignObject x="50" y="280" width="1700" height="700">
                  <div className="row mx-2">
                    <div className="col">
                      <div className="card" style={{ width: 370, height: 500 }}>
                        <img
                          src="../image/Rectangle.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h3 className="card-title">Sự kiện 1</h3>
                          <span className="card-text">Đầm sen Park</span>
                          <div className="d-flex my-2 pb-2">
                            <img src="../image/calendar2.png" alt="" />
                            <span>30/05/2022 - 02/06/2022</span>
                          </div>
                          <h2 style={{ color: "#FA7D09", fontWeight: "bold" }}>
                            <span>25.000</span> VNĐ
                          </h2>

                          <Button
                            href="#"
                            className="custom-button"
                            style={{
                              width: 200,
                              height: 40,
                              background: "#FF000A",
                            }}
                          >
                            <span className="fw-bold fs-5 text-white">
                              Xem chi tiết
                            </span>
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card" style={{ width: 370, height: 500 }}>
                        <img
                          src="../image/Rectangle3.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h3 className="card-title">Sự kiện 1</h3>
                          <span className="card-text">Đầm sen Park</span>
                          <div className="d-flex my-2 pb-2">
                            <img src="../image/calendar2.png" alt="" />
                            <span>30/05/2022 - 02/06/2022</span>
                          </div>
                          <h2 style={{ color: "#FA7D09", fontWeight: "bold" }}>
                            <span>25.000</span> VNĐ
                          </h2>

                          <Button
                            href="/event/detail"
                            className="custom-button"
                            style={{
                              width: 200,
                              height: 40,
                              background: "#FF000A",
                            }}
                          >
                            <span className="fw-bold fs-5 text-white">
                              Xem chi tiết
                            </span>
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card" style={{ width: 370, height: 500 }}>
                        <img
                          src="../image/Rectangle.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h3 className="card-title">Sự kiện 1</h3>
                          <span className="card-text">Đầm sen Park</span>
                          <div className="d-flex my-2 pb-2">
                            <img src="../image/calendar2.png" alt="" />
                            <span>30/05/2022 - 02/06/2022</span>
                          </div>
                          <h2 style={{ color: "#FA7D09", fontWeight: "bold" }}>
                            <span>25.000</span> VNĐ
                          </h2>

                          <Button
                            href="/event/detail"
                            className="custom-button"
                            style={{
                              width: 200,
                              height: 40,
                              background: "#FF000A",
                            }}
                          >
                            <span className="fw-bold fs-5 text-white">
                              Xem chi tiết
                            </span>
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card" style={{ width: 370, height: 500 }}>
                        <img
                          src="../image/Rectangle2.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h3 className="card-title">Sự kiện 1</h3>
                          <span className="card-text">Đầm sen Park</span>
                          <div className="d-flex my-2 pb-2">
                            <img src="../image/calendar2.png" alt="" />
                            <span>30/05/2022 - 02/06/2022</span>
                          </div>
                          <h2 style={{ color: "#FA7D09", fontWeight: "bold" }}>
                            <span>25.000</span> VNĐ
                          </h2>
                          <Button
                            href="/event/detail"
                            className="custom-button"
                            style={{
                              width: 200,
                              height: 40,
                              background: "#FF000A",
                            }}
                          >
                            <span className="fw-bold fs-5 text-white">
                              Xem chi tiết
                            </span>
                          </Button>
                        </div>
                      </div>
                    
                    </div>
                    
                  </div>
                </foreignObject>

               
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
                  x="550"
                  y="50"
                  width="1500"
                  height="500"
                  className="svg-container"
                >
                  <div className="row">
                    <div className="col d-flex align-items-center">
                      <h1 style={{ fontSize: 100, color: "white", fontWeight: "bold" }}>Sự kiện nổi bật</h1>
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

export default Event;
