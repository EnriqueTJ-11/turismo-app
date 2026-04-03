import React from "react";
import Image from "next/image";

const PlansHero: React.FC = () => {
  return (
    <section className="relative h-64 w-full overflow-hidden flex items-center justify-center bg-slate-900">
      <div className="absolute inset-0 opacity-60">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUPQ4FTaudHjVh2_9d1HiiK6eusfERSGpn7oMsCDbheNkDXeULpV_DGhVDdxWUNxKgonnPyeG8qVo7oKw3hRBPw3k_52kxUodBxifXEGMG90eIyZKkSYsfMLUxGQuAaG5BVWb7JeoFPSvcmBEztctvkJ7FcAg6W1JJjBIt7WfRoKtK5NTMAnUZFp_BVpmYpIYpXwNupbuk7nEDq9qOle24pHekLpTzVV5leM91Dj8xb9na0eDXQOwyru2GZYJcQfAXkOqNIkyQy2o"
          alt="Selva amazónica"
          title="Selva amazónica"
          fill
          sizes="100vw"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
          Planes Turísticos
        </h1>
        <p className="text-lg text-slate-100 max-w-2xl mx-auto">
          Descubre las maravillas escondidas del piedemonte amazónico, donde la
          selva se encuentra con los Andes.
        </p>
      </div>
    </section>
  );
};

export default PlansHero;
