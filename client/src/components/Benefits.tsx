import { Card, CardContent } from "@/components/ui/card";
import { Gift, MapPin, Leaf, ShieldCheck, Megaphone, RefreshCw } from "lucide-react";

const benefits = [
  {
    icon: Gift,
    title: "완전 무료 서비스",
    description: "광고 모델로 운영되어 학생들은 100% 무료로 이용할 수 있어요."
  },
  {
    icon: MapPin,
    title: "캠퍼스 곳곳에",
    description: "학교 곳곳에 설치된 대여소에서 편리하게 빌리고 반납하세요."
  },
  {
    icon: Leaf,
    title: "환경 보호",
    description: "재활용 우산으로 일회용 우산 사용을 줄이고 지구를 지켜요."
  },
  {
    icon: ShieldCheck,
    title: "분실 걱정 없음",
    description: "광고가 있어 도난 걱정도 줄어들고, 분실해도 부담 없어요."
  },
  {
    icon: Megaphone,
    title: "광고 수익 모델",
    description: "기업 광고로 운영되어 지속 가능한 무료 서비스를 제공해요."
  },
  {
    icon: RefreshCw,
    title: "간편한 반납",
    description: "어느 대여소에나 반납 가능! 편한 곳에 반납하면 끝."
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            왜 공유 우산을 써야 할까요?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            급작스러운 비에 당황하지 마세요. 우리가 준비했어요!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover-elevate" data-testid={`card-benefit-${index}`}>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
