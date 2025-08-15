import React, { useState, useEffect, useRef } from 'react';

export default function ManualForm({ addItem, editingItem, saveItem, cancelEdit }) {
  const initial = {
    discipline: '',
    product: '',
    brandModel: '',
    maintenanceCompany: '',
    contact: '',
    notes: '',
    file: null,
    fileUrl: '',
  };
  const [form, setForm] = useState(initial);
  const fileRef = useRef(null);

  useEffect(() => {
    if (editingItem) {
      setForm({
        discipline: editingItem.discipline || '',
        product: editingItem.product || '',
        brandModel: editingItem.brandModel || '',
        maintenanceCompany: editingItem.maintenanceCompany || '',
        contact: editingItem.contact || '',
        notes: editingItem.notes || '',
        file: null,
        fileUrl: editingItem.fileUrl || '',
      });
    } else {
      setForm(initial);
      if (fileRef.current) fileRef.current.value = '';
    }
  }, [editingItem]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFile = (e) => {
    const f = e.target.files[0];
    setForm((prev) => ({ ...prev, file: f || null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.product) return;
    const data = { ...form };
    if (editingItem) {
      await saveItem(editingItem.id, data);
    } else {
      await addItem(data);
    }
    setForm(initial);
    if (fileRef.current) fileRef.current.value = '';
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white dark:bg-gray-800 p-4 rounded shadow">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label htmlFor="discipline" className="text-sm font-medium">Disiplin</label>
          <input
            id="discipline"
            name="discipline"
            value={form.discipline}
            onChange={handleChange}
            required
            className="border p-2 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="product" className="text-sm font-medium">Ürün</label>
          <input
            id="product"
            name="product"
            value={form.product}
            onChange={handleChange}
            required
            className="border p-2 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="brandModel" className="text-sm font-medium">Marka / Model</label>
          <input
            id="brandModel"
            name="brandModel"
            value={form.brandModel}
            onChange={handleChange}
            required
            className="border p-2 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="maintenanceCompany" className="text-sm font-medium">Bakım Firması</label>
          <input
            id="maintenanceCompany"
            name="maintenanceCompany"
            value={form.maintenanceCompany}
            onChange={handleChange}
            required
            className="border p-2 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="contact" className="text-sm font-medium">İletişim</label>
          <input
            id="contact"
            name="contact"
            value={form.contact}
            onChange={handleChange}
            required
            className="border p-2 rounded"
          />
        </div>
        <div className="flex flex-col md:col-span-2">
          <label htmlFor="notes" className="text-sm font-medium">Notlar</label>
          <textarea
            id="notes"
            name="notes"
            value={form.notes}
            onChange={handleChange}
            rows={3}
            className="border p-2 rounded"
          />
        </div>
        <div className="flex flex-col md:col-span-2">
          <label htmlFor="file" className="text-sm font-medium">Belge</label>
          <input id="file" name="file" type="file" onChange={handleFile} ref={fileRef} />
        </div>
      </div>
      <div className="flex gap-2">
        {editingItem && (
          <button
            type="button"
            onClick={cancelEdit}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Vazgeç
          </button>
        )}
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          {editingItem ? 'Kaydet' : 'Ekle'}
        </button>
      </div>
    </form>
  );
}
