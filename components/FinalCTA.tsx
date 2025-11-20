import React from 'react';
import { GOOGLE_FORM_URL } from '../constants';

const FinalCTA: React.FC = () => {
  return (
    <section id="cta" className="py-20 sm:py-32 bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          연구에 기여하고 싶으신가요?
        </h2>
        <p className="max-w-xl mx-auto text-gray-400 text-lg mb-10">
          연구 참여를 희망하시거나 궁금한 점이 있다면, 지금 바로 아래 버튼을 눌러 양식을 작성하고 제출해주세요. 여러분의 소중한 시간이 의미있는 결과로 이어집니다.
        </p>
        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Google Form으로 신청하기 (새 창에서 열림)"
          className="inline-block bg-green-600 text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg shadow-green-600/30 hover:bg-green-500 transform hover:-translate-y-1 transition-all duration-300"
        >
          Google Form으로 신청하기
        </a>
      </div>
    </section>
  );
};

export default FinalCTA;