import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { motion } from 'motion/react';

export function Layout() {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar />
      <main className="flex-1 lg:ml-[80px] transition-all duration-300">
        <div className="max-w-7xl mx-auto p-4 md:p-8 lg:p-12">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
