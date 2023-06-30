// lấy phần tử input[id="bien1"]
var bien1 = document.querySelector(`input[id="bien1"]`);

// lấy phần tử input[id="bien2"]
var bien2 = document.querySelector(`input[id="bien2"]`);

// lấy phần tử button
var dt_button = document.querySelector(`button`);

// lấy phần tử input[id="bien_KetQua"]
var bien_KetQua = document.querySelector("#bien_KetQua");

// tạo biến để hứng dữ liệu
var m;
var n;

// lắng nghe sự kiện
bien1.addEventListener("input", function(){
    // nhớ chuyển string sang number
    m = parseInt(bien1.value);

    console.log(`Nhập m: ${m}`);
});

bien2.addEventListener("input", function(){
    // nhớ chuyển string sang number
    n = parseInt(bien2.value);

    console.log(`Nhập n: ${n}`);
});

// hàm kiểm tra số nguyên tố
function KiemTra_SoNguyenTo(thamSo){
    if (thamSo < 2) {
        return false;
    }
    else if (thamSo >= 2) {
        // hàm floor()
        // là hàm làm tròn xuống
        var index_ket_thuc = Math.floor(Math.sqrt(thamSo));

        for(var i = 2; i <= index_ket_thuc; i++){
            if (thamSo % i == 0) {
                return false;
            }
        }
        
        return true;
    }
}

// hàm đếm số nguyên tố
function Dem_SoNguyenTo(thamSo1, thamSo2){
    var dem = 0;

    for(var i = thamSo1; i <= thamSo2; i++){
        if (KiemTra_SoNguyenTo(i) == true) {
            dem = dem + 1;
        }
    }

    return dem;
}

// lắng nghe sự kiện nhấn chuột xuống
dt_button.addEventListener("mousedown", function(){
    var dem_SNT = 0;

    dem_SNT = Dem_SoNguyenTo(m, n);

    console.log(`Kiểu dữ liệu của m: ${typeof m}`);
    console.log(`Kiểu dữ liệu của n: ${typeof n}`);

    bien_KetQua.value = `Kết quả: có ${dem_SNT} số nguyên tố`;
});