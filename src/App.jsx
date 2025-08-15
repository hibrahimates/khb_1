import React, { useState, useEffect } from 'react';
import ManualForm from './components/ManualForm';
import ManualTable from './components/ManualTable';
import Login from './Login';
import { fetchItems, createItem, deleteItem, updateItem } from './api';
import { auth } from './firebase';
import { onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js';

export default function App() {
  const [items, setItems] = useState([]);
  const [editing, setEditing] = useState(null);
  const [user, setUser] = useState(null);

  const loadItems = async () => {
    try {
      const data = await fetchItems();
      setItems(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      if (u) {
        loadItems();
      } else {
        setItems([]);
      }
    });
    return () => unsub();
  }, []);

  const addItem = async (formData) => {
    try {
      await createItem(formData);
      loadItems();
    } catch (err) {
      console.error(err);
    }
  };

  const saveItem = async (id, formData) => {
    try {
      await updateItem(id, formData);
      loadItems();
      setEditing(null);
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

  const startEdit = (item) => setEditing(item);
  const cancelEdit = () => setEditing(null);

  if (!user) {
    return <Login />;
  }

  return (
    <div className="min-h-screen p-4 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-4xl mx-auto space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Bina Kullanım Kılavuzu Toplama</h1>
          <button onClick={() => signOut(auth)} className="text-sm text-red-600">Çıkış</button>
        </div>
        <ManualForm
          addItem={addItem}
          editingItem={editing}
          saveItem={saveItem}
          cancelEdit={cancelEdit}
        />
        <ManualTable items={items} removeItem={removeItem} editItem={startEdit} />
      </div>
    </div>
  );
}
