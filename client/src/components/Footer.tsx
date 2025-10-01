import { Umbrella } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Umbrella className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">유니버슈룹</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              대학 캠퍼스를 위한<br />
              지속 가능한 공유 우산 서비스
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">사업자 정보</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>사업자명: 유니버슈룹</p>
              <p>개인정보책임자: 최성준</p>
              <p>주소: 성북구 정릉로 77<br />국민대학교 N11 체육관</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">바로가기</h3>
            <div className="space-y-2 text-sm">
              <button
                onClick={() => document.getElementById('rental-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-footer-rental"
              >
                우산 대여 신청
              </button>
              <button
                onClick={() => document.getElementById('advertiser')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-footer-advertiser"
              >
                광고주 모집
              </button>
              <Link href="/admin">
                <a className="block text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-admin">
                  관리자 페이지
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} 유니버슈룹. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
