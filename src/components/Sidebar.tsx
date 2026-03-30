import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Home, BookOpen, Image as ImageIcon, Mail, Users, ChevronRight } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { cn } from '../lib/utils';

const iconMap: Record<string, any> = {
  Home,
  BookOpen,
  ImageIcon,
  Mail,
  Users,
};

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md lg:hidden"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <motion.aside
        initial={false}
        animate={{ width: isOpen ? '280px' : '80px' }}
        className={cn(
          "fixed top-0 left-0 h-full bg-white border-r border-slate-200 z-40 transition-all duration-300 ease-in-out hidden lg:flex flex-col",
          !isOpen && "items-center"
        )}
      >
        <div className="p-6 flex items-center justify-between">
          {isOpen && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-bold text-xl text-primary-500 tracking-tight"
            >
              THPT LÊ HỒNG PHONG
            </motion.span>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 hover:bg-slate-100 rounded-full transition-colors"
          >
            <ChevronRight className={cn("transition-transform duration-300", isOpen && "rotate-180")} size={20} />
          </button>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          {NAV_ITEMS.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "flex items-center p-3 rounded-xl transition-all duration-200 group",
                    isActive
                      ? "bg-primary-50 text-primary-500"
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                  )
                }
              >
                <Icon size={24} className={cn("shrink-0", isOpen ? "mr-4" : "mx-auto")} />
                {isOpen && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="font-medium"
                  >
                    {item.title}
                  </motion.span>
                )}
              </NavLink>
            );
          })}
        </nav>

        {isOpen && (
          <div className="p-6 border-t border-slate-100">
            <div className="bg-primary-500 rounded-2xl p-4 text-white">
              <p className="text-xs font-semibold uppercase tracking-wider opacity-80">Truyền thống & Tương lai</p>
              <p className="text-sm mt-1 font-medium">Ngôi trường giàu truyền thống nhất tỉnh Hà Giang</p>
            </div>
          </div>
        )}
      </motion.aside>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
          />
        )}
      </AnimatePresence>

      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 0 : -300 }}
        className="fixed top-0 left-0 h-full w-[280px] bg-white z-40 lg:hidden flex flex-col shadow-2xl"
      >
        <div className="p-6">
          <span className="font-bold text-xl text-primary-500">THPT LÊ HỒNG PHONG</span>
        </div>
        <nav className="flex-1 px-4 space-y-2">
          {NAV_ITEMS.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "flex items-center p-3 rounded-xl transition-all duration-200",
                    isActive
                      ? "bg-primary-50 text-primary-500"
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                  )
                }
              >
                <Icon size={24} className="mr-4" />
                <span className="font-medium">{item.title}</span>
              </NavLink>
            );
          })}
        </nav>
      </motion.aside>
    </>
  );
}
