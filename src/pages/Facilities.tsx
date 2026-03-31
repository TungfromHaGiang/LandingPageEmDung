import React from 'react';
import { motion } from 'motion/react';
import { FACILITIES } from '../constants';

export function Facilities() {
  return (
    <div className="space-y-12">
      <div className="max-w-2xl space-y-4">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-4xl font-bold text-slate-900"
        >
          Cơ Sở Vật Chất
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-slate-500"
        >
          Chúng tôi tự hào sở hữu hệ thống cơ sở vật chất hiện đại, khang trang, đáp ứng mọi nhu cầu học tập và rèn luyện của học sinh.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FACILITIES.map((facility, i) => (
          <motion.div
            key={facility.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500"
          >
            <div className="h-64 overflow-hidden relative">
              <img
                src={facility.imageUrl}
                alt={facility.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-primary-500 shadow-sm">
                Đạt chuẩn
              </div>
            </div>
            <div className="p-8 space-y-3">
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                {facility.title}
              </h3>
              <p className="text-slate-500 leading-relaxed">
                {facility.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Virtual Tour Section */}
      <section className="bg-primary-500 rounded-[3rem] p-12 text-white relative overflow-hidden">
        <div className="relative z-10 max-w-xl space-y-6">
          <h2 className="text-3xl font-bold whitespace-nowrap">Học tập và làm theo tư tưởng Hồ Chí Minh</h2>
          <p className="text-primary-100 text-lg">
              Ý thức làm chủ không chỉ không phải chỉ tỏ rõ ở tinh thần hăng hái lao động, mà còn phải tỏ rõ ở tinh thần say mê học tập để không ngừng nâng cao năng lực làm chủ của mình.
          </p>
          <button className="px-8 py-4 bg-white text-primary-500 rounded-2xl font-bold hover:bg-primary-50 transition-colors shadow-lg">
            Chủ tịch Hồ Chí Minh
          </button>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path fill="#FFFFFF" d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.6,-31.3,86.9,-15.7,85.2,-0.9C83.6,13.8,77.1,27.7,68.4,39.9C59.7,52.1,48.8,62.7,36.1,70.1C23.4,77.5,8.9,81.7,-5.1,80.6C-19.1,79.5,-32.5,73.1,-44.1,64.2C-55.7,55.3,-65.4,43.9,-71.9,31.1C-78.4,18.3,-81.7,4.1,-79.9,-9.4C-78.1,-22.9,-71.2,-35.7,-61.7,-46.3C-52.2,-56.9,-40.1,-65.3,-27.4,-72.1C-14.7,-78.9,-1.4,-84.1,13.1,-83.1C27.6,-82.1,44.7,-76.4,44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
        </div>
      </section>
    </div>
  );
}
