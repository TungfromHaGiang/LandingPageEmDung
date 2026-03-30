import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
  return (
    <div className="space-y-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-12">
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl font-bold text-slate-900"
            >
              Liên Hệ Với Chúng Tôi
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500"
            >
              Chúng tôi luôn sẵn sàng lắng nghe và giải đáp mọi thắc mắc của quý phụ huynh và học sinh.
            </motion.p>
          </div>

          <div className="space-y-8">
            {[
              { icon: MapPin, title: 'Địa chỉ', content: 'Số 123, Đường Giáo Dục, Quận Cầu Giấy, Hà Nội' },
              { icon: Phone, title: 'Điện thoại', content: '024 1234 5678 - 0987 654 321' },
              { icon: Mail, title: 'Email', content: 'tuyensinh@eduschool.edu.vn' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.2 }}
                className="flex gap-6"
              >
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-primary-500 shrink-0">
                  <item.icon size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{item.title}</h3>
                  <p className="text-slate-500 mt-1">{item.content}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Map Placeholder */}
          <div className="h-[300px] bg-slate-200 rounded-3xl overflow-hidden relative group">
            <img
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000"
              alt="Map"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg font-bold text-primary-500">
                Xem trên Google Maps
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white p-10 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Gửi tin nhắn cho chúng tôi</h2>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Họ và tên</label>
                <input
                  type="text"
                  placeholder="Nguyễn Văn A"
                  className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Số điện thoại</label>
                <input
                  type="tel"
                  placeholder="09xx xxx xxx"
                  className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Email</label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-primary-500 outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Nội dung quan tâm</label>
              <select className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-primary-500 outline-none transition-all appearance-none">
                <option>Hợp tác giáo dục</option>
                <option>Góp ý xây dựng</option>
                <option>Khác</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Lời nhắn</label>
              <textarea
                rows={4}
                placeholder="Nhập lời nhắn của bạn..."
                className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-primary-500 outline-none transition-all resize-none"
              />
            </div>
            <button className="w-full py-5 bg-primary-500 hover:bg-primary-600 text-white rounded-2xl font-bold shadow-lg shadow-primary-200 transition-all flex items-center justify-center gap-2 group">
              Gửi yêu cầu
              <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
