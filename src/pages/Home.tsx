import React from 'react';
import { motion } from 'motion/react';
import {ArrowRight, Star, Shield, Zap, Users, Medal} from 'lucide-react';

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
          { label: 'Học sinh', value: '1,800+', icon: Star },
          { label: 'Giáo viên', value: '50+', icon: Users },
          { label: 'Năm kinh nghiệm', value: '65+', icon: Shield },
          { label: 'Nhà giáo ưu tứ', value: '07', icon: Medal },
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
            <h2 className="text-3xl font-bold text-slate-900">Trường học giàu thành tích</h2>
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
              src="https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/492452378_1269310045096922_7822917896949911193_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=rezDgKTZQOoQ7kNvwFrdyg1&_nc_oc=AdoeU-AxfxJkg8gdL9Eq0GfgSafRPTelwvi4wc3slNVwlJg78HY-S_e9udcjY6xsUFk&_nc_zt=23&_nc_ht=scontent.fhan5-8.fna&_nc_gid=qPN1cf_-1EJf-XNo2Vqhfg&_nc_ss=7a3a8&oh=00_Afx7BlS2k2xNRjfJnzmGG00IrVIUY9A9O4N5sPtO1FKhnA&oe=69D1C670"
              alt="Activity 1"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
              <p className="text-white font-bold text-xl">Chi Hội Cựu giáo chức trường THPT Lê Hồng Phong</p>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ y: -10 }}
            className="h-[400px] rounded-3xl overflow-hidden relative group"
          >
            <img
              src="https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-6/596396998_1534315031530562_3539168427374918870_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=IKVgO0CUNPAQ7kNvwGFwF28&_nc_oc=AdrsQje2L_kit7pdfmOzp6yGGqr5cE-JIajLPEqfAr9akDFCutF0px9h-QXG0bkkEK8&_nc_zt=23&_nc_ht=scontent.fhan5-11.fna&_nc_gid=2PcoY0LXZNzUMw3Cnl7T4Q&_nc_ss=7a3a8&oh=00_Afz_6JnCIMBtm434-SKFPHOMVBR4DojaG_1GMrxIazsRQA&oe=69D1CB50"
              alt="Activity 2"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
              <p className="text-white font-bold text-xl">Giao lưu trao đổi công tác chuyên môn năm học 2025-2026</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
