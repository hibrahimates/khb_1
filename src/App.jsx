import React, { useState, useEffect } from 'react';
import ManualForm from './components/ManualForm';
import ManualTable from './components/ManualTable';
import { fetchItems, createItem, deleteItem } from './api';

export default function App() {
  const [items, setItems] = useState([]);

  const loadItems = async () => {
    try {
      const data = await fetchItems();
      setItems(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadItems();
  }, []);

  const addItem = async (formData) => {
    try {
      await createItem(formData);
      loadItems();
    } catch (err) {
      console.error(err);
    }
  };

  const removeItem = async (id) => {
    try {
      await deleteItem(id);
      loadItems();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen p-4 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-4xl mx-auto space-y-4">
        <h1 className="text-2xl font-bold">Bina Kullanım Kılavuzu Toplama</h1>
        <ManualForm addItem={addItem} />
        <ManualTable items={items} removeItem={removeItem} />
      </div>
    </div>
  );
}
