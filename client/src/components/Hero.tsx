import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/Campus_umbrella_sharing_scene_6c65b196.png";

export default function Hero() {
  const scrollToRentalForm = () => {
    const element = document.getElementById('rental-form');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="캠퍼스 우산 공유 서비스"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            비 오는 날,<br />
            더 이상 우산 걱정 없이
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            대학 캠퍼스 공유 우산 서비스. 무료로 이용하고 환경도 보호하세요.<br />
            광고 모델로 운영되어 학생들은 완전 무료!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={scrollToRentalForm}
              className="text-base"
              data-testid="button-hero-cta"
            >
              지금 바로 신청하기
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-base bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              data-testid="button-learn-more"
            >
              자세히 알아보기
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-8 text-white/90">
            <div>
              <div className="text-3xl font-bold">2,500+</div>
              <div className="text-sm">누적 이용자</div>
            </div>
            <div>
              <div className="text-3xl font-bold">5개</div>
              <div className="text-sm">파트너 대학</div>
            </div>
            <div>
              <div className="text-3xl font-bold">98%</div>
              <div className="text-sm">만족도</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
