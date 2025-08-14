const API_URL = import.meta.env.VITE_API_URL;

export async function fetchItems() {
  const res = await fetch(`${API_URL}/items`);
  if (!res.ok) throw new Error('Failed to load items');
  return res.json();
}

export async function createItem(formData) {
  const res = await fetch(`${API_URL}/items`, {
    method: 'POST',
    body: formData,
  });
  if (!res.ok) throw new Error('Failed to create item');
  return res.json();
}

export async function deleteItem(id) {
  const res = await fetch(`${API_URL}/items/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Failed to delete item');
}

export async function updateItem(id, formData) {
  const res = await fetch(`${API_URL}/items/${id}`, {
    method: 'PUT',
    body: formData,
  });
  if (!res.ok) throw new Error('Failed to update item');
  return res.json();
}
