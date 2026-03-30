import React from 'react';
import { motion } from 'motion/react';

const faculty = [
  {
    name: 'TS. Nguyễn Văn A',
    role: 'Hiệu trưởng',
    imageUrl: 'https://picsum.photos/seed/teacher1/400/400',
    bio: 'Hơn 30 năm kinh nghiệm trong quản lý giáo dục và nghiên cứu khoa học.',
  },
  {
    name: 'ThS. Trần Thị B',
    role: 'Phó Hiệu trưởng',
    imageUrl: 'https://picsum.photos/seed/teacher2/400/400',
    bio: 'Chuyên gia về phương pháp giảng dạy hiện đại và tâm lý học đường.',
  },
  {
    name: 'Thầy James Wilson',
    role: 'Trưởng bộ môn Tiếng Anh',
    imageUrl: 'https://picsum.photos/seed/teacher3/400/400',
    bio: 'Đến từ Anh Quốc, có chứng chỉ giảng dạy quốc tế CELTA và 10 năm kinh nghiệm.',
  },
  {
    name: 'Cô Lê Thị C',
    role: 'Trưởng bộ môn Toán',
    imageUrl: 'https://picsum.photos/seed/teacher4/400/400',
    bio: 'Giáo viên dạy giỏi cấp thành phố, tâm huyết với bồi dưỡng học sinh giỏi.',
  },
];

export function Faculty() {
  return (
    <div className="space-y-16">
      <div className="max-w-2xl space-y-4">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-4xl font-bold text-slate-900"
        >
          Đội Ngũ Giáo Viên
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-slate-500"
        >
          Hội tụ những nhà giáo tâm huyết, giàu kinh nghiệm và luôn đổi mới sáng tạo trong giảng dạy.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {faculty.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group"
          >
            <div className="relative aspect-square rounded-[2.5rem] overflow-hidden mb-6 shadow-lg">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider">{member.role}</p>
              <p className="text-slate-500 text-sm leading-relaxed">{member.bio}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
