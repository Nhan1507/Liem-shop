console.log("Liem Shop đang hoạt động!");
// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
  getFirestore,
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCoiPdzArqR2PscxSFAd5GUO06EonxUHkY",
  authDomain: "liem-shop.firebaseapp.com",
  projectId: "liem-shop",
  storageBucket: "liem-shop.firebasestorage.app",
  messagingSenderId: "1094971501135",
  appId: "1:1094971501135:web:5d53f770adca06cd16583a",
  measurementId: "G-J3YNQKWYRE"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Hàm tra cứu đơn
window.searchOrder = async function () {
  const code = document.getElementById("orderCode").value.trim();

  if (!code) {
    alert("Nhập mã đơn!");
    return;
  }

  const ref = doc(db, "orders", code);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    alert("Không tìm thấy đơn!");
    return;
  }

  const data = snap.data();

  document.getElementById("result").innerHTML = `
    <h3>Mã đơn: ${data.code}</h3>
    <p>Game: ${data.game}</p>
    <p>Trạng thái: ${data.status}</p>
    <p>Tiến độ: ${data.progress}%</p>
    <p>Thiết bị: ${data.Device}</p>
    <p>Ghi chú: ${data.note}</p>
    <p>Cập nhật: ${data.updated}</p>
  `;
}
