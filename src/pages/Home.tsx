import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, Shield, Zap, Users } from 'lucide-react';

export function Home() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative h-[600px] rounded-3xl overflow-hidden group">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=2000"
          alt="School Hero"
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center p-8 md:p-16">
          <div className="max-w-2xl text-white space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 bg-primary-500/30 backdrop-blur-md rounded-full text-sm font-semibold border border-white/20"
            >
              Trường THPT Lê Hồng Phong - Hà Giang
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              Giữ Vững <br /> <span className="text-primary-400">Truyền Thống</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-slate-200 max-w-lg"
            >
              Ngôi trường công lập đạt chuẩn quốc gia, giàu truyền thống nhất tỉnh Hà Giang. Nơi ươm mầm những tài năng cho quê hương.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4"
            >
              <button className="px-8 py-4 bg-primary-500 hover:bg-primary-600 rounded-2xl font-bold transition-all flex items-center gap-2 group">
                Tìm hiểu thêm
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-2xl font-bold transition-all border border-white/10">
                Liên hệ văn phòng
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { label: 'Học sinh', value: '2,500+', icon: Star },
          { label: 'Giáo viên', value: '150+', icon: Users },
          { label: 'Năm kinh nghiệm', value: '25+', icon: Shield },
          { label: 'Giải thưởng', value: '100+', icon: Zap },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow text-center"
          >
            <div className="w-12 h-12 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary-500">
              <stat.icon size={24} />
            </div>
            <h3 className="text-3xl font-bold text-slate-900">{stat.value}</h3>
            <p className="text-slate-500 font-medium mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </section>

      {/* Featured Images Grid */}
      <section className="space-y-8">
        <div className="flex justify-between items-end">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-slate-900">Hoạt động nổi bật</h2>
            <p className="text-slate-500">Ghi lại những khoảnh khắc đáng nhớ của thầy và trò.</p>
          </div>
          <button className="text-primary-500 font-bold flex items-center gap-1 hover:gap-2 transition-all">
            Xem tất cả <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            whileHover={{ y: -10 }}
            className="md:col-span-2 h-[400px] rounded-3xl overflow-hidden relative group"
          >
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200"
              alt="Activity 1"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
              <p className="text-white font-bold text-xl">Lễ hội văn hóa dân gian 2023</p>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ y: -10 }}
            className="h-[400px] rounded-3xl overflow-hidden relative group"
          >
            <img
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800"
              alt="Activity 2"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
              <p className="text-white font-bold text-xl">Giải bóng đá học sinh</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
