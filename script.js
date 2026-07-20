console.log("Liem Shop đang hoạt động!");
import { db } from "./firebase.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

window.searchOrder = async function () {
    const code = document.getElementById("orderCode").value.trim().toUpperCase();

    if (!code) {
        alert("Vui lòng nhập mã đơn!");
        return;
    }

    const docRef = doc(db, "orders", code);
    const docSnap = await getDoc(docRef);

    const result = document.getElementById("result");

    if (!docSnap.exists()) {
        result.innerHTML = `
            <h3>Không tìm thấy đơn hàng</h3>
        `;
        return;
    }

    const data = docSnap.data();

    result.innerHTML = `
        <h3>Thông tin đơn hàng</h3>

        <p><strong>Mã đơn:</strong> ${data.code}</p>

        <p><strong>Game:</strong> ${data.game}</p>

        <p><strong>Trạng thái:</strong> ${data.status}</p>

        <p><strong>Tiến độ:</strong> ${data.Progress}%</p>

        <div class="progress">
            <div class="progress-bar" style="width:${data.Progress}%"></div>
        </div>

        <p><strong>Thiết bị:</strong> ${data.Device}</p>

        <p><strong>Ghi chú:</strong> ${data.note}</p>

        <p><strong>Cập nhật:</strong> ${data.updated}</p>
    `;
};
