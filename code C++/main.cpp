// Yêu cầu:
// 1. nhập m
// 2. nhập n

// 3. đếm xem có bao nhiêu số nguyên tố
// trong khoảng [m, n]

// 4. in ra kết quả

#include <iostream>
#include <cmath>
using namespace std;

// hàm kiểm tra số nguyên tố
bool KiemTra_SNT(int thamSo){
    bool ketQua;

    if (thamSo < 2)
    {
        ketQua = false;
    }
    else if (thamSo >= 2)
    {
        ketQua = true;

        // tức là cái số nguyên tố
        // thì nó chỉ chia hết cho 1 và chính nó
        
        // nên nếu nó chia hết cho 2, 3, 4, 5, ...
        // thì nó sẽ không phải số nguyên tố
        for (int i = 2; i <= (int)sqrt(thamSo); i++)
        {
            if (thamSo % i == 0)
            {
                ketQua = false;
                break;
            }
        }
    }

    return ketQua;
}

// hàm đếm số nguyên tố
void Dem_SoNguyenTo(int thamSo1, int thamSo2){
    int dem = 0;

    for (int i = thamSo1; i <= thamSo2; i++)
    {
        if (KiemTra_SNT(i) == true)
        {
            dem = dem + 1;
        }        
    }    

    cout << "Co " << dem << " so nguyen to\n\n";
}

int main(){
    cout << "Nhap m: ";
    int m;
    cin >> m;

    cout << "Nhap n: ";
    int n;
    cin >> n;

    // gọi hàm đếm số nguyên tố
    Dem_SoNguyenTo(m, n);

    return 0;
}