# 屿猫 · 猫咪品种与饲养资料站

一个纯静态网站：不需要 Node、不需要构建，双击 `index.htm` 就能打开。

**在线访问：** https://madoka-git.github.io/yumao-site/

- 仓库地址：https://github.com/madoka-git/yumao-site
- 部署方式：GitHub Pages，`main` 分支根目录直接发布
- 根目录的 `.nojekyll` 用于关闭 Jekyll 处理，纯静态文件原样输出
- 向 `main` 提交并推送后，约 1 分钟自动重新发布

## 目录结构

```
yumao-site/
├─ index.htm              首页（照片猫墙 + 贴纸卡片）
├─ about.htm              关于屿猫
├─ cat_facts.htm          猫咪百科（20 条冷知识）
├─ stories.htm            领养故事
├─ assets/
│  ├─ css/
│  │  ├─ style.css        基础样式（配色、布局、卡片、表单）
│  │  └─ anim.css         动画与首屏、文章页、对比/百科/预算/故事页样式
│  ├─ js/
│  │  └─ site.js          全站交互（滚动入场、回到顶部、翻页回顶）
│  └─ img/
│     ├─ SOURCES.md       图片出处与许可
│     ├─ logo.svg         网站 Logo（猫耳岛主标）
│     ├─ favicon.svg      浏览器图标（小尺寸简化版）
│     ├─ breeds/          品种照片与 20 种猫图谱
│     ├─ care/            饲养文章配图
│     ├─ stories/         领养故事配图
│     ├─ hero/            首屏插画
│     └─ doodle/          手绘猫贴纸（透明底）
├─ breeds/                品种图鉴：索引 + 12 个品种档案 + 品种对比
├─ care/                  饲养知识：索引 + 6 篇文章（含护理清单与症状速查）
├─ account/               登录、注册、领养登记
├─ guide/                 选猫指南（6 题小测试）
└─ tools/                 养猫工具（喂食量、猫龄、名字、运势、抽猫、预算）
```

## 怎么改

- **改颜色/字体/圆角**：编辑 `assets/css/style.css` 顶部的 `:root` 变量。
- **改动画幅度**：编辑 `assets/css/anim.css`；系统开启“减少动态效果”时会自动关闭。
- **加新页面**：复制一个现有页面的 `<head>` 和顶栏/页脚，引用
  `assets/css/style.css`、`assets/css/anim.css`、`assets/js/site.js`；
  子目录页面用 `../assets/...`。
- **换猫图**：把新图放进 `assets/img/breeds/`，替换同名文件即可，
  或改页面里的 `<img src>`。

## 数据说明

- 登录、注册和领养登记都使用浏览器 `localStorage`，只存在本机，不会上传。
- 品种与饲养内容仅供日常参考；健康问题请咨询执业兽医。
- 站内图片来自项目原有素材、Pexels 与 catza.net（CC BY 3.0），详见
  `assets/img/SOURCES.md`；品种图片仅用于展示，正式发布前请确认许可与署名。

## 备份

整理前的完整副本在：

```
D:\DSH\Desktop\yumao-backup-2026-10-20\
├─ before-organize\   整理目录前的整站副本
├─ before-rename\     文件夹重命名前的完整副本（2026-10-21）
├─ legacy\            旧版 mycss.css 与旧首页备份
├─ index-v2.htm       上一版首页
├─ cat_breed\         旧品种页（历史备份，未重命名）
├─ cat_care\          旧饲养页（历史备份，未重命名）
└─ account\           旧账号页
```
