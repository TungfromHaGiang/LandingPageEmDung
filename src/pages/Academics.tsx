import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Trophy, HeartPulse, Medal, Award, Star } from 'lucide-react';

const statistics = [
  {
    title: 'Tỉ lệ tốt nghiệp',
    value: '99.8%',
    description: 'Duy trì tỉ lệ tốt nghiệp THPT ở mức cao nhất tỉnh trong nhiều năm liền.',
    icon: GraduationCap,
    color: 'bg-primary-500',
  },
  {
    title: 'Cơ sở hiện đại',
    value: '100%',
    description: 'Tất cả các lớp học của nhà trường đều được trang bị đầy đủ điều hòa và tivi, tạo nên môi trường học tập tiện nghi, hiện đại.\n' +
        'Nhờ đó, việc giảng dạy và tiếp thu kiến thức trở nên sinh động, hiệu quả, góp phần nâng cao chất lượng giáo dục toàn diện.',
    icon: Trophy,
    color: 'bg-orange-500',
  },
  {
    title: 'Hội khỏe Phù Đổng',
    value: 'Giải Nhất Toàn Đoàn',
    description: 'Thành tích xuất sắc trong các kỳ đại hội thể dục thể thao cấp tỉnh.',
    icon: HeartPulse,
    color: 'bg-rose-500',
  },
  {
    title: 'Học sinh giỏi cấp Tỉnh',
    value: '29+',
    description: 'Nhiều học sinh đạt giải cao trong các kỳ thi chọn HSG cáp tỉnh năm học 2025-2026.',
    icon: Medal,
    color: 'bg-primary-600',
  },
  {
    title: 'Biểu tượng Vàng',
    value: 'Huân chương Lao động hạng Nhì',
    description: 'Trong 65 năm qua, thầy và trò nhà trường đã được Đảng, Nhà nước trao tặng nhiều phần thưởng cao quý như Huân chương Lao động, Bằng khen của Thủ tướng Chính phủ và các danh hiệu uy tín khác.',
    icon: Award,
    color: 'bg-primary-400',
  },
  {
    title: 'Đại diện mặt tiêu biểu',
    value: 'Trường đạt chuẩn Quốc gia',
    description: 'Hiện nhà trường đã hoàn thành 5 tiêu chuẩn theo quy chế công nhận trường đạt chuẩn Quốc gia. Trường THPT Lê Hồng Phong đã long trọng tổ chức Lễ khai giảng năm học 2020-2021 và đón Bằng công nhận Trường đạt chuẩn Quốc gia mức độ 1.    ',
    icon: Star,
    color: 'bg-primary-700',
  },
];

export function Academics() {
  return (
    <div className="space-y-16">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-slate-900"
        >
          Thành Tích & Thống Kê
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-slate-500"
        >
          Tự hào là ngôi trường giàu truyền thống nhất tỉnh Hà Giang với bảng thành tích học thuật và phong trào xuất sắc qua nhiều thập kỷ.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {statistics.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -5 }}
            className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all"
          >
            <div className={`w-14 h-14 ${stat.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg`}>
              <stat.icon size={28} />
            </div>
            <div className="space-y-2">
              <p className="text-primary-600 font-bold text-2xl">{stat.value}</p>
              <h3 className="text-xl font-bold text-slate-900">{stat.title}</h3>
              <p className="text-slate-500 leading-relaxed">{stat.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Featured Quote */}
      <section className="bg-primary-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
        <div className="relative z-10 space-y-8">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto text-white text-4xl font-serif"
          >
            "
          </motion.div>
          <h2 className="text-2xl md:text-4xl font-medium text-white italic max-w-4xl mx-auto leading-tight">
            Truyền thống là sức mạnh, học tập là tương lai. THPT Lê Hồng Phong - Nơi chắp cánh những ước mơ cao đẹp.
          </h2>
          <p className="text-primary-200 font-bold tracking-widest uppercase text-sm">— Ban Giám Hiệu Trường THPT Lê Hồng Phong</p>
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary-500 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-500 rounded-full blur-[100px]" />
        </div>
      </section>
    </div>
  );
}
