import React, { useState, useEffect } from "react";
import { fetchTemperature } from "./queries";

const useTemperature = () => {
  const [temperature, setTemperature] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const _fetchTemperature = async () => {
      setTemperature(await fetchTemperature());
      setIsLoading(false);
    };
    _fetchTemperature();
  }, []);
  return [temperature, isLoading];
};

const Temperature = () => {
  const [temperature, isTemperatureLoading] = useTemperature();
  if (isTemperatureLoading) {
    return <div>loading</div>;
  }
  return <div>{temperature}</div>;
};

export default Temperature;
