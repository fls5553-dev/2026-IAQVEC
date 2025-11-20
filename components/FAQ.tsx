import React from 'react';
import { ChevronDownIcon } from './icons/ChevronDownIcon';

const FaqItem: React.FC<{ question: string; children: React.ReactNode }> = ({ question, children }) => (
  <details className="group border-b border-gray-700 py-4">
    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
      <span className="text-lg text-gray-200 group-hover:text-green-400 transition-colors">{question}</span>
      <span className="transition-transform transform group-open:-rotate-180">
        <ChevronDownIcon className="w-6 h-6 text-gray-400" />
      </span>
    </summary>
    <div className="text-gray-400 mt-4 prose prose-invert prose-p:text-gray-400">
      {children}
    </div>
  </details>
);

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-20 sm:py-28 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            자주 묻는 질문 (FAQ)
          </h2>
          <p className="text-gray-400 text-lg">
            연구 참여와 관련하여 궁금한 점들을 미리 확인해보세요.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <FaqItem question="EEG(뇌파) 측정은 안전한가요?">
            <p>네, 완전히 안전합니다. EEG는 뇌에서 발생하는 자연적인 전기 신호를 외부에서 수동적으로 측정하는 비침습적인 기술입니다. 인체에 어떠한 전기 자극도 가하지 않으며, 방사선 노출 위험도 전혀 없습니다.</p>
          </FaqItem>
          <FaqItem question="VR 기기를 사용하면 멀미가 나지 않을까요?">
            <p>저희는 최신 고성능 VR 장비를 사용하여 멀미 발생 가능성을 최소화했습니다. 실험 중 불편함을 느끼시면 언제든지 휴식을 취할 수 있으며, 연구원이 즉시 도와드릴 것입니다.</p>
          </FaqItem>
          <FaqItem question="실험 참여를 위해 특별히 준비해야 할 것이 있나요?">
            <p>특별한 준비는 필요 없습니다. 다만, 실험 전날 충분한 수면을 취하고, 실험 당일에는 머리를 청결히 하고 편안한 복장으로 오시는 것을 권장합니다. (헤어 제품 사용 자제)</p>
          </FaqItem>
          <FaqItem question="개인 정보는 어떻게 관리되나요?">
            <p>수집된 모든 데이터는 익명으로 처리되며, 연구 분석 목적으로만 사용됩니다. 개인을 식별할 수 있는 정보는 엄격하게 분리하여 관리하므로 안심하셔도 좋습니다.</p>
          </FaqItem>
        </div>
      </div>
    </section>
  );
};

export default FAQ;