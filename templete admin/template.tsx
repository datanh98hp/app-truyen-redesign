import React, { useState } from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import {
  LayoutDashboard,
  BarChart3,
  Database,
  PieChart,
  Settings,
  Users,
  DollarSign,
  ShoppingCart,
  Activity,
  Search,
  Bell,
  User,
  ChevronDown,
  TrendingUp,
  TrendingDown,
  Eye,
  Clock,
  Repeat
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Alert, AlertDescription } from '@/components/ui/alert';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Sample data
  const revenueData = [
    { month: 'T1', revenue: 4000, orders: 240 },
    { month: 'T2', revenue: 3000, orders: 139 },
    { month: 'T3', revenue: 2000, orders: 980 },
    { month: 'T4', revenue: 2780, orders: 390 },
    { month: 'T5', revenue: 1890, orders: 480 },
    { month: 'T6', revenue: 2390, orders: 380 },
    { month: 'T7', revenue: 3490, orders: 430 },
  ];

  const userDistribution = [
    { name: 'Desktop', value: 400, color: '#8884d8' },
    { name: 'Mobile', value: 300, color: '#82ca9d' },
    { name: 'Tablet', value: 200, color: '#ffc658' },
  ];

  const userData = [
    { id: '#001', name: 'Nguyễn Văn A', email: 'nguyenvana@email.com', role: 'Admin', status: 'active', date: '15/01/2025' },
    { id: '#002', name: 'Trần Thị B', email: 'tranthib@email.com', role: 'User', status: 'active', date: '18/01/2025' },
    { id: '#003', name: 'Lê Văn C', email: 'levanc@email.com', role: 'Moderator', status: 'inactive', date: '20/01/2025' },
    { id: '#004', name: 'Phạm Thị D', email: 'phamthid@email.com', role: 'User', status: 'active', date: '22/01/2025' },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [settings, setSettings] = useState({
    autoMaintenance: true,
    emailNotifications: false,
    dailyBackup: true,
    darkMode: false,
    twoFactor: true,
    autoLogout: true,
    dataEncryption: true,
    activityLog: false,
  });

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'analytics', label: 'Thống kê', icon: BarChart3 },
    { id: 'data', label: 'Bảng dữ liệu', icon: Database },
    { id: 'charts', label: 'Biểu đồ', icon: PieChart },
    { id: 'settings', label: 'Cài đặt', icon: Settings },
  ];

  const StatCard = ({ title, value, change, changeType, icon: Icon, description }) => (
    <Card className="relative overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
          {changeType === 'positive' ? (
            <TrendingUp className="h-3 w-3 text-green-500" />
          ) : (
            <TrendingDown className="h-3 w-3 text-red-500" />
          )}
          <span className={changeType === 'positive' ? 'text-green-500' : 'text-red-500'}>
            {change}
          </span>
          <span>so với tháng trước</span>
        </div>
        {description && (
          <p className="text-xs text-muted-foreground mt-2">{description}</p>
        )}
      </CardContent>
    </Card>
  );

  const filteredUsers = userData.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <StatCard
                title="Tổng người dùng"
                value="2,547"
                change="+12%"
                changeType="positive"
                icon={Users}
                description="Người dùng hoạt động"
              />
              <StatCard
                title="Doanh thu tháng"
                value="₫45.2M"
                change="+8.5%"
                changeType="positive"
                icon={DollarSign}
                description="Tăng trưởng ổn định"
              />
              <StatCard
                title="Đơn hàng"
                value="1,429"
                change="-3.2%"
                changeType="negative"
                icon={ShoppingCart}
                description="Cần cải thiện conversion"
              />
              <StatCard
                title="Uptime hệ thống"
                value="97.8%"
                change="+0.3%"
                changeType="positive"
                icon={Activity}
                description="Hiệu suất tốt"
              />
            </div>

            {/* Charts Section */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Biểu đồ doanh thu</CardTitle>
                  <CardDescription>Doanh thu và đơn hàng 7 tháng gần đây</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line 
                        type="monotone" 
                        dataKey="revenue" 
                        stroke="#8884d8" 
                        strokeWidth={2}
                        name="Doanh thu (k)"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="orders" 
                        stroke="#82ca9d" 
                        strokeWidth={2}
                        name="Đơn hàng"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Phân bố thiết bị</CardTitle>
                  <CardDescription>Tỷ lệ truy cập theo thiết bị</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={userDistribution}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {userDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="flex justify-center space-x-4 mt-4">
                    {userDistribution.map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="text-sm text-muted-foreground">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Hoạt động gần đây</CardTitle>
                <CardDescription>Các sự kiện và thông báo mới nhất</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Alert>
                    <Activity className="h-4 w-4" />
                    <AlertDescription>
                      Hệ thống đã được cập nhật thành công lúc 14:30 hôm nay
                    </AlertDescription>
                  </Alert>
                  <Alert>
                    <Users className="h-4 w-4" />
                    <AlertDescription>
                      25 người dùng mới đăng ký trong 24h qua
                    </AlertDescription>
                  </Alert>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'analytics':
        return (
          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <StatCard
                title="Tỷ lệ chuyển đổi"
                value="86.4%"
                change="+5.2%"
                changeType="positive"
                icon={TrendingUp}
              />
              <StatCard
                title="Thời gian truy cập TB"
                value="3m 24s"
                change="+15s"
                changeType="positive"
                icon={Clock}
              />
              <StatCard
                title="Tỷ lệ quay lại"
                value="64.7%"
                change="+7.1%"
                changeType="positive"
                icon={Repeat}
              />
              <StatCard
                title="Lượt xem trang"
                value="12,847"
                change="+23%"
                changeType="positive"
                icon={Eye}
              />
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Phân tích hành vi người dùng</CardTitle>
                <CardDescription>Thống kê tương tác của người dùng</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="orders" fill="#8884d8" name="Tương tác" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        );

      case 'data':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Danh sách người dùng</CardTitle>
                    <CardDescription>Quản lý thông tin người dùng hệ thống</CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="relative">
                      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Tìm kiếm người dùng..."
                        className="pl-8"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <Button>Thêm mới</Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b bg-muted/50">
                        <th className="p-4 text-left font-medium">ID</th>
                        <th className="p-4 text-left font-medium">Tên</th>
                        <th className="p-4 text-left font-medium">Email</th>
                        <th className="p-4 text-left font-medium">Vai trò</th>
                        <th className="p-4 text-left font-medium">Trạng thái</th>
                        <th className="p-4 text-left font-medium">Ngày tạo</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredUsers.map((user) => (
                        <tr key={user.id} className="border-b hover:bg-muted/50 transition-colors">
                          <td className="p-4 font-mono text-sm">{user.id}</td>
                          <td className="p-4 font-medium">{user.name}</td>
                          <td className="p-4 text-muted-foreground">{user.email}</td>
                          <td className="p-4">
                            <Badge variant={user.role === 'Admin' ? 'default' : 'secondary'}>
                              {user.role}
                            </Badge>
                          </td>
                          <td className="p-4">
                            <Badge variant={user.status === 'active' ? 'default' : 'destructive'}>
                              {user.status === 'active' ? 'Hoạt động' : 'Tạm khóa'}
                            </Badge>
                          </td>
                          <td className="p-4 text-muted-foreground">{user.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'charts':
        return (
          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Doanh thu theo tuần</CardTitle>
                  <CardDescription>Biểu đồ cột doanh thu 7 tháng</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="revenue" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top sản phẩm bán chạy</CardTitle>
                  <CardDescription>Thống kê sản phẩm có doanh số cao</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={revenueData} layout="horizontal">
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis dataKey="month" type="category" />
                      <Tooltip />
                      <Bar dataKey="orders" fill="#82ca9d" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Lượng truy cập theo giờ</CardTitle>
                  <CardDescription>Pattern truy cập trong ngày</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="orders" stroke="#ff7300" strokeWidth={3} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Phân bố theo khu vực</CardTitle>
                  <CardDescription>Người dùng theo địa phương</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={userDistribution}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        dataKey="value"
                        label
                      >
                        {userDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'settings':
        return (
          <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Cài đặt hệ thống</CardTitle>
                  <CardDescription>Các tùy chọn cấu hình hệ thống</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <label className="text-sm font-medium">Bảo trì tự động</label>
                      <p className="text-xs text-muted-foreground">Tự động chạy bảo trì hệ thống</p>
                    </div>
                    <Switch
                      checked={settings.autoMaintenance}
                      onCheckedChange={(checked) => 
                        setSettings(prev => ({ ...prev, autoMaintenance: checked }))
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <label className="text-sm font-medium">Thông báo email</label>
                      <p className="text-xs text-muted-foreground">Gửi email thông báo</p>
                    </div>
                    <Switch
                      checked={settings.emailNotifications}
                      onCheckedChange={(checked) => 
                        setSettings(prev => ({ ...prev, emailNotifications: checked }))
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <label className="text-sm font-medium">Backup hàng ngày</label>
                      <p className="text-xs text-muted-foreground">Tự động backup dữ liệu</p>
                    </div>
                    <Switch
                      checked={settings.dailyBackup}
                      onCheckedChange={(checked) => 
                        setSettings(prev => ({ ...prev, dailyBackup: checked }))
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <label className="text-sm font-medium">Chế độ tối</label>
                      <p className="text-xs text-muted-foreground">Giao diện tối</p>
                    </div>
                    <Switch
                      checked={settings.darkMode}
                      onCheckedChange={(checked) => 
                        setSettings(prev => ({ ...prev, darkMode: checked }))
                      }
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Bảo mật</CardTitle>
                  <CardDescription>Cài đặt bảo mật và quyền riêng tư</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <label className="text-sm font-medium">Xác thực 2 bước</label>
                      <p className="text-xs text-muted-foreground">Bảo mật nâng cao</p>
                    </div>
                    <Switch
                      checked={settings.twoFactor}
                      onCheckedChange={(checked) => 
                        setSettings(prev => ({ ...prev, twoFactor: checked }))
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <label className="text-sm font-medium">Đăng xuất tự động</label>
                      <p className="text-xs text-muted-foreground">Sau 30 phút không hoạt động</p>
                    </div>
                    <Switch
                      checked={settings.autoLogout}
                      onCheckedChange={(checked) => 
                        setSettings(prev => ({ ...prev, autoLogout: checked }))
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <label className="text-sm font-medium">Mã hóa dữ liệu</label>
                      <p className="text-xs text-muted-foreground">Mã hóa end-to-end</p>
                    </div>
                    <Switch
                      checked={settings.dataEncryption}
                      onCheckedChange={(checked) => 
                        setSettings(prev => ({ ...prev, dataEncryption: checked }))
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <label className="text-sm font-medium">Log hoạt động</label>
                      <p className="text-xs text-muted-foreground">Ghi lại các hoạt động</p>
                    </div>
                    <Switch
                      checked={settings.activityLog}
                      onCheckedChange={(checked) => 
                        setSettings(prev => ({ ...prev, activityLog: checked }))
                      }
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Thông tin hệ thống</CardTitle>
                <CardDescription>Chi tiết về phiên bản và hiệu suất</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Phiên bản</p>
                    <p className="font-medium">v2.1.4</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Uptime</p>
                    <p className="font-medium">15 ngày 7 giờ</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Bộ nhớ đã dùng</p>
                    <p className="font-medium">2.3GB / 8GB</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="w-64 border-r bg-card">
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-16 items-center border-b px-6">
            <h1 className="text-xl font-bold">AdminPro</h1>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 p-4">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={activeTab === item.id ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab(item.id)}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {item.label}
                </Button>
              );
            })}
          </nav>

          {/* User Profile */}
          <div className="border-t p-4">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600" />
              <div className="flex-1">
                <p className="text-sm font-medium">Admin User</p>
                <p className="text-xs text-muted-foreground">admin@example.com</p>
              </div>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="flex h-16 items-center justify-between border-b bg-card px-6">
          <div>
            <h2 className="text-2xl font-semibold">
              {sidebarItems.find(item => item.id === activeTab)?.label || 'Dashboard'}
            </h2>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-4 w-4" />
            </Button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;