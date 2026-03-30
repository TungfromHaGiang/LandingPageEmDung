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
    title: 'Học sinh giỏi cấp Tỉnh',
    value: '120+',
    description: 'Hàng năm có hơn 120 giải học sinh giỏi cấp tỉnh ở tất cả các bộ môn.',
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
    title: 'Học sinh giỏi Quốc gia',
    value: '15+',
    description: 'Nhiều học sinh đạt giải cao trong các kỳ thi chọn HSG quốc gia.',
    icon: Medal,
    color: 'bg-primary-600',
  },
  {
    title: 'Đậu Đại học Top đầu',
    value: '85%',
    description: 'Tỉ lệ học sinh trúng tuyển vào các trường đại học trọng điểm quốc gia.',
    icon: Award,
    color: 'bg-primary-400',
  },
  {
    title: 'Gương mặt tiêu biểu',
    value: '1000+',
    description: 'Hàng ngàn cựu học sinh thành đạt đang đóng góp cho sự phát triển đất nước.',
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
