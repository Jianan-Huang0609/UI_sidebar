# Sidebar Demo Project

这是一个基于 Next.js 和 shadcn/ui 的侧边栏组件演示项目。

## 项目配置

项目已经完整配置了以下技术栈：

- ✅ **Next.js 15** - React 框架
- ✅ **TypeScript** - 类型支持
- ✅ **Tailwind CSS v4.0** - 样式框架
- ✅ **shadcn/ui 结构** - 组件架构
- ✅ **Motion/React** - 动画库
- ✅ **@tabler/icons-react** - 图标库

## 项目结构

```
SideBar/
├── app/
│   ├── globals.css          # 全局样式
│   ├── layout.tsx           # 根布局
│   └── page.tsx            # 主页面
├── components/
│   ├── ui/
│   │   └── sidebar.tsx     # 侧边栏UI组件
│   └── sidebar-demo.tsx    # 侧边栏演示组件
├── lib/
│   └── utils.ts            # 工具函数 (cn 函数)
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── next.config.js
└── postcss.config.js
```

## 安装的依赖

### 生产依赖
- `@tabler/icons-react` - 图标组件
- `clsx` - 条件性类名
- `motion` - 动画库
- `next` - Next.js 框架
- `react` & `react-dom` - React 库
- `tailwind-merge` - Tailwind 类名合并

### 开发依赖
- `@tailwindcss/postcss` - Tailwind CSS PostCSS 插件
- `@types/*` - TypeScript 类型定义
- `eslint` - 代码检查
- `tailwindcss` - Tailwind CSS
- `typescript` - TypeScript 编译器

## 如何使用

1. **启动开发服务器**
   ```bash
   npm run dev
   ```

2. **访问应用**
   打开浏览器访问 `http://localhost:3000`

3. **构建生产版本**
   ```bash
   npm run build
   npm run start
   ```

## 组件功能

### Sidebar 组件特性
- 🎯 响应式设计 (桌面端和移动端)
- ✨ 悬停动画效果
- 🌓 深色模式支持
- 📱 移动端滑动菜单
- ⚡ 流畅的动画过渡
- 🔧 可配置的开关状态

### 主要组件
- `Sidebar` - 主侧边栏容器
- `SidebarBody` - 侧边栏内容区域
- `SidebarLink` - 侧边栏链接项
- `SidebarProvider` & `useSidebar` - 状态管理

## 自定义说明

- 修改 `components/sidebar-demo.tsx` 中的 `links` 数组来自定义菜单项
- 调整 `tailwind.config.js` 来自定义主题色彩
- 修改 `app/globals.css` 来调整 CSS 变量

## 📖 使用指南

### 在现有项目中使用此侧边栏组件

#### 方法1：直接复制文件（推荐）
1. 复制 `components/ui/sidebar.tsx` 到您的项目
2. 复制 `lib/utils.ts` 到您的项目  
3. 安装必需依赖：
   ```bash
   npm install @tabler/icons-react clsx motion tailwind-merge
   ```
4. 在您的页面中导入使用：
   ```tsx
   import { Sidebar, SidebarBody, SidebarLink } from '@/components/ui/sidebar'
   ```

#### 方法2：克隆整个项目
```bash
git clone https://github.com/Jianan-Huang0609/UI_sidebar.git
cd UI_sidebar
npm install
npm run dev
```

### 📋 完整使用示例

查看 `examples/integration-example.tsx` 文件获取详细的集成示例，包括：
- 简单页面布局
- Next.js App Router 集成
- 条件渲染侧边栏
- 自定义主题配置

### 📚 详细文档

请参阅 `USAGE_GUIDE.md` 获取完整的使用说明和最佳实践。

## 备注

项目设置完整，所有必需的配置文件都已创建。你可以立即开始开发和自定义你的侧边栏组件！
