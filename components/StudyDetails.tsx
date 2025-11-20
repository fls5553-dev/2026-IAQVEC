import React from 'react';
import { VrIcon } from './icons/VrIcon';
import { BeakerIcon } from './icons/BeakerIcon';
import { PresentationIcon } from './icons/PresentationIcon';

const DetailCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-green-500/50 transition-colors duration-300 flex flex-col">
    <div className="flex items-center space-x-4 mb-4">
      <div className="bg-gray-700 p-3 rounded-full">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    <p className="text-gray-400 flex-grow">{children}</p>
  </div>
);

const StudyDetails: React.FC = () => {
  return (
    <section id="study-details" className="py-20 sm:py-28 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            어떤 연구인가요?
          </h2>
          <p className="text-gray-400 text-lg">
            본 연구는 교실 환경의 핵심 요소인 '창문'이 우리의 뇌, 특히 안정과 집중 상태를 나타내는 <strong className="text-green-300">알파파(Alpha wave)</strong>에 미치는 영향을 과학적으로 분석합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <DetailCard icon={<VrIcon className="w-6 h-6 text-green-400" />} title="최첨단 실험 방식">
            참여자는 VR(가상현실)로 구현된 교실에서 다양한 창문 디자인을 경험합니다. 동시에 무선 EEG 장비가 뇌파를 실시간으로 측정하여, 각 환경에 대한 인지적 반응(알파파 변화)을 정밀하게 수집합니다.
          </DetailCard>
          <DetailCard icon={<BeakerIcon className="w-6 h-6 text-green-400" />} title="연구 목표 및 중요성">
            건축 환경이 인간의 인지 능력과 심리적 안정에 미치는 영향을 과학적으로 규명합니다. 이 결과는 학습 효율을 높이고 스트레스를 줄이는 차세대 교육 및 업무 공간 설계의 중요한 기초 자료가 될 것입니다.
          </DetailCard>
          <DetailCard icon={<PresentationIcon className="w-6 h-6 text-green-400" />} title="학술적 기여">
            연구 결과는 <strong className="text-white">2026년 미국 로스앤젤레스(LA)</strong>에서 개최되는 권위 있는 국제 학회, IAQVEC에서 발표될 예정입니다. 이미 초록이 접수되어 학술적 가치를 인정받았습니다.
          </DetailCard>
        </div>
      </div>
    </section>
  );
};

export default StudyDetails;