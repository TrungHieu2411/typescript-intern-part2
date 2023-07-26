import React from "react";
import "../assets/style.css";
import { Button, Col, Form, Input, Row, Select } from "antd";
function Home() {
  return (
    <div style={{ background: "#FF7F0E" }}>
      <header style={{ background: "#ED7200", color: "white" }}>
      <div className="container">
      <div className="row align-items-center">
        <div className="col-4 ms-5 ps-5">
          <img
            src="../image/Little&LittleLogo.png"
            alt=""
            style={{ width: 125 }}
            className="mt-1"
          />
        </div>
        <div className="col mt-3">
          <Button className="custom-buttonn me-3 fw-bold" type="text" style={{ color: "white" }}>
            Trang chủ
          </Button>
        
          <Button className="custom-buttonn mx-5 fw-bold" type="text" style={{ color: "white" }}>
            Sự kiện
          </Button>
      
          <Button className="custom-buttonn ms-3 fw-bold" type="text" style={{ color: "white" }}>
            Liên hệ
          </Button>
        </div>
        <div className="col-3 me-5 pe-5 mt-1">
          <label className="d-flex align-items-center justify-content-center mt-3">
            <img
              src="../image/phone.png"
              alt=""
              className="me-2"
              style={{ width: 20 }}
            />{" "}
           <small>
           03955838434
           </small>
          </label>
        </div>
      </div>
    </div>
      </header>
      <div style={{ height: 668 }}>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1784 957"
                fill="none"
                width="1230"
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

                <foreignObject x="100" y="30" width="500" height="200">
                  <div className="d-flex align-items-center">
                    <img
                      src="../image/logoDamSen.png"
                      alt=""
                      className="me-4"
                    />
                    <h1 className="fw-bold damsen">ĐẦM SEN PARK</h1>
                  </div>
                </foreignObject>
                {/* //màu xanh */}
                <foreignObject x="730" y="80" width="2000" height="550">
                  <div className="row">
                    <div className="col d-flex align-items-center">
                      <img
                        src="../image/18452.png"
                        alt=""
                        style={{ width: 144, height: 205 }}
                      />
                    </div>
                  </div>
                </foreignObject>
                {/* //màu xanh */}
                {/* //màu hông? */}
                <foreignObject x="-50" y="200" width="2000" height="550">
                  <div className="row">
                    <div className="col d-flex align-items-center">
                      <img
                        src="../image/18453.png"
                        alt=""
                        style={{ width: 147.368, height: 210 }}
                      />
                    </div>
                  </div>
                </foreignObject>
                {/* //màu hông? */}
                {/* //màu xanh */}
                <foreignObject x="550" y="795" width="2000" height="550">
                  <div className="row">
                    <div className="col d-flex align-items-center">
                      <img
                        src="../image/18454.png"
                        alt=""
                        style={{ width: 150, height: 230 }}
                      />
                    </div>
                  </div>
                </foreignObject>
                {/* //màu xanh */}
                <foreignObject x="180" y="250" width="1600" height="600">
                  <div className="row">
                    <div className="col">
                      {/* svg one  */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="980"
                        height="585"
                        viewBox="0 0 950 585"
                        fill="none"
                        className="svg-item"
                      >
                        <path
                          d="M39.3318 584.318C17.6536 584.318 0 566.157 0 543.856V40.4622C0 18.1296 17.6536 0 39.3318 0H910.668C932.377 0 950 18.1609 950 40.4622V543.856C950 566.188 932.346 584.318 910.668 584.318H39.3318Z"
                          fill="#FDE8B3"
                        />
                        <foreignObject x="15" y="12" width="920" height="560">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="920"
                            height="560"
                            viewBox="0 0 920 560"
                            fill="none"
                          >
                            <path
                              d="M898.668 559.771H27.3318C12.3308 559.771 0.195908 547.256 0.195908 531.855V28.4614C0.195908 13.0293 12.3613 0.545654 27.3318 0.545654H898.668C913.669 0.545654 925.804 13.0607 925.804 28.4614V531.855C925.804 547.287 913.669 559.771 898.668 559.771Z"
                              fill="#FFF6D4"
                            />
                          </svg>
                        </foreignObject>
                        <foreignObject x="10" y="10" width="930" height="563">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="930"
                            height="563"
                            viewBox="0 0 930 563"
                            fill="none"
                          >
                            <path
                              d="M900.668 560.771H29.3318C14.3308 560.771 2.19591 548.256 2.19591 532.855V29.4614C2.19591 14.0293 14.3613 1.54565 29.3318 1.54565H900.668C915.669 1.54565 927.804 14.0607 927.804 29.4614V532.855C927.804 548.287 915.669 560.771 900.668 560.771Z"
                              stroke="#FFB489"
                              stroke-width="3"
                              stroke-miterlimit="2.61313"
                              stroke-linecap="round"
                              stroke-dasharray="10 10"
                            />
                          </svg>
                        </foreignObject>
                        <foreignObject x="0" y="40" width="930" height="563">
                          <div className="container">
                            <div className="row mx-5 px-3">
                              <p style={{ fontSize: 24 }}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Suspendisse ac mollis justo.
                                Etiam volutpat tellus quis risus volutpat, ut
                                posuere ex facilisis.
                              </p>
                              <p style={{ fontSize: 24 }}>
                                Suspendisse iaculis libero lobortis condimentum
                                gravida. Aenean auctor iaculis risus, lobortis
                                molestie lectus consequat a.
                              </p>
                            </div>
                            <div className="row row-cols-1 ms-5 ps-5">
                              <div className="col ms-3 ps-5 me-5 pe-5 mt-4">
                                <h3 style={{ fontSize: 24 }} className="d-flex">
                                  <img src="../image/start.png" alt="" />{" "}
                                  <span className="mt-2 ms-2">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                  </span>
                                </h3>
                              </div>
                              <div className="col ms-3 ps-5 me-5 pe-5 mb-2">
                                <h3 style={{ fontSize: 24 }} className="d-flex">
                                  <img src="../image/start.png" alt="" />{" "}
                                  <span className="mt-2 ms-2">
                                    {" "}
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                  </span>
                                </h3>
                              </div>
                              <div className="col ms-3 ps-5 me-5 pe-5 mb-2">
                                <h3 style={{ fontSize: 24 }} className="d-flex">
                                  <img src="../image/start.png" alt="" />{" "}
                                  <span className="mt-2 ms-2">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                  </span>
                                </h3>
                              </div>
                              <div className="col ms-3 ps-5 me-5 pe-5 mb-4">
                                <h3 style={{ fontSize: 24 }} className="d-flex">
                                  <img src="../image/start.png" alt="" />{" "}
                                  <span className="mt-2 ms-2">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                  </span>
                                </h3>
                              </div>
                            </div>
                          </div>
                        </foreignObject>
                      </svg>
                    </div>
                  </div>
                </foreignObject>
                <foreignObject x="-85" y="415" width="500" height="550">
                  <div className="row">
                    <div className="col d-flex align-items-center">
                      <img
                        src="../image/Lisa_Arnold.png"
                        alt=""
                        style={{ width: 400, height: 540 }}
                      />
                    </div>
                  </div>
                </foreignObject>
              </svg>
            </div>

            <div className="col-6 svg-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="320"
                height={665}
                viewBox="0 0 489 900"
                fill="none"
              >
                <g opacity="0.3">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M488.941 0.109924C488.941 0.109924 491.251 359.453 274.413 693.552L300.75 710.336C300.75 710.336 202.653 896.017 0.103149 953.088L46.0632 951.423C46.0453 951.442 464.037 839.042 488.941 0.109924Z"
                    fill="#FFC500"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_194_278"
                    x1="0.0993895"
                    y1="476.607"
                    x2="488.935"
                    y2="476.607"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.00558659" stop-color="#DB5098" />
                    <stop offset="1" stop-color="#FFFED1" />
                  </linearGradient>
                </defs>
                {/* //màu đỏ */}
                <foreignObject x="80" y="-70" width="2000" height="550">
                  <div className="row">
                    <div className="col d-flex align-items-center">
                      <img
                        src="../image/18451.png"
                        alt=""
                        style={{ width: 117, height: 174 }}
                      />
                    </div>
                  </div>
                </foreignObject>
                {/* //màu đỏ */}
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 907 957"
                fill="none"
                height={660}
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
                <foreignObject x="100" y="-90" width="1000" height="500">
                  <div className="row">
                    <div className="col d-flex align-items-center">
                      <img src="../image/fixhair.png" alt="" />
                    </div>
                  </div>
                </foreignObject>
                {/* khí cầu  */}
                <foreignObject x="700" y="750" width="2000" height="550">
                  <div className="row">
                    <div className="col d-flex align-items-center">
                      <img
                        src="../image/18456.png"
                        alt=""
                        style={{ width: 166, height: 237 }}
                      />
                    </div>
                  </div>
                </foreignObject>
                {/* khí cầu  */}
                {/* //---------card--  */}

                <foreignObject x="205" y="251" width="800" height="800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="600"
                    height="585"
                    viewBox="0 0 600 585"
                    fill="none"
                  >
                    <path
                      d="M43.5713 584.324C19.5227 584.324 0 566.17 0 543.878V40.6962C0 18.3729 19.5565 0.250977 43.5713 0.250977H495.429C519.477 0.250977 539 18.4043 539 40.6962V543.878C539 566.202 519.444 584.324 495.429 584.324H43.5713Z"
                      fill="#FDE8B3"
                    />

                    <foreignObject x="15" y="12" width="510" height="600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="520"
                        height="660"
                        viewBox="0 0 520 660"
                        fill="none"
                      >
                        <path
                          d="M898.668 559.771H27.3318C12.3308 559.771 0.195908 547.256 0.195908 531.855V28.4614C0.195908 13.0293 12.3613 0.545654 27.3318 0.545654H898.668C913.669 0.545654 925.804 13.0607 925.804 28.4614V531.855C925.804 547.287 913.669 559.771 898.668 559.771Z"
                          fill="#FFF6D4"
                        />
                      </svg>
                    </foreignObject>

                    <foreignObject x="12" y="10" width="600" height="600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="515"
                        height="563"
                        viewBox="0 0 515 563"
                        fill="none"
                        className="svg-item"
                      >
                        <path
                          d="M483.429 560.783H31.5713C14.9534 560.783 1.51044 548.273 1.51044 532.879V29.6963C1.51044 14.2707 14.9872 1.79224 31.5713 1.79224H483.429C500.047 1.79224 513.489 14.302 513.489 29.6963V532.879C513.489 548.304 500.047 560.783 483.429 560.783Z"
                          stroke="#FFB489"
                          stroke-width="3"
                          stroke-miterlimit="2.61313"
                          stroke-linecap="round"
                          stroke-dasharray="10 10"
                        />
                      </svg>
                    </foreignObject>
                  </svg>
                </foreignObject>
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <Form>
                        <Form.Item label="Select">
                          <Select>
                            <Select.Option value="demo">Demo</Select.Option>
                          </Select>
                        </Form.Item>
                      </Form>
                    </div>
                  </div>
                </div>
                {/* //-----------  */}
                {/* //----  */}
                <foreignObject x="135" y="250" width="930" height="600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="300"
                    height="600"
                    viewBox="0 0 300 600"
                    fill="none"
                    className="svg-item"
                  >
                    <path
                      d="M139.686 578.711L97.3042 572.472L81.1709 547.233L75.184 542.53V41.2605L81.1709 36.5576L97.3042 11.3185L139.686 5.07928C139.686 5.07928 149.832 0.940703 114.603 0.0314696C85.9604 -0.720999 70.2052 22.6369 70.2052 22.6369C60.4685 34.551 56.7188 37.4668 39.7662 18.4043C22.8135 -0.658295 0 0.0314696 0 0.0314696L29.6513 23.7029L39.7662 42.4833V541.339L29.6513 560.119L0 583.791C0 583.791 22.8451 584.512 39.7662 565.418C56.7188 546.355 60.4685 549.271 70.2052 561.185C70.2052 561.185 85.9604 584.543 114.603 583.791C149.801 582.85 139.686 578.711 139.686 578.711ZM57.2382 519.805C50.4635 519.805 45.0122 514.349 45.0122 507.64C45.0122 500.899 50.495 495.475 57.2382 495.475C63.9815 495.475 69.4643 500.93 69.4643 507.64C69.4958 514.349 64.013 519.805 57.2382 519.805ZM57.2382 483.279C50.4635 483.279 45.0122 477.823 45.0122 471.114C45.0122 464.373 50.495 458.949 57.2382 458.949C63.9815 458.949 69.4643 464.404 69.4643 471.114C69.4958 477.823 64.013 483.279 57.2382 483.279ZM57.2382 448.069C50.4635 448.069 45.0122 442.614 45.0122 435.905C45.0122 429.164 50.495 423.74 57.2382 423.74C63.9815 423.74 69.4643 429.195 69.4643 435.905C69.4958 442.614 64.013 448.069 57.2382 448.069ZM57.2382 411.7C50.4635 411.7 45.0122 406.245 45.0122 399.535C45.0122 392.794 50.495 387.37 57.2382 387.37C63.9815 387.37 69.4643 392.826 69.4643 399.535C69.4958 406.245 64.013 411.7 57.2382 411.7ZM57.2382 376.303C50.4635 376.303 45.0122 370.847 45.0122 364.138C45.0122 357.397 50.495 351.973 57.2382 351.973C63.9815 351.973 69.4643 357.428 69.4643 364.138C69.4958 370.879 64.013 376.303 57.2382 376.303ZM57.2382 340.121C50.4635 340.121 45.0122 334.666 45.0122 327.957C45.0122 321.216 50.495 315.792 57.2382 315.792C63.9815 315.792 69.4643 321.247 69.4643 327.957C69.4958 334.666 64.013 340.121 57.2382 340.121ZM57.2382 304.567C50.4635 304.567 45.0122 299.112 45.0122 292.402C45.0122 285.661 50.495 280.237 57.2382 280.237C63.9815 280.237 69.4643 285.693 69.4643 292.402C69.4958 299.112 64.013 304.567 57.2382 304.567ZM57.2382 268.512C50.4635 268.512 45.0122 263.056 45.0122 256.347C45.0122 249.637 50.495 244.182 57.2382 244.182C63.9815 244.182 69.4643 249.637 69.4643 256.347C69.4643 263.056 64.013 268.512 57.2382 268.512ZM57.2382 232.832C50.4635 232.832 45.0122 227.377 45.0122 220.667C45.0122 213.926 50.495 208.502 57.2382 208.502C63.9815 208.502 69.4643 213.958 69.4643 220.667C69.4958 227.377 64.013 232.832 57.2382 232.832ZM57.2382 196.933C50.4635 196.933 45.0122 191.477 45.0122 184.768C45.0122 178.027 50.495 172.603 57.2382 172.603C63.9815 172.603 69.4643 178.058 69.4643 184.768C69.4958 191.477 64.013 196.933 57.2382 196.933ZM57.2382 161.065C50.4635 161.065 45.0122 155.61 45.0122 148.9C45.0122 142.159 50.495 136.735 57.2382 136.735C63.9815 136.735 69.4643 142.191 69.4643 148.9C69.4958 155.61 64.013 161.065 57.2382 161.065ZM57.2382 125.354C50.4635 125.354 45.0122 119.899 45.0122 113.189C45.0122 106.48 50.495 101.024 57.2382 101.024C63.9815 101.024 69.4643 106.48 69.4643 113.189C69.4643 119.899 64.013 125.354 57.2382 125.354ZM57.2382 89.3298C50.4635 89.3298 45.0122 83.8744 45.0122 77.1649C45.0122 70.4554 50.495 65 57.2382 65C63.9815 65 69.4643 70.4554 69.4643 77.1649C69.4643 83.8744 64.013 89.3298 57.2382 89.3298Z"
                      fill="#FDE8B3"
                    />
                  </svg>
                </foreignObject>
                {/* //----  */}
                <foreignObject x="335" y="230" width="300" height="300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="284"
                    height="77"
                    viewBox="0 0 284 77"
                    fill="none"
                  >
                    <path
                      d="M269.864 59.3984C269.864 59.3984 197.292 76.3383 142 76.3383C81.054 76.3383 14.136 59.3984 14.136 59.3984C6.32603 59.3984 0 53.0765 0 45.2818V16.4187C0 8.6195 6.33057 2.30216 14.136 2.30216L142 0L269.864 2.30216C277.674 2.30216 284 8.62403 284 16.4187V45.2818C284.005 53.0811 277.674 59.3984 269.864 59.3984Z"
                      fill="url(#paint0_linear_194_405)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_194_405"
                        x1="142"
                        y1="-13"
                        x2="143.734"
                        y2="79.8365"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FF000A" />
                        <stop offset="1" stop-color="#C2000B" />
                      </linearGradient>
                    </defs>

                    <foreignObject x="4" y="1" width="277" height="73">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="277"
                        height="73"
                        viewBox="0 0 277 73"
                        fill="none"
                      >
                        <path
                          d="M262.312 56.2447C262.312 56.2447 192.039 72 138.5 72C79.4854 72 14.688 56.2447 14.688 56.2447C7.12556 56.2447 1 50.3649 1 43.1153V16.2706C1 9.01674 7.12995 3.14117 14.688 3.14117L138.5 1L262.312 3.14117C269.874 3.14117 276 9.02096 276 16.2706V43.1153C276.004 50.3691 269.874 56.2447 262.312 56.2447Z"
                          stroke="white"
                          stroke-linecap="round"
                          stroke-dasharray="5 5"
                        />
                      </svg>
                    </foreignObject>
                    <foreignObject x="35" y="15" width="277" height="73">
                      <div className="container">
                        <div className="row">
                          <div className="col-12">
                            <h2 className="fw-bold text-white">VÉ CỦA BẠN</h2>
                          </div>
                        </div>
                      </div>
                    </foreignObject>
                  </svg>
                </foreignObject>

                {/* khí cầu  */}
                <foreignObject x="785" y="300" width="2000" height="550">
                  <div className="row">
                    <div className="col d-flex align-items-center">
                      <img
                        src="../image/18457.png"
                        alt=""
                        style={{ width: 198, height: 283 }}
                      />
                    </div>
                  </div>
                </foreignObject>
                {/* khí cầu  */}
              </svg>
              {/* //------------- */}
              <div className="form-container">
                <div className="row">
                  <div className="col ms-2">
                    <Input
                      className="ip"
                      type="text"
                      style={{ width: 270, height: 40 }}
                      placeholder="Gói gia đình"
                    />
                  </div>
                  <div className="col p-0">
                    <Button className="d-flex text-center button" style={{ width: 40, height: 40, background: "#FFDE32" }}><img src="../image/ArrowDown.png"/></Button>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col ms-2">
                    <Input
                      className="ip"
                      type="text"
                      style={{ width: 100, height: 40 }}
                      placeholder="Số lượng vé"
                    />
                  </div>
                  <div className="col ps-0">
                    <Input
                      className="ip"
                      type="text"
                      style={{ width: 158, height: 40 }}
                      placeholder="Ngày sử dụng"
                    />
                  </div>
                  <div className="col p-0 ">
                    <Button className="d-flex text-center button" style={{ width: 40, height: 40, background: "#FFDE32"  }}><img src="../image/calendar.png"/></Button>
                  </div>
                </div>
                <div className="row">
                  <div className="col ms-2 mt-3">
                    <Input
                      className="ip"
                      type="text"
                      style={{ width: 322, height: 40 }}
                      placeholder="Họ và tên"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col ms-2 mt-3">
                    <Input
                      className="ip"
                      type="text"
                      style={{ width: 322, height: 40 }}
                      placeholder="Số điện thoại"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col ms-2 mt-3">
                    <Input
                      className="ip"
                      type="text"
                      style={{ width: 322, height: 40 }}
                      placeholder="Địa chỉ email"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col ms-2 my-3 text-center">
                    <Button className="custom-button"
                      style={{ width: 250, height: 50, background: "#FF000A" }}
                    >
                      <span className="fw-bold fs-4 text-white">Đặt vé</span>
                    </Button>
                  </div>
                </div>
                {/* //------------- */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
