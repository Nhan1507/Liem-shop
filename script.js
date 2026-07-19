// Dữ liệu mẫu (sau này sẽ lấy từ Firebase)

const orders = {
    "OPK728": {
        game: "Genshin Impact",
        status: "🟢 Đang cày",
        progress: 82,
        device: "OPPO K13 Turbo",
        note: "Đang farm Fontaine.",
        update: "20/07/2026 03:30"
    },

    "LPR531": {
        game: "Honkai: Star Rail",
        status: "⏸️ Tạm dừng",
        progress: 45,
        device: "Lenovo Pad Pro GT",
        note: "Đợi reset stamina.",
        update: "20/07/2026 02:10"
    }
};

function searchOrder() {

    const code = document
        .getElementById("orderInput")
        .value
        .toUpperCase()
        .trim();

    if(code === ""){
        alert("Vui lòng nhập mã đơn!");
        return;
    }

    if(orders[code]){

        const order = orders[code];

        document.getElementById("result").innerHTML = `
            <h3>Thông tin đơn hàng</h3>

            <p><strong>Mã đơn:</strong> ${code}</p>

            <p><strong>Game:</strong> ${order.game}</p>

            <p><strong>Trạng thái:</strong> ${order.status}</p>

            <p><strong>Tiến độ:</strong></p>

            <div class="progress">
                <div class="progress-bar" style="width:${order.progress}%"></div>
            </div>

            <p>${order.progress}%</p>

            <p><strong>Máy:</strong> ${order.device}</p>

            <p><strong>Ghi chú:</strong> ${order.note}</p>

            <p><strong>Cập nhật:</strong> ${order.update}</p>
        `;

    }else{

        document.getElementById("result").innerHTML = `
            <h3>❌ Không tìm thấy đơn</h3>
            <p>Vui lòng kiểm tra lại mã đơn.</p>
        `;

    }

}
