/*
 * 这是网站唯一需要经常编辑的文件。
 * 把示例文字、链接和图片路径替换成你自己的内容即可。
 * 每个 { zh: "...", en: "..." } 都分别对应中文和英文。
 */

window.SITE_CONTENT = {
  site: {
    title: {
      zh: "陈丁熊 · 个人主页",
      en: "Dingxiong Chen · Personal Homepage",
    },
    sections: {
      activities: { zh: "最近动态", en: "Recent Activities" },
      publications: { zh: "项目与论文", en: "Selected Work" },
      education: { zh: "教育经历", en: "Education" },
      experience: { zh: "工作与实习", en: "Experience" },
      contact: { zh: "给我留言", en: "Leave a Message" },
    },
  },

  profile: {
    name: { zh: "Dingxiong Chen", en: "Dingxiong Chen" },
    secondaryName: { zh: "陈丁熊", en: "陈丁熊" },
    mbti: {
      label: { zh: "MBTI · ENTJ-T", en: "MBTI · ENTJ-T" },
      url: "https://www.16personalities.com/ch/ENTJ-%E4%BA%BA%E6%A0%BC",
    },
    statements: [
      {
        zh: "我是南京理工大学与中国科学院自动化研究所联合培养的 AI for Science 博士研究生。",
        en: "I am a jointly trained Ph.D. student in AI for Science at Nanjing University of Science and Technology and the Institute of Automation, Chinese Academy of Sciences.",
      },
      {
        zh: "我研究空中具身智能。",
        en: "My research focuses on aerial embodied intelligence.",
      },
      {
        zh: "我的长期目标是为空中操作无人机构建稳定控制器以及通用的智能体。",
        en: "My long-term goal is to develop stable controllers and general-purpose agents for aerial manipulation drones.",
      },
    ],
    bio: [
      {
        parts: [
          {
            text: {
              zh: "Hi！我是",
              en: "Hi! I am a first-year Ph.D. student in Computer Science and Technology jointly trained by ",
            },
          },
          {
            label: {
              zh: "南京理工大学",
              en: "Nanjing University of Science and Technology",
            },
            url: "https://www.njust.edu.cn/",
          },
          { text: { zh: "与", en: " and the " } },
          {
            label: {
              zh: "中国科学院自动化研究所",
              en: "Institute of Automation, Chinese Academy of Sciences",
            },
            url: "https://www.ia.ac.cn/",
          },
          {
            text: {
              zh: "联合培养的计算机科学与技术专业一年级博士研究生，由",
              en: ", under the joint supervision of ",
            },
          },
          {
            label: { zh: "金露", en: "Jin Lu" },
            url: "https://teacher.njust.edu.cn/jsj/jl/list.htm",
          },
          { text: { zh: "和", en: " and " } },
          {
            label: { zh: "程健", en: "Jian Cheng" },
            url: "https://ia.cas.cn/rcdw/yjy/202404/t20240422_7129847.html",
          },
          { text: { zh: "共同指导。", en: "." } },
        ],
      },
      {
        parts: [
          {
            text: {
              zh: "我目前的研究聚焦于具身智能与机器人控制。欢迎学术交流与合作，您可以通过",
              en: "My current research focuses on embodied intelligence and robot control. I welcome academic discussions and collaborations. You can reach me at ",
            },
          },
          {
            label: {
              zh: "cdx000802@gmail.com",
              en: "cdx000802@gmail.com",
            },
            url: "mailto:cdx000802@gmail.com",
          },
          { text: { zh: "联系我。", en: "." } },
        ],
      },
    ],
    photo: "assets/profile.jpg",
    photoAlt: { zh: "陈丁熊的个人照片", en: "Portrait of Dingxiong Chen" },
    photoCaption: { zh: "陈丁熊", en: "Dingxiong Chen" },
    links: [
      {
        label: { zh: "邮箱", en: "Email" },
        url: "mailto:cdx000802@gmail.com",
      },
      {
        label: { zh: "GitHub", en: "GitHub" },
        url: "https://github.com/chendx0802",
      },
      {
        label: { zh: "Google Scholar", en: "Google Scholar" },
        url: "https://scholar.google.com/",
      },
      {
        label: { zh: "bilibili", en: "bilibili" },
        url: "https://space.bilibili.com/471606915",
      },
      { label: { zh: "联系我", en: "Contact Me" }, url: "#contact" },
    ],
  },

  activities: [
    {
      date: "2026.10",
      text: {
        zh: "更新空中具身机器人实验演示视频。",
        en: "Added an aerial embodied robotics experiment video.",
      },
      highlight: { zh: "新项目", en: "New project" },
      url: "#publications",
    },
    {
      date: "2026.06",
      text: {
        zh: "在这里写论文录用、获奖、演讲或实习经历。",
        en: "Add a paper acceptance, award, talk, or internship update here.",
      },
      highlight: { zh: "最新消息", en: "Latest news" },
      url: "#",
    },
    {
      date: "2026.01",
      text: {
        zh: "较早的动态可以继续向下添加，也可以只保留最重要的几条。",
        en: "Add older updates below, or keep only the most important ones.",
      },
      highlight: { zh: "动态标题", en: "Update title" },
      url: "#",
    },
  ],

  publications: [
    {
      title: {
        zh: "空中具身机器人自主写字任务演示",
        en: "Aerial Embodied Robot: Autonomous Writing Demonstration",
      },
      authors: { zh: "陈丁熊", en: "Dingxiong Chen" },
      venue: { zh: "项目演示 · 2026.10", en: "Project Demo · 2026.10" },
      summary: {
        zh: "基于 ESO 扰动估计的非共面六旋翼搭载 Delta 机械臂的写字任务演示。",
        en: "Demonstration of a writing task using a non-coplanar hexarotor equipped with a Delta manipulator and ESO-based disturbance estimation.",
      },
      media: {
        type: "video",
        src: "assets/videos/aerial-robot-202610.mp4",
        preview: "assets/videos/aerial-robot-202610-preview.mp4",
        poster: "assets/videos/aerial-robot-202610-poster.jpg",
        alt: { zh: "空中具身机器人自主写字任务演示", en: "Aerial embodied robot autonomous writing preview" },
      },
      badge: { zh: "新项目", en: "New Project" },
      links: [],
    },
    {
      title: {
        zh: "项目二：这里可以放动态 WebP 或 MP4",
        en: "Project Two: Use an Animated WebP or MP4 Here",
      },
      hidden: true,
      authors: { zh: "陈丁熊, 合作者 C", en: "Dingxiong Chen, Collaborator C" },
      venue: { zh: "个人项目 · 2025", en: "Personal Project · 2025" },
      summary: {
        zh: "把 media.src 替换成你的 .webp 文件，就能得到与参考网站相似的循环动画效果。也支持静音循环 MP4。",
        en: "Replace media.src with an animated .webp for the same looping effect as the reference site. Muted looping MP4 is supported too.",
      },
      media: {
        type: "image",
        src: "assets/project-placeholder-2.svg",
        alt: { zh: "项目二演示", en: "Project two preview" },
      },
      badge: null,
      links: [
        { label: { zh: "演示", en: "Demo" }, url: "#" },
        { label: { zh: "代码", en: "Code" }, url: "#" },
      ],
    },
  ],

  education: [
    {
      period: { zh: "2026 — 至今", en: "2026 — Present" },
      organization: {
        zh: "南京理工大学 & 中国科学院自动化研究所",
        en: "Nanjing University of Science and Technology & Institute of Automation, Chinese Academy of Sciences",
      },
      role: {
        zh: "联合培养博士研究生 · 计算机科学与技术",
        en: "Jointly Trained Ph.D. Student · Computer Science and Technology",
      },
      details: {
        zh: "研究方向：空中具身智能",
        en: "Research Area: Aerial Embodied Intelligence",
      },
      advisors: {
        parts: [
          { text: { zh: "导师：", en: "Advisors: " } },
          {
            label: { zh: "金露", en: "Jin Lu" },
            url: "https://teacher.njust.edu.cn/jsj/jl/list.htm",
          },
          { text: { zh: "、", en: " and " } },
          {
            label: { zh: "程健", en: "Jian Cheng" },
            url: "https://ia.cas.cn/rcdw/yjy/202404/t20240422_7129847.html",
          },
        ],
      },
      logos: [
        {
          src: "assets/logos/njust.png?v=20261002-2",
          alt: { zh: "南京理工大学标志", en: "Nanjing University of Science and Technology logo" },
          url: "https://www.njust.edu.cn/",
          variant: "njust",
        },
        {
          src: "assets/logos/casia.jpg",
          alt: { zh: "中国科学院自动化研究所标志", en: "Institute of Automation, Chinese Academy of Sciences logo" },
          url: "https://ia.cas.cn/",
          variant: "casia",
        },
      ],
    },
    {
      period: { zh: "2023 — 2026", en: "2023 — 2026" },
      organization: { zh: "南京信息工程大学", en: "Nanjing University of Information Science and Technology" },
      role: { zh: "硕士 · 电子信息", en: "M.Eng. in Electronic Information" },
      details: {
        zh: "研究方向：具身智能与机器人运动控制",
        en: "Research Area: Embodied Intelligence and Robot Motion Control",
      },
      advisors: {
        parts: [
          { text: { zh: "导师：", en: "Advisor: " } },
          {
            label: { zh: "周旺平教授", en: "Prof. Wangping Zhou" },
            url: "https://faculty.nuist.edu.cn/zhouwangping/zh_CN/index/50353/list/index.htm",
          },
        ],
      },
      url: "https://www.nuist.edu.cn/",
      logos: [
        {
          src: "assets/logos/nuist.png",
          alt: { zh: "南京信息工程大学标志", en: "Nanjing University of Information Science and Technology logo" },
          url: "https://www.nuist.edu.cn/",
          variant: "nuist",
        },
      ],
    },
    {
      period: { zh: "2019 — 2023", en: "2019 — 2023" },
      organization: { zh: "南京信息工程大学", en: "Nanjing University of Information Science and Technology" },
      role: { zh: "学士 · 电气工程及其自动化", en: "B.Eng. in Electrical Engineering and Automation" },
      details: { zh: "", en: "" },
      advisors: {
        parts: [
          { text: { zh: "导师：", en: "Advisor: " } },
          {
            label: { zh: "周旺平教授", en: "Prof. Wangping Zhou" },
            url: "https://faculty.nuist.edu.cn/zhouwangping/zh_CN/index/50353/list/index.htm",
          },
        ],
      },
      url: "https://www.nuist.edu.cn/",
      logos: [
        {
          src: "assets/logos/nuist.png",
          alt: { zh: "南京信息工程大学标志", en: "Nanjing University of Information Science and Technology logo" },
          url: "https://www.nuist.edu.cn/",
          variant: "nuist",
        },
      ],
    },
  ],

  experience: [
    {
      period: { zh: "2026.10 — 至今", en: "Oct. 2026 — Present" },
      organization: { zh: "中国科学院自动化研究所", en: "Institute of Automation, Chinese Academy of Sciences" },
      role: { zh: "联培博士生", en: "Jointly Trained Ph.D. Student" },
      details: {
        zh: "负责空中具身机器人研发",
        en: "Research and development of aerial embodied robots",
      },
      url: "https://ia.cas.cn/",
      logos: [
        {
          src: "assets/logos/casia.jpg",
          alt: { zh: "中国科学院自动化研究所标志", en: "Institute of Automation, Chinese Academy of Sciences logo" },
          url: "https://ia.cas.cn/",
          variant: "casia",
        },
      ],
    },
    {
      period: { zh: "2026.07 — 2026.09", en: "Jul. 2026 — Sep. 2026" },
      organization: { zh: "中科南京人工智能创新研究院", en: "Nanjing Artificial Intelligence Innovation Research Institute" },
      role: { zh: "联培博士生", en: "Jointly Trained Ph.D. Student" },
      details: {
        zh: "负责空中具身机器人研发",
        en: "Research and development of aerial embodied robots",
      },
      url: "https://www.airia.cn/",
      logos: [
        {
          src: "assets/logos/airia.png",
          alt: { zh: "中科南京人工智能创新研究院标志", en: "Nanjing Artificial Intelligence Innovation Research Institute logo" },
          url: "https://www.airia.cn/",
          variant: "airia",
        },
      ],
    },
    {
      period: { zh: "2025.12 — 2026.06", en: "Dec. 2025 — Jun. 2026" },
      organization: { zh: "中科方寸知微", en: "Maicro (Nanjing) Technology Co., Ltd." },
      role: { zh: "算法实习生", en: "Algorithm Intern" },
      details: {
        zh: "负责无人机控制算法研发",
        en: "Research and development of drone control algorithms",
      },
      url: "http://www.maicro.com/",
      logos: [
        {
          src: "assets/logos/maicro.png",
          alt: { zh: "中科方寸知微标志", en: "Maicro logo" },
          url: "http://www.maicro.com/",
          variant: "maicro",
        },
      ],
    },
  ],

  contact: {
    /*
     * 正式收取留言前，把下面地址替换成你的 Formspree 地址：
     * https://formspree.io/f/你的表单ID
     */
    endpoint: "https://formspree.io/f/xppwglzo",
    description: {
      zh: "如果你想聊聊研究、项目或其他有趣的事情，可以在这里给我留言。",
      en: "If you would like to discuss research, projects, or anything interesting, leave me a message here.",
    },
    privacy: {
      zh: "留言会私下发送给我，不会公开显示。请不要填写敏感信息。",
      en: "Your message will be sent to me privately and will not be displayed publicly. Please do not include sensitive information.",
    },
    fields: {
      name: {
        label: { zh: "你的名字", en: "Your name" },
        placeholder: { zh: "怎么称呼你？", en: "How should I address you?" },
      },
      message: {
        label: { zh: "留言内容", en: "Message" },
        placeholder: { zh: "写下你想说的话……", en: "Write your message…" },
      },
    },
    submit: { zh: "发送留言", en: "Send message" },
    sending: { zh: "正在发送…", en: "Sending…" },
    success: { zh: "留言已发送，谢谢你！", en: "Message sent. Thank you!" },
    error: {
      zh: "暂时没有发送成功，请稍后再试。",
      en: "The message could not be sent. Please try again later.",
    },
    setup: {
      zh: "留言界面已经就绪；配置接收地址后即可正式发送。",
      en: "The form is ready. Add a receiving endpoint to enable submissions.",
    },
    subject: { zh: "个人网站收到一条新留言", en: "New message from personal website" },
  },

  footer: {
    copyright: {
      zh: "© 2026 陈丁熊",
      en: "© 2026 Dingxiong Chen",
    },
    updated: {
      zh: "最后更新：2026 年 10 月",
      en: "Last updated October 2026",
    },
  },
};
