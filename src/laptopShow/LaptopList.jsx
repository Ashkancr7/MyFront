import { Link } from "react-router-dom";

import aks1 from "../assets/laptop/1.png";
import aks2 from "../assets/laptop/2.png";
import aks3 from "../assets/laptop/3.webp";
import aks4 from "../assets/laptop/4.webp";
import aks5 from "../assets/laptop/5.jpg";
import aks6 from "../assets/laptop/6.webp";
import aks7 from "../assets/laptop/7.webp";
import aks8 from "../assets/laptop/8.webp";
import aks9 from "../assets/laptop/9.jpg";
import aks10 from "../assets/laptop/10.jpg";
import aks11 from "../assets/laptop/11.jpg";
import aks12 from "../assets/laptop/12.webp";
import aks13 from "../assets/laptop/13.webp";
import aks14 from "../assets/laptop/14.webp";
import aks15 from "../assets/laptop/15.webp";
import aks16 from "../assets/laptop/16.webp";

const laptops = [
  {
    id: 1,
    name: "ASUS ExpertBook X360",
    cpu: "i5-1135G7",
    ram: "8G",
    storage: "256G-SSD",
    gpu: "Intel IRIS Xe",
    battery: "10 ساعت",
    price: "45,000,000 تومان",
    image: aks1,
  },
  {
    id: 2,
    name: "Dell PRECISION 7520",
    cpu: "I7-7820HQ",
    ram: "8GB",
    storage: "256GB SSD",
    gpu: "Intel HD TOUCH",
    battery: "20 ساعت",
    price: "65,000,000 تومان",
    image: aks2,
  },
  {
    id: 3,
    name: "ASUS ZenBook 13UX",
    cpu: "i7-8565U",
    ram: "8G",
    storage: "512GB-SSD",
    gpu: "2G-MX150",
    battery: "12 ساعت",
    price: "80,000,000 تومان",
    image: aks3,
  },
  {
    id: 4,
    name: "DELL Latitude 5300",
    cpu: "I7-8665U",
    ram: "16G",
    storage: "256GB SSD",
    gpu: "INTEL UHD",
    battery: "10 ساعت",
    price: "45,000,000 تومان",
    image: aks4,
  },
  {
    id: 5,
    name: "HP EliteBook 745 G6",
    cpu: "R5-PRO3500U",
    ram: "8G",
    storage: "256G-SSD",
    gpu: "2G-VEGA8",
    battery: "20 ساعت",
    price: "65,000,000 تومان",
    image: aks5,
  },
  {
    id: 6,
    name: "HP ENVY Laptop",
    cpu: "i9-13900H",
    ram: "16G",
    storage: "1TB-SSD",
    gpu: "8G-RTX4060",
    battery: "12 ساعت",
    price: "80,000,000 تومان",
    image: aks6,
  },
  {
    id: 7,
    name: "HP ENVY Laptop 17",
    cpu: "Ultra7-155U",
    ram: "16G",
    storage: "1TB-SSD",
    gpu: "4G-RTX3050",
    battery: "10 ساعت",
    price: "45,000,000 تومان",
    image: aks7,
  },
  {
    id: 8,
    name: "HP Omen 16",
    cpu: "i5-13500HX",
    ram: "16G",
    storage: "512G-SSD",
    gpu: "8G-RTX4060",
    battery: "20 ساعت",
    price: "65,000,000 تومان",
    image: aks8,
  },
  {
    id: 9,
    name: "HP Probook 645 G4",
    cpu: "R7 PRO-2700U",
    ram: "16G",
    storage: "256G SSD",
    gpu: "1G-vega",
    battery: "12 ساعت",
    price: "80,000,000 تومان",
    image: aks9,
  },
  {
    id: 10,
    name: "HP VICTUS 16",
    cpu: "i7-13620H",
    ram: "16G",
    storage: "512G-SSD",
    gpu: "8G-RTX4060",
    battery: "10 ساعت",
    price: "45,000,000 تومان",
    image: aks10,
  },
  {
    id: 11,
    name: "Lenovo X280",
    cpu: "I5-8350U",
    ram: "8G",
    storage: "256G-SSD",
    gpu: "INTEL UHD 620",
    battery: "20 ساعت",
    price: "65,000,000 تومان",
    image: aks11,
  },
  {
    id: 12,
    name: "MICROSOFT SURFACE LAPTOP 3",
    cpu: "i5-1035G7",
    ram: "8G",
    storage: "256G-SSDD",
    gpu: "Intel Iris Plus",
    battery: "12 ساعت",
    price: "80,000,000 تومان",
    image: aks12,
  },
  {
    id: 13,
    name: "MICROSOFT SURFACE LAPTOP 4",
    cpu: "i5-1145G7",
    ram: "8G",
    storage: "256G-SSD",
    gpu: "Intel Iris Xe",
    battery: "12 ساعت",
    price: "80,000,000 تومان",
    image: aks13,
  },
  {
    id: 14,
    name: "MICROSOFT SURFACE LAPTOP 4",
    cpu: "i7-1185G7",
    ram: "16G",
    storage: "256GB SSD",
    gpu: "INTEL IRIS Xe",
    battery: "10 ساعت",
    price: "45,000,000 تومان",
    image: aks14,
  },
  {
    id: 15,
    name: "Samsung 930 MBE",
    cpu: "i7-8565U",
    ram: "16G",
    storage: "256G SSD",
    gpu: "Intel UHD",
    battery: "20 ساعت",
    price: "65,000,000 تومان",
    image: aks15,
  },
  {
    id: 16,
    name: "MICROSOFT SURFACE PRO 7 PLUS",
    cpu: "i5-1135G7",
    ram: "8G",
    storage: "256G-SSDD",
    gpu: "Intel Iris",
    battery: "12 ساعت",
    price: "80,000,000 تومان",
    image: aks16,
  },
];

export default function LaptopList() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
        💻 لیست لپ‌تاپ‌ها
      </h1>

     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
  {laptops.map((laptop) => (
    <div
      key={laptop.id}
      className="bg-white shadow rounded-xl p-3 flex flex-col justify-between h-full"
    >
      <div className="flex flex-col items-center">
        <img
          src={laptop.image}
          alt={laptop.name}
          className="w-full h-32 object-contain rounded-md"
        />
        <h3 className="mt-2 text-sm font-medium text-center">{laptop.name}</h3>
        <p className="bg-gradient-to-r from-emerald-500 to-green-700 bg-clip-text text-transparent font-bold text-sm">
          {laptop.price} تومان
        </p>
      </div>

      <Link
        to={`/laptop/${laptop.id}`}
        className="mt-3 bg-blue-600 text-white text-xs sm:text-sm px-2 py-1 rounded-lg hover:bg-blue-700 transition text-center"
      >
        مشاهده جزئیات
      </Link>
    </div>
  ))}
</div>

    </div>
  );
}
