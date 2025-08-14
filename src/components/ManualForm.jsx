import React, { useState } from 'react';

export default function ManualForm({ addItem }) {
  const initial = {
    discipline: '',
    product: '',
    brandModel: '',
    maintenanceCompany: '',
    contact: '',
    notes: '',
    file: null,
  };
  const [form, setForm] = useState(initial);

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
    const data = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (value) data.append(key, value);
    });
    await addItem(data);
    setForm(initial);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 bg-white dark:bg-gray-800 p-4 rounded shadow">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <input name="discipline" value={form.discipline} onChange={handleChange} placeholder="Disiplin" className="border p-2 rounded" />
        <input name="product" value={form.product} onChange={handleChange} placeholder="Ürün" className="border p-2 rounded" />
        <input name="brandModel" value={form.brandModel} onChange={handleChange} placeholder="Marka / Model" className="border p-2 rounded" />
        <input name="maintenanceCompany" value={form.maintenanceCompany} onChange={handleChange} placeholder="Bakım Firması" className="border p-2 rounded" />
        <input name="contact" value={form.contact} onChange={handleChange} placeholder="İletişim" className="border p-2 rounded" />
        <input name="notes" value={form.notes} onChange={handleChange} placeholder="Notlar" className="border p-2 rounded md:col-span-2" />
        <input type="file" onChange={handleFile} className="md:col-span-2" />
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Ekle</button>
    </form>
  );
}
