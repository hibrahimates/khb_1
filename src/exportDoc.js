export function exportDoc(items) {
  const rows = items.map(item => `
      <tr>
        <td>${item.discipline || ''}</td>
        <td>${item.product || ''}</td>
        <td>${item.brandModel || ''}</td>
        <td>${item.maintenanceCompany || ''}</td>
        <td>${item.contact || ''}</td>
        <td>${item.notes || ''}</td>
        <td>${item.fileUrl ? `<a href="${item.fileUrl}">Belge</a>` : ''}</td>
      </tr>`).join('');

  const html = `<!DOCTYPE html><html><head><meta charset="UTF-8"></head><body>
    <table border="1" style="border-collapse:collapse;">
      <thead>
        <tr>
          <th>Disiplin</th>
          <th>Ürün</th>
          <th>Marka/Model</th>
          <th>Bakım Firması</th>
          <th>İletişim</th>
          <th>Notlar</th>
          <th>Belge</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  </body></html>`;

  const blob = new Blob(['\ufeff', html], { type: 'application/msword' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'kullanim-kilavuzu.doc';
  a.click();
  URL.revokeObjectURL(url);
}
