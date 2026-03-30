import { Home, BookOpen, Image as ImageIcon, Mail, Users } from 'lucide-react';

export const NAV_ITEMS = [
  { title: 'Trang Chủ', path: '/', icon: 'Home' },
  { title: 'Cơ Sở Vật Chất', path: '/facilities', icon: 'ImageIcon' },
  { title: 'Chương Trình Học', path: '/academics', icon: 'BookOpen' },
  { title: 'Đội Ngũ', path: '/faculty', icon: 'Users' },
  { title: 'Liên Hệ', path: '/contact', icon: 'Mail' },
];

export const FACILITIES = [
  {
    id: '1',
    title: 'Thư Viện Hiện Đại',
    description: 'Không gian yên tĩnh với hàng ngàn đầu sách và hệ thống máy tính tra cứu hiện đại.',
    imageUrl: 'https://picsum.photos/seed/school-library/800/600',
  },
  {
    id: '2',
    title: 'Phòng Thí Nghiệm',
    description: 'Trang bị đầy đủ thiết bị cho các môn Vật lý, Hóa học và Sinh học.',
    imageUrl: 'https://picsum.photos/seed/school-lab/800/600',
  },
  {
    id: '3',
    title: 'Sân Bóng Đá',
    description: 'Sân cỏ nhân tạo đạt chuẩn, nơi diễn ra các hoạt động thể thao sôi nổi.',
    imageUrl: 'https://picsum.photos/seed/school-field/800/600',
  },
  {
    id: '4',
    title: 'Hội Trường Lớn',
    description: 'Sức chứa 500 người, trang bị hệ thống âm thanh ánh sáng chuyên nghiệp.',
    imageUrl: 'https://picsum.photos/seed/school-hall/800/600',
  },
  {
    id: '5',
    title: 'Nhà Ăn Sạch Sẽ',
    description: 'Cung cấp các bữa ăn dinh dưỡng, đảm bảo vệ sinh an toàn thực phẩm.',
    imageUrl: 'https://picsum.photos/seed/school-canteen/800/600',
  },
  {
    id: '6',
    title: 'Phòng Học Thông Minh',
    description: 'Mỗi phòng học đều có bảng tương tác và điều hòa nhiệt độ.',
    imageUrl: 'https://picsum.photos/seed/school-classroom/800/600',
  },
];
