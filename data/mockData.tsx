import { User } from "../types/UserType";
import ImageCard from "../types/GalleryType";

export const mockUsers: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Admin",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "User",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    role: "User",
  },
];

export const mockImages: ImageCard[] = [
  {
    id: 1,
    name: "Sunset",
    image: "/image1.png",
  },
  {
    id: 2,
    name: "Mountains",
    image: "/image2.png",
  },
  {
    id: 3,
    name: "Forest",
    image: "/image3.png",
  },
];

export const discoverData = [
  {
    id: 1,
    title: "Ambulance Missions",
    value: "261",
    icon: "fa-solid fa-truck-medical",
    colors: {
      border: "border-red-600 hover:border-red-700",
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
      numberColor: "text-red-600",
    },
  },
  {
    id: 2,
    title: "Lending Supplies",
    value: "48",
    icon: "fa-solid fa-suitcase-medical",
    colors: {
      border: "border-blue-600 hover:border-blue-700",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      numberColor: "text-blue-600",
    },
  },
  {
    id: 3,
    title: "Training and Development",
    value: "68",
    icon: "fa-solid fa-user-doctor",
    colors: {
      border: "border-red-600 hover:border-red-700",
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
      numberColor: "text-red-600",
    },
  },
];

export const englishNewsData = [
  {
    image: "/news1.jpg",
    title: "Breaking News",
    description: "The latest developments in your field",
  },
  {
    image: "/news2.jpg",
    title: "Upcoming Updates",
    description: "Stay up to date with the latest changes",
  },
  {
    image: "/news3.jpg",
    title: "Major Event",
    description: "Workshops and activities",
  },
  {
    image: "/news4.jpg",
    title: "New Report",
    description: "A detailed analytical read",
  },
  {
    image: "/news5.jpg",
    title: "New Data",
    description: "Understanding the numbers",
  },
  {
    image: "/news6.jpg",
    title: "Performance Review",
    description: "Success metrics and future plans",
  },
];

export const arabicNewsData = [
  {
    image: "/news1.jpg",
    title: "أخبار عاجلة",
    description: "التطورات الأخيرة في مجالك",
  },
  {
    image: "/news2.jpg",
    title: "التحديثات القادمة",
    description: "مواكبة لأحدث التغيرات",
  },
  { image: "/news3.jpg", title: "حدث مهم", description: "فعاليات وورش عمل" },
  {
    image: "/news4.jpg",
    title: "تقرير جديد",
    description: "قراءة تحليلية مفصلة",
  },
  {
    image: "/news5.jpg",
    title: "بيانات جديدة",
    description: "كيفية فهم البيانات",
  },
];
