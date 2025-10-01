import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import brandedUmbrellaImage from "@assets/generated_images/Branded_umbrella_close-up_61cc48a7.png";

const advertiserFormSchema = z.object({
  companyName: z.string().min(1, "기업명을 입력해주세요"),
  ceoName: z.string().min(1, "대표자명을 입력해주세요"),
  phone: z.string().min(1, "전화번호를 입력해주세요"),
  email: z.string().email("올바른 이메일을 입력해주세요")
});

type AdvertiserFormData = z.infer<typeof advertiserFormSchema>;

export default function AdvertiserSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<AdvertiserFormData>({
    resolver: zodResolver(advertiserFormSchema),
    defaultValues: {
      companyName: "",
      ceoName: "",
      phone: "",
      email: ""
    }
  });

  const onSubmit = async (data: AdvertiserFormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/advertiser-applications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          companyName: data.companyName,
          ceoName: data.ceoName,
          phone: data.phone,
          email: data.email,
          status: "검토중"
        }),
      });

      if (!response.ok) {
        throw new Error("신청 중 오류가 발생했습니다");
      }

      toast({
        title: "신청 완료!",
        description: "광고 신청이 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "신청 실패",
        description: "신청 중 오류가 발생했습니다. 다시 시도해주세요.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="advertiser" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              광고주 모집
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              재활용 및 재사용 우산에 광고를 넣음으로써 무료 공유 우산 서비스를 시작합니다.<br />
              도둑맞을 걱정도 없고, 대학생들에게 직접 다가갈 수 있는 효과적인 마케팅 채널입니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <img
                    src={brandedUmbrellaImage}
                    alt="광고가 있는 우산"
                    className="w-full rounded-lg mb-6"
                  />
                  <h3 className="text-xl font-semibold mb-4">광고 모델의 장점</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>대학생 타겟 마케팅에 최적화된 광고 플랫폼</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>비 오는 날마다 자연스럽게 노출되는 브랜드</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>환경 보호에 기여하는 기업 이미지 제고</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>광고가 있어 도난 방지 효과까지</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">광고 신청</CardTitle>
                <CardDescription>
                  우산에 광고를 게재하고 싶으신가요? 정보를 남겨주세요
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="companyName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>기업명</FormLabel>
                          <FormControl>
                            <Input placeholder="(주)회사명" {...field} data-testid="input-company-name" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="ceoName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>대표자명</FormLabel>
                          <FormControl>
                            <Input placeholder="홍길동" {...field} data-testid="input-ceo-name" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>전화번호</FormLabel>
                          <FormControl>
                            <Input placeholder="02-1234-5678" {...field} data-testid="input-advertiser-phone" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>이메일</FormLabel>
                          <FormControl>
                            <Input 
                              type="email" 
                              placeholder="contact@company.com" 
                              {...field} 
                              data-testid="input-advertiser-email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full" 
                      size="lg"
                      disabled={isSubmitting}
                      data-testid="button-submit-advertiser"
                    >
                      {isSubmitting ? "신청 중..." : "광고 신청하기"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
