import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_ENDPOINT_API;

const useAxios = (params) => {
  const [res, setRes] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (param) => {
    setLoading(true);
    try {
      const response = await axios.request(param);
      setRes(response.data);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(params);
  }, []);

  return { res, error, loading };
};

export default useAxios;
