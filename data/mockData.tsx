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
    logo: "/ambulance.svg",
    number: "261",
    message: "Ambulance Missions",
  },
  { id: 2, logo: "/clinic.svg", number: "48", message: "Lending Supplies" },
  {
    id: 3,
    logo: "/paramedic.svg",
    number: "68",
    message: "Training and Development",
  },
  { id: 4, logo: "/discover.svg", number: "4", message: "Message 4" },
  { id: 5, logo: "/logo2.svg", number: "5", message: "Message 5" },
  { id: 6, logo: "/logo3.svg", number: "6", message: "Message 6" },
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
  {
    image: "/news6.jpg",
    title: "مراجعة الأداء",
    description: "مؤشرات النجاح والخطة القادمة",
  },
];