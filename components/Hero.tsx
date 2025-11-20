import React from 'react';
import { GOOGLE_FORM_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: "url('https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1920&auto=format&fit=crop')"}}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/80 to-gray-900"></div>
      
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-sm font-bold uppercase tracking-widest text-green-400 mb-4">
          2026 IAQVEC 국제 학회 발표 예정 연구
        </h2>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tighter leading-tight">
          가상 교실 속 <span className="text-green-400">뇌파 반응</span> 연구 참여자 모집
        </h1>
        <div className="w-48 h-px bg-green-500/40 mx-auto my-6"></div>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-10">
          VR과 EEG 기술을 통해 창문 유형이 우리의 인지 반응에 미치는 영향을 분석합니다. 여러분의 참여가 미래의 건축 환경을 설계하는 데 중요한 데이터가 됩니다.
        </p>
        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="연구 참여 및 문의하기 (새 창에서 열림)"
          className="inline-block bg-green-600 text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg shadow-green-600/30 hover:bg-green-500 transform hover:-translate-y-1 transition-all duration-300"
        >
          연구 참여 및 문의하기
        </a>
      </div>
    </section>
  );
};

export default Hero;