// src/data.js

// ایمپورت عکس‌ها (از همان مسیر قبلی شما)
import aks1 from "./assets/laptop/1.png";
import aks2 from "./assets/laptop/2.png";
import aks3 from "./assets/laptop/3.webp";
import aks4 from "./assets/laptop/4.webp";
import aks5 from "./assets/laptop/5.jpg";
import aks6 from "./assets/laptop/6.webp";
import aks7 from "./assets/laptop/7.webp";
import aks8 from "./assets/laptop/8.webp";
import aks9 from "./assets/laptop/9.jpg";
import aks10 from "./assets/laptop/10.jpg";
import aks11 from "./assets/laptop/11.jpg";
import aks12 from "./assets/laptop/12.webp";
import aks13 from "./assets/laptop/13.webp";
import aks14 from "./assets/laptop/14.webp";
import aks15 from "./assets/laptop/15.webp";
import aks16 from "./assets/laptop/16.webp";

const images = [aks1, aks2, aks3, aks4, aks5, aks6, aks7, aks8, aks9, aks10, aks11, aks12, aks13, aks14, aks15, aks16];

export const laptops = [
  {
    id: 1,
    name: "ASUS ZenBook 14 OLED Q415MA",
    cpu: "Core Ultra 5-125H",
    ram: "8 GB LPDDR5",
    storage: "512 GB NVMe SSD",
    gpu: "Intel Graphics",
    battery: "75 Wh (15h)",
    display: "14 inch OLED FHD+",
    weight: "1.28 kg",
    price: "1,000",
    image: images[0],
    desc: "لپ‌تاپی بسیار سبک با صفحه نمایش OLED خیره‌کننده، مناسب برای ترید، کارهای روزمره و مدیریتی."
  },
  {
    id: 2,
    name: "Dell XPS 15",
    cpu: "Apple M3 Pro",
    ram: "8 GB Unified",
    storage: "1 TB SSD",
    gpu: "14 Core Integrated",
    battery: "70 Wh (22h Video)",
    display: "14.2 inch Liquid Retina XDR",
    weight: "1.55 kg",
    price: "2,000",
    image: images[1],
    desc: "قدرت بی‌نظیر برای کارهای حرفه‌ای، تدوین و برنامه‌نویسی با صفحه نمایش فوق‌العاده باکیفیت."
  },
  {
    id: 3,
    name: "HP Victus Gaming 15",
    cpu: "Ryzen 5-8645HS",
    ram: "8 GB DDR5",
    storage: "512 GB NVMe",
    gpu: "RTX 4050 6GB",
    battery: "70 Wh",
    display: "15.6 inch 144Hz",
    weight: "2.3 kg",
    price: "3,000",
    image: images[2],
    desc: "یک گزینه عالی برای گیمرها با نرخ نوسازی 144 هرتز و گرافیک قدرتمند سری 40 انویدیا."
  },
  {
    id: 4,
    name: "HP 255 G10",
    cpu: "Athlon Silver 7120U",
    ram: "8 GB DDR4",
    storage: "512 GB NVMe",
    gpu: "Radeon 610M",
    battery: "41 Wh",
    display: "15.6 inch FHD",
    weight: "1.52 kg",
    price: "4,000",
    image: images[3],
    desc: "گزینه‌ای اقتصادی و سبک برای کارهای روزمره، دانشجویی و وب‌گردی."
  },
  {
    id: 5,
    name: "HP ENVY x360 14-ES1013DX",
    cpu: "Core 5-120U",
    ram: "8 GB DDR4",
    storage: "512 GB Gen4 SSD",
    gpu: "Intel Iris Xe",
    battery: "43 Wh",
    display: "14 inch Touch IPS",
    weight: "1.5 kg",
    price: "5,000",
    image: images[4],
    desc: "لپ‌تاپ هیبریدی با قابلیت چرخش 360 درجه، مناسب برای طراحی و استفاده‌های چندمنظوره."
  },
  {
    id: 6,
    name: "Dell Vostro 3520",
    cpu: "Core i3-1215U",
    ram: "16 GB DDR4",
    storage: "512 GB NVMe",
    gpu: "Intel UHD",
    battery: "41 Wh",
    display: "15.6 inch 120Hz",
    weight: "1.66 kg",
    price: "6,000",
    image: images[5],
    desc: "یک لپ‌تاپ کاستوم شده با رم بالا و صفحه نمایش 120 هرتز، مناسب کارهای اداری سریع."
  },
  {
    id: 7,
    name: "Asus Custom General",
    cpu: "Core i5-1334U",
    ram: "16 GB DDR4",
    storage: "512 GB SSD",
    gpu: "Intel Iris Xe",
    battery: "41 Wh",
    display: "15.6 inch FHD 120Hz",
    weight: "1.65 kg",
    price: "7,000",
    image: images[6],
    desc: "مناسب برای کارهای عمومی با پردازنده نسل 13 اینتل و صفحه نمایش باکیفیت."
  },
  {
    id: 8,
    name: "Lenovo Custom Config",
    cpu: "Core i3-1215U",
    ram: "8 GB DDR4",
    storage: "512 GB SSD",
    gpu: "Intel UHD",
    battery: "41 Wh",
    display: "15.6 inch FHD",
    weight: "1.6 kg",
    price: "8,000",
    image: images[7],
    desc: "لپ‌تاپ لنوو با کانفیگ پایه مناسب برای لینوکس و کارهای سبک برنامه نویسی."
  },
  {
    id: 9,
    name: "Microsoft Surface Laptop 5",
    cpu: "Core i5-1235U",
    ram: "8 GB LPDDR5X",
    storage: "256 GB SSD",
    gpu: "Intel Iris Xe",
    battery: "18 ساعت",
    display: "13.5 inch PixelSense",
    weight: "1.29 kg",
    price: "9,000",
    image: images[8],
    desc: "شاهکار مایکروسافت؛ سبک، زیبا با صفحه نمایش لمسی فوق‌العاده و عمر باتری بالا."
  },
  {
    id: 10,
    name: "Acer Swift 3 / Workstation",
    cpu: "Core i7-13700H",
    ram: "64 GB LPDDR5X",
    storage: "2 TB Gen4 SSD",
    gpu: "RTX 4060 8GB",
    battery: "58 Wh",
    display: "14.4 inch 120Hz Touch",
    weight: "1.98 kg",
    price: "10,000",
    image: images[9],
    desc: "یک ورک‌استیشن واقعی در ابعاد کوچک. رم 64 گیگابایت و گرافیک قدرتمند برای رندرهای سنگین."
  },
  {
    id: 11,
    name: "Acer Predator Helios 300",
    cpu: "Core i7-14650HX",
    ram: "32 GB DDR5",
    storage: "1 TB PCIe 4.0",
    gpu: "RTX 5060 (New Gen)",
    battery: "90 Wh",
    display: "16 inch 165Hz",
    weight: "2.2 kg",
    price: "11,000",
    image: images[10],
    desc: "غول گیمینگ با پردازنده نسل 14 و سیستم کولینگ پیشرفته."
  },
  {
    id: 12,
    name: "MSI Katana 15 B13VEK",
    cpu: "Core i7-13620H",
    ram: "16 GB DDR5",
    storage: "1 TB NVMe",
    gpu: "RTX 4050 6GB",
    battery: "53.5 Wh",
    display: "15.6 inch 144Hz",
    weight: "2.25 kg",
    price: "12,000",
    image: images[11],
    desc: "لپ‌تاپ گیمینگ خوش‌قیمت MSI با کیبورد RGB و پرفرمنس عالی."
  },
  {
    id: 13,
    name: "Microsoft Surface Laptop 5 (15 inch)",
    cpu: "Core i7-1355U",
    ram: "16 GB DDR4",
    storage: "512 GB SSD",
    gpu: "Iris Xe",
    battery: "42 Wh",
    display: "15.6 inch FHD",
    weight: "1.7 kg",
    price: "13,000",
    image: images[12],
    desc: "نسخه 15 اینچی سرفیس با صفحه نمایش بزرگتر برای مالتی‌تسکینگ بهتر."
  },
  {
    id: 14,
    name: "Acer Aspire Lite",
    cpu: "Core 1305U",
    ram: "16 GB DDR5",
    storage: "512 GB NVMe",
    gpu: "Intel UHD",
    battery: "58 Wh",
    display: "16 inch WUXGA",
    weight: "1.7 kg",
    price: "14,000",
    image: images[13],
    desc: "لپ‌تاپ سبک و مدرن با رم DDR5 و صفحه نمایش با نسبت تصویر 16:10."
  },
  {
    id: 15,
    name: "ASUS TUF Gaming A17",
    cpu: "Ryzen 7 7435HS",
    ram: "40 GB DDR5",
    storage: "1 TB NVMe",
    gpu: "RTX 2050 4GB",
    battery: "48 Wh",
    display: "17.3 inch 144Hz",
    weight: "2.6 kg",
    price: "14,500",
    image: images[14],
    desc: "صفحه نمایش غول‌پیکر 17 اینچی با رم بسیار بالا (40 گیگ) مناسب کارهای سنگین."
  },
  {
    id: 16,
    name: "Lenovo V15 G2 IJL",
    cpu: "Celeron N4500",
    ram: "8 GB DDR4",
    storage: "256 GB SSD",
    gpu: "Intel UHD",
    battery: "38 Wh",
    display: "15.6 inch HD",
    weight: "1.7 kg",
    price: "15,000",
    image: images[15],
    desc: "ارزان‌ترین گزینه برای کارهای بسیار سبک اداری و وب‌گردی."
  },
  {
    id: 17,
    name: "Samsung Galaxy Book 3",
    cpu: "Core i5-1235U",
    ram: "16 GB DDR4",
    storage: "512 GB SSD",
    gpu: "Intel UHD",
    battery: "39.3 Wh",
    display: "15.6 inch FHD",
    weight: "1.74 kg",
    price: "16,000",
    image: images[0],
    desc: "اکوسیستم سامسونگ با طراحی باریک و قابلیت اتصال عالی به گوشی‌های گلکسی."
  },
  {
    id: 18,
    name: "MSI Stealth 15",
    cpu: "Core i7-13620H",
    ram: "16 GB DDR5",
    storage: "1 TB Gen4 SSD",
    gpu: "RTX 4050 6GB",
    battery: "53.5 Wh",
    display: "15.6 inch 144Hz",
    weight: "1.98 kg",
    price: "17,000",
    image: images[1],
    desc: "ترکیب ظرافت و قدرت؛ مناسب گیمرهایی که لپ‌تاپ باریک دوست دارند."
  },
  {
    id: 19,
    name: "Lenovo IdeaPad 1",
    cpu: "Celeron N4500",
    ram: "8 GB DDR4",
    storage: "256 GB SSD",
    gpu: "Intel UHD",
    battery: "42 Wh",
    display: "15.6 inch FHD",
    weight: "1.55 kg",
    price: "18,000",
    image: images[2],
    desc: "لپ‌تاپ دانشجویی سبک و کار راه انداز."
  },
  {
    id: 20,
    name: "Lenovo IdeaPad Slim 3",
    cpu: "Core i5-13420H",
    ram: "8 GB LPDDR5",
    storage: "512 GB Gen4 SSD",
    gpu: "Intel UHD",
    battery: "47 Wh",
    display: "15.6 inch FHD",
    weight: "1.62 kg",
    price: "19,000",
    image: images[3],
    desc: "طراحی اسلیم و مدرن با پردازنده سری H قدرتمند برای کارهای پردازشی."
  },
  {
    id: 21,
    name: "Acer Nitro V 15",
    cpu: "Core i5-13420H",
    ram: "16 GB DDR5",
    storage: "512 GB PCIe 4.0",
    gpu: "RTX 3050 6GB",
    battery: "57 Wh",
    display: "15.6 inch 144Hz",
    weight: "2.1 kg",
    price: "20,000",
    image: images[4],
    desc: "خوش‌قیمت‌ترین گیمینگ بازار با گرافیک سری 30 و رم DDR5."
  },
  {
    id: 22,
    name: "Lenovo LOQ 15IAX9E",
    cpu: "Core i5-12450HX",
    ram: "16 GB DDR5",
    storage: "512 GB SSD",
    gpu: "RTX 2050 4GB",
    battery: "57 Wh",
    display: "15.6 inch 144Hz",
    weight: "1.77 kg",
    price: "21,000",
    image: images[5],
    desc: "سری جدید گیمینگ لنوو با طراحی صنعتی و بدنه مقاوم."
  },
  {
    id: 23,
    name: "Apple MacBook Air 13 (M4)",
    cpu: "Apple M4 10-Core",
    ram: "16 GB Unified",
    storage: "256 GB SSD",
    gpu: "8 Core GPU",
    battery: "53.8 Wh (18h)",
    display: "13.6 inch Liquid Retina",
    weight: "1.24 kg",
    price: "24,000",
    image: images[6],
    desc: "جدیدترین شاهکار اپل با پردازنده M4 و هوش مصنوعی پیشرفته."
  },
  {
    id: 24,
    name: "ASUS Vivobook Go 14",
    cpu: "Celeron N4500",
    ram: "4 GB DDR4",
    storage: "64 GB eMMC",
    gpu: "Intel UHD",
    battery: "42 Wh",
    display: "14 inch FHD",
    weight: "1.3 kg",
    price: "25,000",
    image: images[7],
    desc: "بسیار ارزان و سبک، فقط برای وب‌گردی و تماشای فیلم."
  },
  {
    id: 25,
    name: "MSI Katana GF66", // [cite: 1185]
    cpu: "Intel Core 1305U", // [cite: 1193, 1195]
    ram: "8 GB DDR5", // [cite: 1205, 1206]
    storage: "256 GB NVMe SSD", // [cite: 1209, 1210]
    gpu: "Intel UHD Graphics", // [cite: 1202]
    battery: "58 Wh", // [cite: 1221]
    display: "16 inch WUXGA", // [cite: 1213, 1215]
    weight: "1.7 kg", // [cite: 1189]
    price: "22,000", // [cite: 1233]
    image: images[8], // انتخاب عکس به صورت چرخشی
    desc: "لپ‌تاپ نسل ۱۳ با رم DDR5 و صفحه نمایش باکیفیت 16 اینچی، مناسب کارهای روزمره." // [cite: 1187, 1194, 1206, 1213]
  },
  {
    id: 26,
    name: "Lenovo General Purpose (Ryzen)", // 
    cpu: "Ryzen 7320U", // [cite: 1246]
    ram: "8 GB LPDDR5", // [cite: 1257, 1258]
    storage: "256 GB NVMe SSD", // [cite: 1261, 1262]
    gpu: "AMD Integrated", // [cite: 1253, 1254]
    battery: "47 Wh", // [cite: 1275]
    display: "15.6 inch FHD", // [cite: 1265, 1267]
    weight: "1.62 kg", // [cite: 1239]
    price: "23,000", // [cite: 1289]
    image: images[9], // انتخاب عکس به صورت چرخشی
    desc: "لپ‌تاپ سبک و خوش‌دست لنوو با رم سریع LPDDR5 و پردازنده رایزن، مناسب دانشجویان." // [cite: 1239, 1258, 1244]
  }
];