"use client";
import React, { useEffect, useState } from "react";

import { api } from "@/services/api";

const Page = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get("/item");

      setItems(response.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <li>asdfsadfsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</li>
    </div>
  );
};

export default Page;
