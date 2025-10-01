import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Umbrella } from "lucide-react";

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover-elevate rounded-lg px-3 py-2">
            <Umbrella className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">유니버슈룹</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('benefits')}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              data-testid="link-benefits"
            >
              서비스 소개
            </button>
            <button
              onClick={() => scrollToSection('rental-form')}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              data-testid="link-rental"
            >
              우산 대여
            </button>
            <button
              onClick={() => scrollToSection('advertiser')}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              data-testid="link-advertiser"
            >
              광고 신청
            </button>
          </nav>

          <Button
            onClick={() => scrollToSection('rental-form')}
            className="hidden md:flex"
            data-testid="button-rental-cta"
          >
            우산 신청하기
          </Button>
        </div>
      </div>
    </header>
  );
}
