import React from 'react';
import { CalendarIcon } from './icons/CalendarIcon';
import { LocationMarkerIcon } from './icons/LocationMarkerIcon';
import { ClockIcon } from './icons/ClockIcon';
import { UserCheckIcon } from './icons/UserCheckIcon';
import { ClipboardListIcon } from './icons/ClipboardListIcon';
import { GiftIcon } from './icons/GiftIcon';
import { DatabaseIcon } from './icons/DatabaseIcon';
import { ShieldCheckIcon } from './icons/ShieldCheckIcon';

const GuideItem: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="flex items-start space-x-4 p-4 bg-gray-800/40 rounded-lg border border-gray-700/50">
      <div className="flex-shrink-0 mt-1 text-green-400">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-lg text-green-300 mb-1">{title}</h4>
        <div className="text-gray-300 space-y-1">{children}</div>
      </div>
    </div>
);


const ParticipationGuide: React.FC = () => {
  return (
    <section id="participation-guide" className="py-20 sm:py-28 bg-gray-800/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              참여 안내
            </h2>
            <p className="text-gray-400 text-lg">
                연구 참여에 필요한 모든 정보를 확인하세요.
            </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
            <GuideItem icon={<CalendarIcon className="w-8 h-8" />} title="실험 날짜">
                <p><strong>11월 26일 (수)</strong> 혹은 <strong>11월 28일 (금)</strong> 중 가능한 날짜를 Google Form에서 선택하여 하루 참여해주시면 됩니다.</p>
            </GuideItem>
            <GuideItem icon={<ClockIcon className="w-8 h-8" />} title="소요 시간">
                <p>실험 준비, 본 실험, 설문 작성 및 휴식 시간을 포함하여 <strong className="text-white">약 15분</strong> 정도 소요될 예정입니다.</p>
            </GuideItem>
            <GuideItem icon={<LocationMarkerIcon className="w-8 h-8" />} title="실험 장소">
                <p><strong className="text-white">명지대학교 디자인조형센터.</strong> 참여가 확정된 분들께 이메일을 통해 추후 개별적으로 상세 위치를 공지할 예정입니다.</p>
            </GuideItem>
             <GuideItem icon={<UserCheckIcon className="w-8 h-8" />} title="참여 자격 요건">
                <p>• 만 19세 이상 35세 미만의 성인</p>
                <p>• 시각/청각 및 뇌 관련 질환이 없으신 분</p>
            </GuideItem>
            <GuideItem icon={<ClipboardListIcon className="w-8 h-8" />} title="실험 절차">
                <p>1. 연구 설명 및 참여 동의서 작성</p>
                <p>2. EEG 장비 착용 및 신호 안정화</p>
                <p>3. VR 환경 적응 및 과제 수행</p>
                <p>4. 실험 후 설문지 작성</p>
            </GuideItem>
            <GuideItem icon={<ShieldCheckIcon className="w-8 h-8" />} title="참여 준비사항">
                 <p>보다 정확한 뇌파 측정을 위해 아래 사항들을 지켜주시는 것을 권장하며, 필수 사항은 아닙니다.</p>
                 <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
                    <li>실험 전 24시간 동안 <strong className="text-white">카페인 음료</strong>(커피, 차, 에너지 드링크 등) 섭취를 금지합니다.</li>
                    <li>실험 전 48시간 동안 <strong className="text-white">음주</strong>를 금지합니다.</li>
                    <li>최근 7일간 하루 최소 <strong className="text-white">6시간 이상</strong> 충분한 수면을 유지해주세요.</li>
                    <li>실험 당일, 머리를 청결히 하고 <strong className="text-white">헤어 제품(왁스, 젤, 스프레이 등)을 사용하지 않은 상태</strong>로 방문해주세요.</li>
                </ul>
            </GuideItem>
            <GuideItem icon={<GiftIcon className="w-8 h-8" />} title="참여 보상">
                <p>실험에 참여해주시는 모든 분들께 소정의 <strong className="text-white">간식을 제공</strong>해 드립니다.</p>
            </GuideItem>
             <GuideItem icon={<DatabaseIcon className="w-8 h-8" />} title="결과 활용 방안">
                <p>수집된 데이터는 개인정보를 알아볼 수 없도록 <strong className="text-white">익명으로 처리</strong>됩니다. 데이터는 2026 IAQVEC 학회 논문 발표 및 후속 연구를 위한 통계 분석 목적으로만 사용됩니다.</p>
            </GuideItem>
        </div>
      </div>
    </section>
  );
};

export default ParticipationGuide;