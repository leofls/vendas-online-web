import axios from "axios";
import { useState } from "react";
import { useGlobalContext } from "./useGlobalContext";
import { connectionAPIPost } from "../functions/connetion/connectionAPI";

export const useRequests = () => {
  const [loading, setLoading] = useState(false);
  const { setNotification } = useGlobalContext();

  const getRequest = async (url: string) => {
    setLoading(true);

    return await axios({
      method: "get",
      url: url,
    })
      .then((result) => {
        return result.data;
      })
      .catch(() => {
        setNotification("Senha Inválida!", "error");
        // alert("Erro!")
      });
  };
  const postRequest = async (url: string, body: unknown) => {
    setLoading(true);

    const returnData = await connectionAPIPost<T>(url, body)
      .then((result) => {
        setNotification("Entrando...", "success");

        return result;
      })
      .catch((error: Error) => {
        // alert("Erro!")
        setNotification(error.message, "error");
      });

    setLoading(false);

    return returnData;
  };

  return {
    loading,
    getRequest,
    postRequest,
  };
};
