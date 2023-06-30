# Yêu cầu:
# 1. nhập số nguyên dương m
# 2. nhập số nguyên dương n
# 3. đếm "số_nguyên_tố" nằm trong khoảng [m, n]
# 4. in ra kết quả

# chương trình chính
m = int(input("Nhap m: "))
n = int(input("Nhap n: "))

# hàm kiểm tra số nguyên tố
# tức là bản thân cái số nguyên tố
# nó chỉ chia hết cho 1 và chính nó
def KiemTra_SoNguyenTo(thamSo):
    ketQua = False
    
    if thamSo < 2:
        ketQua = False

    elif thamSo >= 2:
        ketQua = True

        for i in range(2, int(thamSo**0.5) + 1, 1):
            if thamSo % i == 0:
                ketQua = False
                break
    
    return ketQua

# hàm đếm số lượng số_nguyên_tố
# trong khoảng [m, n]
def Dem_SoLuong_SNT(thamSo1, thamSo2):
    dem = 0

    for i in range(thamSo1, thamSo2 + 1, 1):
        if KiemTra_SoNguyenTo(i) == True:
            dem += 1

    print(f"Co {dem} so nguyen to")

# gọi hàm đếm số nguyên tố
Dem_SoLuong_SNT(m, n)

# cho cái test case
# nhập m = 550
# nhập n = 90000
# đáp án = 8612
# thì giải thuật ĐẠT YÊU CẦU