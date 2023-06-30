namespace MyApp{
    class Program{
        // hàm kiểm tra số nguyên tố
        public static bool KiemTra_SNT(int thamSo){
            bool ketQua = false;

            if (thamSo < 2)
            {
                ketQua = false;
            }
            else if (thamSo >= 2)
            {
                ketQua = true;

                for (int i = 2; i < (int)Math.Pow(thamSo, 0.5) + 1; i++)
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
        public static void Dem_SNT(int thamSo1, int thamSo2){
            int dem = 0;

            for (int i = thamSo1; i <= thamSo2; i++)
            {
                if (KiemTra_SNT(i) == true)
                {
                    dem = dem + 1;
                }
            }

            Console.WriteLine("Co " + dem + " so nguyen to");
        }

        public static void Main(string[] args){
            // nhập m
            Console.Write("Nhap m: ");
            int m = 0;
            m = Convert.ToInt32(Console.ReadLine());

            // nhập n
            Console.Write("Nhap n: ");
            int n = 0;
            n = Convert.ToInt32(Console.ReadLine());

            // gọi hàm đếm số nguyên tố
            Dem_SNT(m, n);
        }
    }
}