import { Button } from 'antd'
import React from 'react'

function Header() {
  return (
    <>
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
              <Button
                className="custom-buttonn me-3 fw-bold"
                type="text"
                style={{ color: "white" }}
              >
                Trang chủ
              </Button>

              <Button
                className="custom-buttonn mx-5 fw-bold"
                type="text"
                style={{ color: "white" }}
              >
                Sự kiện
              </Button>

              <Button
                className="custom-buttonn ms-3 fw-bold"
                type="text"
                style={{ color: "white" }}
              >
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
                <small>03955838434</small>
              </label>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
