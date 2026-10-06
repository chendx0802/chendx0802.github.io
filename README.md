# Dingxiong Chen · 个人主页

这是一个不需要安装依赖的静态个人主页，包含：

- 中英文切换
- 深色模式
- 最近动态
- 项目/论文卡片
- 动态 WebP 或 MP4 展示
- 教育和工作经历
- 私密留言表单
- 手机端适配

## 修改内容

绝大多数内容只需要编辑 `content.js`。

常用替换项：

1. 将 `assets/profile-placeholder.svg` 替换成你的照片，并修改 `profile.photo`。
2. 修改姓名、简介、邮箱和个人链接。
3. 在 `activities` 中添加最近动态。
4. 在 `publications` 中添加项目或论文。
5. 修改 `education` 和 `experience`。

## 启用留言功能

留言表单只要求访客填写姓名和留言内容，提交后会私下发送到你的邮箱，不会公开显示。

1. 在 Formspree 创建一个免费表单。
2. 复制表单地址，例如 `https://formspree.io/f/abcdwxyz`。
3. 打开 `content.js`，找到 `contact.endpoint`。
4. 把空字符串替换为你的表单地址。

```js
contact: {
  endpoint: "https://formspree.io/f/abcdwxyz",
  // ...
}
```

没有配置地址时，表单会显示预览提示，不会把留言发送到任何地方。

## 添加动态 WebP

把文件放到 `assets/` 目录，例如：

```text
assets/demo.webp
```

然后在 `content.js` 对应项目中填写：

```js
media: {
  type: "image",
  src: "assets/demo.webp",
  alt: { zh: "项目演示", en: "Project demo" },
},
```

## 添加 MP4

```js
media: {
  type: "video",
  src: "assets/demo.mp4",
  alt: { zh: "项目视频", en: "Project video" },
},
```

视频会自动静音、循环播放，并支持手机页面内播放。

## 本地预览

在项目目录运行：

```bash
python3 -m http.server 8000
```

然后访问 `http://localhost:8000`。

## 发布

整个目录可以直接部署到 GitHub Pages、Cloudflare Pages 或其他静态托管平台，不需要数据库和传统服务器。
