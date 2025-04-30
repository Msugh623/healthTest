import React, { useState } from "react";
import { FaCaretDown, FaCaretUp, FaChevronDown } from "react-icons/fa";
import { useStatecontext } from "../state/Statecontext";

const ViewPort = () => {
  const { thePatient, vitals } = useStatecontext();
  const history = thePatient?.diagnosis_history || [];
  const mostRecent = history[history.length - 1];
  const [slice, setSlice] = useState(6);

  return (
    <div className="container">
      <div
        className="row"
        style={{
          width: "",
        }}
      >
        <div className="col-md-8 pt-3 ps-3 pb-3">
          <div
            className="bg-white shadow-sm p-3"
            style={{
              borderRadius: "15px",
            }}
          >
            <h5 className="fw-bold mb-4">Diagnosis History</h5>
            <div
              className="d-flex p-3"
              style={{
                backgroundColor: "#F4F0FE",
                borderRadius: "15px",
              }}
            >
              <div className="w-75">
                <h6 className="mb-3 d-flex ">
                  <div className="fw-bold">Blood Pressure</div>
                  <div className="ms-auto small">
                    <select
                      style={{
                        border: "none",
                        outline: "none",
                      }}
                      name="slice"
                      id="slicer"
                      onChange={({ target }) => {
                        setSlice(Number(target.value));
                      }}
                    >
                      <option value="6">Last 6 Months</option>
                      <option value="12">Last 1 Year</option>
                      <option value="24">Last 2 Years</option>
                    </select>
                  </div>
                </h6>
                <BloodPressureChart
                  key={
                    "char" +
                    thePatient?.name +
                    thePatient?.phone_number +
                    thePatient?.profile_picture
                  }
                  slice={slice}
                />
              </div>
              <div className="w-25">
                {/* Systolic Pressure */}
                <div className="px-3 pt-0 d-flex">
                  <div
                    className="my-auto"
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "#E66FD2",
                    }}
                  ></div>
                  <span className="small mb-auto ms-2">Systolic</span>
                </div>
                <div className="py-2 px-3 pe-1 ">
                  <h5 className="fw-bold">
                    {mostRecent?.blood_pressure?.systolic?.value}
                  </h5>
                  <div
                    style={{
                      fontSize: ".7em",
                    }}
                  >
                    {" "}
                    {mostRecent?.blood_pressure?.systolic?.levels == "Normal" ||
                    mostRecent?.blood_pressure?.systolic?.levels ==
                      "Lower than Average" ? (
                      <FaCaretDown className="" />
                    ) : (
                      <FaCaretUp className="" />
                    )}{" "}
                    {mostRecent?.blood_pressure?.systolic?.levels}
                  </div>
                </div>
                {/* Devider */}
                <div className="mx-3 border-bottom my-2"></div>

                {/* Diastolic */}
                <div className="px-3 pt-0 d-flex">
                  <div
                    className="my-auto"
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "#8C6FE6",
                    }}
                  ></div>
                  <span className="small mb-auto ms-2">Diastolic</span>
                </div>
                <div className="py-2 px-3 pe-1 ">
                  <h5 className="fw-bold">
                    {mostRecent?.blood_pressure?.diastolic?.value}
                  </h5>
                  <div
                    style={{
                      fontSize: ".7em",
                    }}
                  >
                    {" "}
                    {mostRecent?.blood_pressure?.diastolic?.levels ==
                      "Normal" ||
                    mostRecent?.blood_pressure?.diastolic?.levels ==
                      "Lower than Average" ? (
                      <FaCaretDown className="" />
                    ) : (
                      <FaCaretUp className="" />
                    )}{" "}
                    {mostRecent?.blood_pressure?.diastolic?.levels}
                  </div>
                </div>
              </div>
              {/* Blood Pressure End */}
            </div>
            {/* Vitals Start */}
            <div className="row mt-4">
              <div className="col-4">
                <div
                  className="p-2"
                  style={{
                    backgroundColor: "#E0F3FA",
                    borderRadius: "15px",
                  }}
                >
                  <img
                    src="/resRate.svg"
                    alt=""
                    className="img img-fluid w-50 pe-3 p-2 ps-1"
                  />
                  <div className="p-2">
                    <small>Respiratory Rate</small>
                    <h5 className="fw-bold">
                      {vitals?.resPiratoryRate?.value} bpm
                    </h5>
                    <div
                      style={{
                        fontSize: ".7em",
                      }}
                    >
                      {vitals?.resPiratoryRate?.levels == "Normal" ||
                      vitals?.resPiratoryRate?.levels ==
                        "Lower than Average" ? (
                        <FaCaretDown className="" />
                      ) : (
                        <FaCaretUp className="" />
                      )}{" "}
                      {vitals?.resPiratoryRate?.levels}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div
                  className="p-2"
                  style={{
                    backgroundColor: "#FFE6E9",
                    borderRadius: "15px",
                  }}
                >
                  <img
                    src="/temperature.svg"
                    alt=""
                    className="img img-fluid w-50 pe-3 p-2 ps-1"
                  />
                  <div className="p-2">
                    <small>Temperature</small>
                    <h5 className="fw-bold">{vitals?.temperature.value}°c</h5>
                    <div
                      style={{
                        fontSize: ".7em",
                      }}
                    >
                      {vitals?.temperature.levels == "Normal" ||
                      vitals?.temperature.levels == "Lower than Average" ? (
                        <FaCaretDown className="" />
                      ) : (
                        <FaCaretUp className="" />
                      )}
                      {vitals?.temperature.levels}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div
                  className="p-2"
                  style={{
                    backgroundColor: "#FFE6E9",
                    borderRadius: "15px",
                  }}
                >
                  <img
                    src="/HeartBPM.svg"
                    alt=""
                    className="img img-fluid w-50 pe-3 p-2 ps-1"
                  />
                  <div className="p-2">
                    <small>Respiratory Rate</small>
                    <h5 className="fw-bold">{vitals?.heartRate?.value} bpm</h5>
                    <div
                      style={{
                        fontSize: ".7em",
                      }}
                    >
                      {vitals?.heartRate?.levels == "Normal" ||
                      vitals?.heartRate?.levels == "Lower than Average" ? (
                        <FaCaretDown className="" />
                      ) : (
                        <FaCaretUp className="" />
                      )}
                      {vitals?.heartRate?.levels}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-white mt-4 shadow-sm p-3"
            style={{
              borderRadius: "15px",
            }}
          >
            <div className="h5 fw-bold"> Diagnosis List</div>
            <div className="pt-3">
              <table className="table-responsive w-100 ">
                <thead
                  className="p-3 "
                  style={{
                    backgroundColor: "#E0F3FA",
                    borderRadius: "15px",
                  }}
                >
                  <th className="p-2">Problem/Diagnosis</th>
                  <th className="p-2">Description</th>
                  <th className="p-2">Status</th>
                </thead>
                <tbody
                  style={{
                    maxHeight: "250px",
                    overflow: "auto"
                  }}
                >
                  {(thePatient?.diagnostic_list || []).map((pat, i) => (
                    <tr className="" key={"" + i + "dhug"}>
                      <td className="small px-2 py-2">{pat?.name}</td>
                      <td className="small px-2 py-2">{pat?.description}</td>
                      <td className="small px-2 py-2">{pat?.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-md-4">{<Sider />}</div>
      </div>
    </div>
  );
};

export default ViewPort;

function Sider() {
  const { thePatient } = useStatecontext();
  return (
    <div
      className="p-3 pe-2 ps-1"
      style={{
        minWidth: "",
      }}
    >
      <div
        className="bg-white py-3 shadow-sm"
        style={{
          borderRadius: "15px",
        }}
      >
        <div className=" d-flex flex-column px-3 mb-2">
          <span className="fw-bold fs-5">Patients</span>

          <img
            src={thePatient?.profile_picture}
            alt=""
            className="img-fluid w-75 mx-auto mt-3"
            style={{}}
          />
          <div className="fw-bold mx-auto mt-3">{thePatient?.name}</div>
          <div className="inf mt-4">
            <div className="d-flex pb-4">
              <div className="px-2 pe-3 my-auto">
                <img
                  src="/BirthIcon.svg"
                  style={{
                    width: "40px",
                  }}
                  className="img-fluid"
                />
              </div>

              {/* User Details flex */}
              <div className="my-auto">
                <div
                  className="small"
                  style={{
                    fontSize: ".8em",
                  }}
                >
                  Date Of Birth
                </div>
                <div className="small fw-bold">{thePatient?.date_of_birth}</div>
              </div>
            </div>
            <div className="d-flex pb-4">
              <div
                className="px-3 pe-4  my-auto d-flex"
                style={
                  {
                    // width:'40px'
                  }
                }
              >
                <BsGenderAmbiguous className="ms-auto" fontSize={"20px"} />
              </div>

              {/* User Details flex */}
              <div className=" my-auto">
                <div
                  className="small "
                  style={{
                    fontSize: ".8em",
                  }}
                >
                  Gender
                </div>
                <div className="small fw-bold">{thePatient?.gender}</div>
              </div>
            </div>

            <div className="d-flex pb-4">
              <div className="px-2 pe-3 my-auto">
                <img
                  src="/PhoneIcon.svg"
                  style={{
                    width: "40px",
                  }}
                  className="img-fluid"
                />
              </div>

              {/* User Details flex */}
              <div className="my-auto">
                <div
                  className="small"
                  style={{
                    fontSize: ".8em",
                  }}
                >
                  Contact Info.
                </div>
                <div className="small fw-bold">{thePatient?.phone_number}</div>
              </div>
            </div>

            <div className="d-flex pb-4">
              <div className="px-2 pe-3 my-auto">
                <img
                  src="/PhoneIcon.svg"
                  style={{
                    width: "40px",
                  }}
                  className="img-fluid"
                />
              </div>

              {/* User Details flex */}
              <div className="my-auto">
                <div
                  className="small"
                  style={{
                    fontSize: ".8em",
                  }}
                >
                  Emergency Contact
                </div>
                <div className="small fw-bold">
                  {thePatient?.emergency_contact}
                </div>
              </div>
            </div>

            <div className="d-flex pb-4">
              <div className="px-2 pe-3 my-auto">
                <img
                  src="/InsuranceIcon.svg"
                  style={{
                    width: "40px",
                  }}
                  className="img-fluid"
                />
              </div>

              {/* User Details flex */}
              <div className="my-auto">
                <div
                  className="small"
                  style={{
                    fontSize: ".8em",
                  }}
                >
                  Insurance Provider
                </div>
                <div className="small fw-bold">
                  {thePatient?.insurance_type}
                </div>
              </div>
            </div>
            <div className="d-flex mt-2">
              <button
                className="btn btn-small mx-auto small themebg"
                style={{
                  borderRadius: "30px",
                }}
              >
                <small> Show all information</small>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-white py-3 mt-4 shadow-sm"
        style={{
          borderRadius: "15px",
        }}
      >
        <div className=" d-flex flex-column px-3 pe-1 mb-2">
          <span className="fw-bold fs-5">Lab Results</span>
          <div
            className="pe-2"
            style={{
              maxHeight: "250px",
              height: "250px",
              overflow: "auto",
            }}
          >
            {(thePatient?.lab_results || []).map((r, i) => (
              <>
                <div className="d-flex py-2 pt-3">
                  {r}{" "}
                  <div className="ms-auto ps-3">
                    <img
                      src="/download.svg"
                      alt=""
                      className="img-fluid"
                      style={{ width: "15px" }}
                      onClick={() => {
                        const blob = new Blob([
                          "**" +
                            r +
                            "**" +
                            "\n No " +
                            r +
                            " data recorded for this patient",
                        ]);
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement("a");
                        a.download =
                          "" + thePatient?.name + "_" + r + "_Result.txt";
                        a.type = "text/plain";
                        a.href = url;
                        document.body.appendChild(a);
                        a.click();
                        document.body.removeChild(a);
                      }}
                    />
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { BsGenderAmbiguous } from "react-icons/bs";

const BloodPressureChart = ({slice}) => {
  const {chartData} = useStatecontext();
  return (
    <div style={{ width: "", height: 250 }}>
      <ResponsiveContainer>
        <LineChart data={chartData.slice(chartData?.length-(slice+1))}>
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <XAxis dataKey="month" />
          <YAxis domain={[60, 180]} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="systolic"
            stroke="#c61aff"
            name="Systolic"
          />
          <Line
            type="monotone"
            dataKey="diastolic"
            stroke="#5247ff"
            name="Diastolic"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
