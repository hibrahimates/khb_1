import React from 'react';
import { exportDoc } from '../exportDoc';

export default function ManualTable({ items, removeItem, editItem }) {
  if (!items.length) {
    return <p className="text-sm">Henüz veri eklenmedi.</p>;
  }

  return (
    <div className="overflow-x-auto space-y-2">
      <button
        onClick={() => exportDoc(items)}
        className="bg-green-600 text-white px-3 py-1 rounded"
      >
        Kılavuzu İndir
      </button>
      <table className="w-full text-sm border">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">Disiplin</th>
            <th className="p-2 border">Ürün</th>
            <th className="p-2 border">Marka/Model</th>
            <th className="p-2 border">Bakım Firması</th>
            <th className="p-2 border">İletişim</th>
            <th className="p-2 border">Notlar</th>
            <th className="p-2 border">Belge</th>
            <th className="p-2 border">Düzenle</th>
            <th className="p-2 border">Sil</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border-t">
              <td className="p-2 border">{item.discipline}</td>
              <td className="p-2 border">{item.product}</td>
              <td className="p-2 border">{item.brandModel}</td>
              <td className="p-2 border">{item.maintenanceCompany}</td>
              <td className="p-2 border">{item.contact}</td>
              <td className="p-2 border">{item.notes}</td>
              <td className="p-2 border">
                {item.fileUrl ? (
                  <a href={item.fileUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                    İndir
                  </a>
                ) : (
                  'Yok'
                )}
              </td>
              <td className="p-2 border text-center">
                <button onClick={() => editItem(item)} className="text-blue-600">
                  Düzenle
                </button>
              </td>
              <td className="p-2 border text-center">
                <button onClick={() => removeItem(item.id)} className="text-red-600">
                  Sil
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
