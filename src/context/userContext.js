import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [currentpage, setCurrentPage] = useState(1);
  // const [iduser, setIdUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const url = `https://randomuser.me/api/?inc=name,gender,picture,email,location,dob,login&page=${currentpage}&results=10&seed=foobar`;

      const res = await axios.get(url);

      setUser(res.data.results);
    };
   

    getUser();
  }, [currentpage]);

  const previousPage = () => {
    const newCurrentPage = currentpage - 1;
    if (newCurrentPage === 0) return;

    setCurrentPage(newCurrentPage);
  };

  const nextPage = () => {
    const newCurrentPage = currentpage + 1;
    setCurrentPage(newCurrentPage);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        currentpage,
        previousPage,
        nextPage,
        setUser
        
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
