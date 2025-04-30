import React from "react";

const Nav = () => {
  return (
    <div className="p-3">
      <div
        className="bg-white p-0 nav navbar shadow-sm sticky-top"
        id="navInner"
        style={{
          borderRadius: "50px",
          height: "50px",
        }}
      >
        <img
          style={{
            maxHeight: "30px",
          }}
          src="/TestLogo.svg"
          alt="HealtCare Dashboard Logo"
          className="img-fluid ms-3 my-auto"
        />

        {/* Mid Sect */}
        <div className="mx-auto">
          <div className="d-flex">
            <div className="p-2">
              <button
                style={{
                  fontSize: ".9em",
                }}
                className="btn btn-round fw-bold"
              >
                Overview
              </button>
            </div>
            <div className="p-2">
              <button
                style={{
                  fontSize: ".9em",
                  borderRadius: "50px",
                }}
                className="themebg btn btn-round  fw-bold"
              >
                Patients
              </button>
            </div>
            <div className="p-2">
              <button
                style={{
                  fontSize: ".9em",
                }}
                className="btn btn-round  fw-bold"
              >
                Schedule
              </button>
            </div>
            <div className="p-2">
              <button
                style={{
                  fontSize: ".9em",
                }}
                className="btn btn-round  fw-bold"
              >
                Message
              </button>
            </div>
            <div className="p-2">
              <button
                style={{
                  fontSize: ".9em",
                }}
                className="btn btn-round  fw-bold"
              >
                Transaction
              </button>
            </div>
          </div>
        </div>

        <div className="">
          <div className="d-flex">
            {/* User Image Ico */}
            <div className="px-2 my-auto">
              <img
                src="/senior-woman.png"
                style={{
                  width: "40px",
                }}
                className="img-fluid"
              />
            </div>

            {/* User Details flex */}
            <div className="pe-2 my-auto">
              <div className="small fw-bold">Dr. Jose Simmons</div>
              <div
                className="small"
                style={{
                  fontSize: ".8em",
                }}
              >
                General Practitioner
              </div>
            </div>

            {/* Divider */}
            <div
              className="border-start px-1"
              style={{
                maxHeight: "40px",
              }}
            ></div>

            {/* Opptions Icos */}
            <div className="d-flex pe-3">
              <img
                src="/settings.svg"
                style={{
                  height: "20px",
                }}
                className="img-fluid px-1 my-auto"
              />
              <div className="pe-2 ps-2 my-auto">
                <img
                  src="/more_vert.svg"
                  style={{
                    height: "15px",
                    position: "relative",
                    bottom: "1px",
                  }}
                  className="img-fluid my-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
