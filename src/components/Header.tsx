import { Button } from "antd";
import Link from "antd/es/typography/Link";
import { url } from "inspector";
import React from "react";
import { useLocation } from "react-router-dom";
function Header() {
  const location = useLocation();

  function getButtonClassName(path: string, buttonType: string) {
    if (path === "/home" && buttonType === "home") {
      return "custom-buttonn2";
    } 
    else if (path === "/event" && buttonType === "event") {
      return "custom-buttonn2";
    }
    else if (path === "/contact" && buttonType === "contact") {
      return "custom-buttonn2";
    }
    else{
      return "custom-buttonn";
    }
  }

  return (
    <>
      <header className="headerMain shadow-lg" style={{ color: "white" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-4 " style={{ marginLeft: 60 }}>
              <Link href="/home">
              <img
                src="../../image/header/Little&LittleLogo.png"
                alt=""
                style={{ width: 175 }}
                className=""
              />
              </Link>
            </div>
            <div className="col mt-3">
              <Button
                className={
                  getButtonClassName(location.pathname, "home") +
                  " me-3 fw-bold"
                }
                type="text"
                style={{ color: "white" }}
                href="/home"
              >
                Trang chủ
              </Button>

              <Button
                className={
                  getButtonClassName(location.pathname, "event") +
                  " me-3 fw-bold"
                }
                type="text"
                style={{ color: "white" }}
                href="/event"
              >
                Sự kiện
              </Button>

              <Button
                className={
                  getButtonClassName(location.pathname, "contact") +
                  " me-3 fw-bold"
                }
                type="text"
                style={{ color: "white" }}
                href="/contact"
              >
                Liên hệ
              </Button>
            </div>
            <div className="col-3 me-5 pe-5 mt-1">
              <label className="d-flex align-items-center justify-content-center mt-3 fw-bold">
                <img
                  src="../../image/header/phone.png"
                  alt=""
                  className="me-2"
                  style={{ width: 20 }}
                />{" "}
                <small>03955838434</small>
              </label>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
