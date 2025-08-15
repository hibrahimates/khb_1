import { db, storage } from './firebase';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js';
import { ref, uploadBytes, getDownloadURL } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js';

const col = collection(db, 'items');

export async function fetchItems() {
  const snapshot = await getDocs(col);
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
}

export async function createItem(data) {
  let fileUrl = '';
  if (data.file) {
    const storageRef = ref(storage, `files/${Date.now()}-${data.file.name}`);
    await uploadBytes(storageRef, data.file);
    fileUrl = await getDownloadURL(storageRef);
  }
  const { discipline, product, brandModel, maintenanceCompany, contact, notes } = data;
  const docRef = await addDoc(col, { discipline, product, brandModel, maintenanceCompany, contact, notes, fileUrl });
  return { id: docRef.id, discipline, product, brandModel, maintenanceCompany, contact, notes, fileUrl };
}

export async function updateItem(id, data) {
  let fileUrl = data.fileUrl || '';
  if (data.file) {
    const storageRef = ref(storage, `files/${Date.now()}-${data.file.name}`);
    await uploadBytes(storageRef, data.file);
    fileUrl = await getDownloadURL(storageRef);
  }
  const docRef = doc(db, 'items', id);
  await updateDoc(docRef, {
    discipline: data.discipline,
    product: data.product,
    brandModel: data.brandModel,
    maintenanceCompany: data.maintenanceCompany,
    contact: data.contact,
    notes: data.notes,
    fileUrl,
  });
}

export async function deleteItem(id) {
  const docRef = doc(db, 'items', id);
  await deleteDoc(docRef);
}
