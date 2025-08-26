// 🚀 在现有项目中集成侧边栏的完整示例

import React, { useState } from 'react'
import { Sidebar, SidebarBody, SidebarLink } from '@/components/ui/sidebar'
import { 
  IconHome, 
  IconUser, 
  IconSettings, 
  IconLogout,
  IconDashboard,
  IconFiles
} from '@tabler/icons-react'

// 示例1：简单的页面布局
export function SimplePageWithSidebar() {
  const [open, setOpen] = useState(false)
  
  const navigationLinks = [
    {
      label: "首页",
      href: "/home",
      icon: <IconHome className="h-5 w-5 text-neutral-700 dark:text-neutral-200" />
    },
    {
      label: "仪表板", 
      href: "/dashboard",
      icon: <IconDashboard className="h-5 w-5 text-neutral-700 dark:text-neutral-200" />
    },
    {
      label: "文件管理",
      href: "/files", 
      icon: <IconFiles className="h-5 w-5 text-neutral-700 dark:text-neutral-200" />
    },
    {
      label: "个人资料",
      href: "/profile",
      icon: <IconUser className="h-5 w-5 text-neutral-700 dark:text-neutral-200" />
    },
    {
      label: "设置",
      href: "/settings",
      icon: <IconSettings className="h-5 w-5 text-neutral-700 dark:text-neutral-200" />
    }
  ]

  return (
    <div className="flex h-screen w-full">
      {/* 侧边栏 */}
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          {/* 主导航区域 */}
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            {/* Logo区域 */}
            <div className="mb-8">
              {open ? <FullLogo /> : <MinimalLogo />}
            </div>
            
            {/* 导航链接 */}
            <div className="flex flex-col gap-2">
              {navigationLinks.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          
          {/* 底部用户信息 */}
          <div>
            <SidebarLink
              link={{
                label: "退出登录",
                href: "/logout", 
                icon: <IconLogout className="h-5 w-5 text-neutral-700 dark:text-neutral-200" />
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>

      {/* 主内容区域 */}
      <main className="flex-1 overflow-auto bg-gray-50 dark:bg-gray-900">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            您的页面内容
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 示例内容卡片 */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div 
                key={item}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <h3 className="text-lg font-semibold mb-2">卡片 {item}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  这是示例内容，展示如何在侧边栏旁边放置您的主要内容。
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

// 示例2：在Next.js App Router中作为布局组件
export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <SidebarWrapper />
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  )
}

// 可复用的侧边栏组件
function SidebarWrapper() {
  const [open, setOpen] = useState(false)
  
  // 您可以从API或状态管理中获取这些链接
  const menuItems = [
    { label: "概览", href: "/overview", icon: <IconDashboard className="h-5 w-5" /> },
    { label: "用户", href: "/users", icon: <IconUser className="h-5 w-5" /> },
    { label: "设置", href: "/settings", icon: <IconSettings className="h-5 w-5" /> },
  ]

  return (
    <Sidebar open={open} setOpen={setOpen}>
      <SidebarBody>
        <div className="flex flex-col gap-2">
          {menuItems.map((item, idx) => (
            <SidebarLink 
              key={idx} 
              link={{
                ...item,
                icon: React.cloneElement(item.icon, {
                  className: "h-5 w-5 text-neutral-700 dark:text-neutral-200"
                })
              }} 
            />
          ))}
        </div>
      </SidebarBody>
    </Sidebar>
  )
}

// Logo 组件示例
const FullLogo = () => (
  <div className="flex items-center space-x-2">
    <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
      <span className="text-white font-bold text-sm">YP</span>
    </div>
    <span className="font-semibold text-lg text-black dark:text-white">
      您的项目
    </span>
  </div>
)

const MinimalLogo = () => (
  <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
    <span className="text-white font-bold text-sm">YP</span>
  </div>
)

// 示例3：条件渲染的侧边栏（比如登录状态）
export function ConditionalSidebar({ 
  isAuthenticated, 
  children 
}: { 
  isAuthenticated: boolean
  children: React.ReactNode 
}) {
  if (!isAuthenticated) {
    return <div className="w-full">{children}</div>
  }

  return <SimplePageWithSidebar />
}

// 示例4：自定义主题的侧边栏
export function ThemedSidebar({ theme = 'light' }: { theme?: 'light' | 'dark' }) {
  const [open, setOpen] = useState(false)
  
  const themeClasses = {
    light: "bg-white border-gray-200",
    dark: "bg-gray-900 border-gray-700"
  }

  return (
    <Sidebar open={open} setOpen={setOpen}>
      <SidebarBody className={`${themeClasses[theme]} border-r`}>
        {/* 您的自定义内容 */}
      </SidebarBody>
    </Sidebar>
  )
}
