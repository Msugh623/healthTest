import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../../api/api";
import { dataLocal } from "../assets/localData";

const context = createContext();

const Statecontext = ({ children }) => {
  const [patients, setPatients] = useState([]);
  const [fetchStat, setFetchStat] = useState(false);
  const [thePatient, setThePatient] = useState({});
  const [chartData, setChartData] = useState([]);
  const [vitals, setVitals] = useState([]);
    
  async function getData() {
    setFetchStat(true);
    try {
      const res = await api.get("/");
      setPatients(res.data);
      setThePatient(res?.data[0]);
      setChartData(
        res?.data[0]?.diagnosis_history
          .map((item) => ({
            month: `${item?.month}, ${item?.year}`,
            systolic: item?.blood_pressure?.systolic?.value,
            diastolic: item?.blood_pressure?.diastolic?.value,
          }))
          .flat(2)
      );
      const lv =
        res?.data[0].diagnosis_history[
          res?.data[0].diagnosis_history.length - 1
        ];
      setVitals({
        heartRate: lv?.heart_rate,
        resPiratoryRate: lv?.respiratory_rate,
        temperature: lv?.temperature,
      });
    } catch (err) {
      setFetchStat("$err" + err?.response?.data?.message || err?.message);
      setPatients(dataLocal);
    } finally {
      setThePatient(dataLocal[0]);
      const lv =
        dataLocal[0].diagnosis_history[
          dataLocal[0].diagnosis_history.length - 1
        ];
      setVitals({
        heartRate: lv?.heart_rate,
        resPiratoryRate: lv?.respiratory_rate,
        temperature: lv?.temperature,
      });
      const char = dataLocal[0]?.diagnosis_history
        .map((item) => ({
          month: `${item?.month}, ${item?.year}`,
          systolic: item?.blood_pressure?.systolic?.value,
          diastolic: item?.blood_pressure?.diastolic?.value,
        }))
        .flat(2);
      setChartData(char);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (!thePatient.diagnosis_history) {
      return;
    }
    const lv =
      thePatient.diagnosis_history[thePatient.diagnosis_history.length - 1];
    setVitals({
      heartRate: lv?.heart_rate,
      resPiratoryRate: lv?.respiratory_rate,
      temperature: lv?.temperature,
    });
    setChartData(
      (thePatient?.diagnosis_history || [])
        .map((item) => ({
          month: `${item?.month}, ${item?.year}`,
          systolic: item?.blood_pressure?.systolic?.value,
          diastolic: item?.blood_pressure?.diastolic?.value,
        }))
        .flat(2)
    );
  }, [thePatient, patients]);

  return (
    <context.Provider
      value={{
        patients,
        setPatients,
        fetchStat,
        setFetchStat,
        thePatient,
        setThePatient,
        chartData,
        setChartData,
        vitals,
        setVitals,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default Statecontext;
export const useStatecontext = () => {
  return useContext(context);
};
