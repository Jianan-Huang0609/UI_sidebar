# 🔧 侧边栏组件使用指南

## 方法一：直接复制组件（最快速）

### 1. 复制必要文件到您的项目

```
your-project/
├── components/
│   ├── ui/
│   │   └── sidebar.tsx     # 复制此文件
│   └── sidebar-demo.tsx    # 可选：作为使用示例
├── lib/
│   └── utils.ts           # 必需：cn函数
```

### 2. 确保您的项目有以下依赖

```json
{
  "dependencies": {
    "@tabler/icons-react": "^3.34.1",
    "clsx": "^2.1.1", 
    "motion": "^12.23.12",
    "tailwind-merge": "^3.3.1"
  }
}
```

### 3. 在您的页面中使用

```tsx
// your-page.tsx
import { Sidebar, SidebarBody, SidebarLink } from '@/components/ui/sidebar'
import { IconDashboard, IconUser } from '@tabler/icons-react'
import { useState } from 'react'

export default function YourPage() {
  const [open, setOpen] = useState(false)
  
  const links = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: <IconDashboard className="h-5 w-5" />
    },
    {
      label: "Profile", 
      href: "/profile",
      icon: <IconUser className="h-5 w-5" />
    }
  ]

  return (
    <div className="flex h-screen">
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody>
          <div className="flex flex-col gap-2">
            {links.map((link, idx) => (
              <SidebarLink key={idx} link={link} />
            ))}
          </div>
        </SidebarBody>
      </Sidebar>
      
      {/* 您的主要内容 */}
      <div className="flex-1 p-8">
        <h1>您的页面内容</h1>
      </div>
    </div>
  )
}
```

## 方法二：作为独立包使用

### 1. 克隆我们的仓库
```bash
git clone https://github.com/Jianan-Huang0609/UI_sidebar.git
cd UI_sidebar
npm install
```

### 2. 导出为包
在您的项目中：
```bash
npm install ../path/to/UI_sidebar
```

## 方法三：集成到现有布局

### 在Next.js项目中作为布局组件

```tsx
// app/layout.tsx 或 layouts/MainLayout.tsx
import { Sidebar, SidebarBody, SidebarLink } from '@/components/ui/sidebar'

export default function Layout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  
  return (
    <div className="flex h-screen">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen}>
        <SidebarBody>
          {/* 您的导航菜单 */}
        </SidebarBody>
      </Sidebar>
      
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  )
}
```

## 🎨 自定义配置

### 修改侧边栏宽度
```tsx
// 在 sidebar.tsx 中修改
animate={{
  width: animate ? (open ? "250px" : "60px") : "250px", // 自定义宽度
}}
```

### 修改颜色主题
```tsx
className={cn(
  "bg-neutral-100 dark:bg-neutral-800", // 修改背景色
  className
)}
```

### 添加自定义图标
```tsx
const links = [
  {
    label: "自定义页面",
    href: "/custom",
    icon: <YourCustomIcon className="h-5 w-5" />
  }
]
```

## 📱 响应式配置

组件已内置响应式支持：
- **桌面端**: 悬停展开/收起
- **移动端**: 点击图标显示全屏菜单

### 禁用自动展开/收起
```tsx
<Sidebar open={open} setOpen={setOpen} animate={false}>
```

## 🔧 必需的配置文件

### tailwind.config.js
确保包含必要的内容路径：
```js
module.exports = {
  content: [
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    // ... 其他路径
  ],
  // ... 其他配置
}
```

### tsconfig.json
确保路径别名配置正确：
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

## 🚨 常见问题

### 1. 图标不显示
```bash
npm install @tabler/icons-react
```

### 2. 动画不工作  
```bash
npm install motion
```

### 3. 样式类名冲突
确保安装了 `tailwind-merge` 和 `clsx`

### 4. TypeScript错误
确保安装了相关的 `@types` 包

## 📦 完整示例项目

查看我们的完整示例：
https://github.com/Jianan-Huang0609/UI_sidebar

运行示例：
```bash
git clone https://github.com/Jianan-Huang0609/UI_sidebar.git
cd UI_sidebar  
npm install
npm run dev
```

## 🎯 最佳实践

1. **保持组件独立性** - 不要直接修改 `sidebar.tsx`，通过props自定义
2. **响应式优先** - 组件已优化移动端体验
3. **性能优化** - 使用 `useState` 管理开关状态
4. **类型安全** - 充分利用TypeScript类型检查

## 📝 更多定制选项

如需更多定制功能，请参考源代码或联系开发者。组件设计时考虑了最大的灵活性和可扩展性。
