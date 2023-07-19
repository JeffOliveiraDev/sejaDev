"use client";
import React, { useState, useEffect, useReducer, createContext } from "react";
import { ContextInterfaces, ItemInterface } from "./interfaces";
import { api } from "@/services/api";

const Context = createContext({} as ContextInterfaces);

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<ItemInterface[]>([]);
  const [selectedItem, setSelectedItem] = useState("CSS");
  const [selectedItemId, setSelectedItemId] = useState<string | undefined>();
  const [itemToRender, setItemToRender] = useState<ItemInterface | null>();
  const [loading, setLoading] = useState(true);
  const [libraryToRender, setLibraryToRender] = useState<any>();
  const [frameworkToRender, setFrameworkToRender] = useState<any>();
  const [toolsToRender, setToolsToRender] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await api.get("/item");
      setItems(response.data);
      setLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const itemId: ItemInterface | undefined = items.find(
      (item: { name: string }) => {
        return item.name === selectedItem;
      }
    );

    if (itemId) {
      setSelectedItemId(itemId.id);
      setItemToRender(itemId);
      setLibraryToRender(itemId.Library);
      setFrameworkToRender(itemId.Framework);
      setToolsToRender(itemId.Tool);
    }
  }, [items, selectedItem]);

  console.log(selectedItem, selectedItemId, items);

  const props = {
    items,
    selectedItem,
    setSelectedItem,
    selectedItemId,
    loading,
    setLoading,
    libraryToRender,
    setLibraryToRender,
    frameworkToRender,
    toolsToRender,
  };

  return <Context.Provider value={props}>{children}</Context.Provider>;
};

export { Context, Provider };
