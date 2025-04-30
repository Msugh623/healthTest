import React, { useState } from "react";
import { FaCaretDown, FaCaretUp, FaChevronDown } from "react-icons/fa";
import { useStatecontext } from "../state/Statecontext";

const ViewPort = () => {
  const { thePatient} = useStatecontext();
  const history = thePatient?.diagnosis_history || [];
  const mostRecent = history[history.length - 1];
  const [slice,setSlice]=useState(6)

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
                        border: 'none',
                        outline:'none'
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
                <BloodPressureChart key={'char'+thePatient?.name+thePatient?.phone_number+thePatient?.profile_picture} slice={slice} />
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
      className="p-3 ps-1"
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

          <img src={thePatient?.profile_picture} alt="" className="img-fluid" />
          {thePatient?.name}
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
