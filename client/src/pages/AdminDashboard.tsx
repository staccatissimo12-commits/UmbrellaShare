import { useLocation, Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Umbrella, LogOut, Users, Megaphone, Loader2 } from "lucide-react";
import { format } from "date-fns";
import { ko } from "date-fns/locale";

type RentalApplication = {
  id: string;
  name: string;
  email: string;
  department: string;
  studentId: string;
  phone: string;
  rentalDate: string;
  returnDate: string;
  status: string;
  createdAt: string;
};

type AdvertiserApplication = {
  id: string;
  companyName: string;
  ceoName: string;
  phone: string;
  email: string;
  status: string;
  createdAt: string;
};

export default function AdminDashboard() {
  const [, setLocation] = useLocation();

  const handleLogout = () => {
    setLocation("/admin");
  };

  const { data: rentalData = [], isLoading: isLoadingRentals } = useQuery<RentalApplication[]>({
    queryKey: ["/api/rental-applications"],
  });

  const { data: advertiserData = [], isLoading: isLoadingAdvertisers } = useQuery<AdvertiserApplication[]>({
    queryKey: ["/api/advertiser-applications"],
  });

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/">
              <a className="flex items-center gap-2" data-testid="link-dashboard-home">
                <Umbrella className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">유니버슈룹 관리자</span>
              </a>
            </Link>
            <Button
              variant="outline"
              onClick={handleLogout}
              data-testid="button-logout"
            >
              <LogOut className="mr-2 h-4 w-4" />
              로그아웃
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">대시보드</h1>
          <p className="text-muted-foreground">
            우산 대여 및 광고 신청 현황을 관리하세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                전체 대여 신청
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {isLoadingRentals ? <Loader2 className="h-6 w-6 animate-spin" /> : rentalData.length}
              </div>
              <p className="text-xs text-muted-foreground">
                총 신청 건수
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                광고 신청
              </CardTitle>
              <Megaphone className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {isLoadingAdvertisers ? <Loader2 className="h-6 w-6 animate-spin" /> : advertiserData.length}
              </div>
              <p className="text-xs text-muted-foreground">
                총 광고주 신청
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                대여중
              </CardTitle>
              <Umbrella className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {isLoadingRentals ? (
                  <Loader2 className="h-6 w-6 animate-spin" />
                ) : (
                  rentalData.filter(r => r.status === "대여중").length
                )}
              </div>
              <p className="text-xs text-muted-foreground">
                현재 대여 중인 우산
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="rentals" className="space-y-6">
          <TabsList>
            <TabsTrigger value="rentals" data-testid="tab-rentals">
              우산 대여 신청
            </TabsTrigger>
            <TabsTrigger value="advertisers" data-testid="tab-advertisers">
              광고주 신청
            </TabsTrigger>
          </TabsList>

          <TabsContent value="rentals" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>우산 대여 신청 내역</CardTitle>
                <CardDescription>
                  학생들의 우산 대여 신청을 관리하세요
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isLoadingRentals ? (
                  <div className="flex items-center justify-center py-8">
                    <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                  </div>
                ) : rentalData.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    아직 신청된 내역이 없습니다.
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>이름</TableHead>
                          <TableHead>학과</TableHead>
                          <TableHead>학번</TableHead>
                          <TableHead>이메일</TableHead>
                          <TableHead>전화번호</TableHead>
                          <TableHead>대여날짜</TableHead>
                          <TableHead>반납날짜</TableHead>
                          <TableHead>상태</TableHead>
                          <TableHead>신청일시</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {rentalData.map((rental) => (
                          <TableRow key={rental.id} data-testid={`row-rental-${rental.id}`}>
                            <TableCell className="font-medium">{rental.name}</TableCell>
                            <TableCell>{rental.department}</TableCell>
                            <TableCell>{rental.studentId}</TableCell>
                            <TableCell>{rental.email}</TableCell>
                            <TableCell>{rental.phone}</TableCell>
                            <TableCell>{rental.rentalDate}</TableCell>
                            <TableCell>{rental.returnDate}</TableCell>
                            <TableCell>
                              <Badge
                                variant={rental.status === "대여중" ? "default" : "secondary"}
                              >
                                {rental.status}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              {format(new Date(rental.createdAt), "yyyy-MM-dd HH:mm", { locale: ko })}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="advertisers" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>광고주 신청 내역</CardTitle>
                <CardDescription>
                  광고주의 신청을 검토하고 관리하세요
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isLoadingAdvertisers ? (
                  <div className="flex items-center justify-center py-8">
                    <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                  </div>
                ) : advertiserData.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    아직 신청된 내역이 없습니다.
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>기업명</TableHead>
                          <TableHead>대표자명</TableHead>
                          <TableHead>전화번호</TableHead>
                          <TableHead>이메일</TableHead>
                          <TableHead>상태</TableHead>
                          <TableHead>신청일시</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {advertiserData.map((advertiser) => (
                          <TableRow key={advertiser.id} data-testid={`row-advertiser-${advertiser.id}`}>
                            <TableCell className="font-medium">{advertiser.companyName}</TableCell>
                            <TableCell>{advertiser.ceoName}</TableCell>
                            <TableCell>{advertiser.phone}</TableCell>
                            <TableCell>{advertiser.email}</TableCell>
                            <TableCell>
                              <Badge
                                variant={advertiser.status === "승인완료" ? "default" : "secondary"}
                              >
                                {advertiser.status}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              {format(new Date(advertiser.createdAt), "yyyy-MM-dd HH:mm", { locale: ko })}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
