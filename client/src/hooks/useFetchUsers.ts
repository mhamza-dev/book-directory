import axios from "axios";
import userStore from "../store/userStore";
import { useEffect } from "react";

const useFetchUsers = () => {
  const { updateUsersList } = userStore();
  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/users");
      updateUsersList(response.data);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
};

export default useFetchUsers;
