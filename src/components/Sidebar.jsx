import React from "react";
import { useStatecontext } from "../state/Statecontext";

const Sidebar = () => {
  const { patients, setThePatient, thePatient } = useStatecontext();

  return (
    <div
      className="p-3"
      style={{
        maxWidth: "280px",
        minWidth: "280px",
      }}
    >
      <div
        className="bg-white py-3 shadow-sm"
        style={{
          borderRadius: "15px",
        }}
      >
        <div className=" d-flex px-3 mb-2">
          <span className="fw-bold">Patients</span>
          <span className="ms-auto">
            <img src="/lens.svg" width={"17px"} alt="" className="img-fluid" />
          </span>
        </div>
        <div className="pt-1 pe-1">
          {patients?.length ? (
            <div
              style={{
                maxHeight: "90vh",
                height: "90vh",
                overflow: "auto",
              }}
            >
              {patients.map((pat, index) => (
                <div
                  onClick={() => setThePatient(pat)}
                  className=""
                  style={{
                    cursor: "pointer",
                    backgroundColor:
                      thePatient?.name == pat?.name &&
                      thePatient?.phone_number == pat?.phone_number &&
                      thePatient?.age == pat?.age
                        ? "#D8FCF7"
                        : "",
                  }}
                  key={index + pat?.name + pat?.age + pat.phone_number}
                >
                  <div className="d-flex px-3 py-3">
                    {/* User Image Ico */}
                    <div className=" pe-2">
                      <img
                        src={`${pat?.profile_picture}`}
                        style={{
                          width: "43px",
                        }}
                        className="img-fluid"
                      />
                    </div>

                    {/* User Details flex */}
                    <div className="pe-2 my-auto">
                      <div className="small fw-bold mb-1">{pat?.name}</div>
                      <div
                        className="small"
                        style={{
                          fontSize: ".8em",
                        }}
                      >
                        {pat?.gender}, {pat?.age}
                      </div>
                    </div>
                    <div className="pe-2 ps-2 ms-auto my-auto">
                      <img
                        src="/more_vert.svg"
                        style={{
                          height: "15px",
                          position: "relative",
                          bottom: "1px",
                          rotate: "90deg",
                        }}
                        className="img-fluid my-auto"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              <div className="text-center">No Data</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
