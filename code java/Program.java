import java.util.Scanner;

class Program{
    // hàm kiểm tra số nguyên tố
    public static boolean KiemTra_SNT(int thamSo){
        boolean ketQua = false;

        if (thamSo < 2) {
            ketQua = false;
        }
        else if (thamSo >= 2) {
            ketQua = true;

            for (int i = 2; i <= (int)Math.sqrt(thamSo); i++) {
                if(thamSo % i == 0){
                    ketQua = false;
                    break;
                }
            }
        }

        return ketQua;
    }

    // hàm đếm số nguyên tố
    public static void Dem_SoNguyenTo(int thamSo1, int thamSo2){
        int dem = 0;

        for (int i = thamSo1; i <= thamSo2; i++) {
            if(KiemTra_SNT(i) == true){
                dem = dem + 1;
            }
        }

        System.out.println("Co " + dem + " so nguyen to");
    }

    public static void main(String[] args){
        Scanner dt = new Scanner(System.in);
        System.out.print("Nhap m: ");
        int m = dt.nextInt();

        System.out.print("Nhap n: ");
        int n = dt.nextInt();

        // gọi hàm đếm số nguyên tố
        Dem_SoNguyenTo(m, n);
    }
}