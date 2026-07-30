export type Locale = "zh" | "en";
export type GalleryKey = "tasks" | "profiles" | "dark";

export const copy = {
  zh: {
    nav: {
      product: "产品",
      workflow: "工作方式",
      openSource: "开源",
      faq: "常见问题",
      github: "GitHub",
      menu: "打开菜单",
      closeMenu: "关闭菜单",
      theme: "切换主题",
      language: "切换到英文",
    },
    hero: {
      title: "Skill Session Profiles",
      body: "为不同 Codex 任务配置不同 Skill，并让设置在后续会话中持续生效。",
      primary: "查看源码",
      secondary: "获取 macOS 版本",
      imageAlt: "Skill Session Profiles 任务配置界面",
    },
    statement: {
      title: "从全局默认，到每一个任务。",
      body: "把 Skill 选择从临时操作变成可复用、可预测的工作方式。",
    },
    capabilities: [
      {
        title: "任务配置",
        body: "为后续打开的 Codex 任务选择一套基础方案，并按需覆盖单个 Skill。",
      },
      {
        title: "可复用方案",
        body: "保存不同工作类型的 Skill 组合，避免在每次对话前重复设置。",
      },
      {
        title: "全局默认",
        body: "集中管理默认启用状态，未覆盖的 Skill 始终继承这套规则。",
      },
      {
        title: "本地共享",
        body: "独立 macOS 应用与 Codex 插件共用同一份本地配置数据。",
      },
    ],
    gallery: {
      title: "看见配置，也看见它如何生效。",
      body: "搜索、筛选、批量调整，再把明确的单项覆盖保存为方案。",
      tabs: {
        tasks: "任务配置",
        profiles: "配置方案",
        dark: "黑夜模式",
      },
      captions: {
        tasks: "为后续任务应用一套持续配置。",
        profiles: "管理可复用方案和单项覆盖。",
        dark: "在深色环境中保持清晰的信息层级。",
      },
      alts: {
        tasks: "任务配置界面",
        profiles: "配置方案编辑界面",
        dark: "黑夜模式任务配置界面",
      },
    },
    workflow: {
      title: "配置一次，沿用到后续任务。",
      items: [
        {
          title: "发现",
          body: "自动读取当前可用的用户、仓库与系统 Skill。",
        },
        {
          title: "组合",
          body: "按来源筛选，或把搜索结果批量设为启用、停用或继承。",
        },
        {
          title: "沿用",
          body: "应用方案后，后续新建、重开或派生的任务继续使用它。",
        },
      ],
    },
    local: {
      title: "本地优先，规则透明。",
      body: "配置通过 Codex App Server API 写入，不直接修改 config.toml。项目开源，数据保存在你的设备上。",
      pathLabel: "本地数据目录",
      path: "~/.codex/skill-session-profiles",
      source: "阅读实现",
    },
    faq: {
      title: "常见问题",
      items: [
        {
          question: "配置会立即影响当前任务吗？",
          answer: "不会。配置只对后续打开、新建、重开或派生的 Codex 任务生效。",
        },
        {
          question: "方案会覆盖全局默认吗？",
          answer: "只覆盖明确设置为启用或停用的 Skill。其他项目继续继承全局默认。",
        },
        {
          question: "应用会直接修改 Codex 配置文件吗？",
          answer: "不会。所有配置操作通过 Codex App Server 契约完成。",
        },
        {
          question: "目前支持哪些平台？",
          answer: "首个版本面向 Apple Silicon Mac，构建产物暂未签名或公证。",
        },
      ],
    },
    final: {
      title: "让每个任务只加载需要的 Skill。",
      body: "从 GitHub 获取源码，或下载 macOS 构建产物开始使用。",
      primary: "打开 GitHub",
      secondary: "查看发布版",
    },
    footer: {
      description: "Codex Skill 配置管理工具",
      license: "MIT License",
    },
  },
  en: {
    nav: {
      product: "Product",
      workflow: "Workflow",
      openSource: "Open source",
      faq: "FAQ",
      github: "GitHub",
      menu: "Open menu",
      closeMenu: "Close menu",
      theme: "Toggle theme",
      language: "Switch to Chinese",
    },
    hero: {
      title: "Skill Session Profiles",
      body: "Choose the right skills for each Codex task, then keep that configuration for the tasks that follow.",
      primary: "View source",
      secondary: "Get the macOS app",
      imageAlt: "Skill Session Profiles task configuration interface",
    },
    statement: {
      title: "From global defaults to every task.",
      body: "Turn skill selection into a reusable, predictable part of your Codex workflow.",
    },
    capabilities: [
      {
        title: "Task configuration",
        body: "Choose a base profile for future Codex tasks, then override individual skills when needed.",
      },
      {
        title: "Reusable profiles",
        body: "Save skill combinations for different kinds of work instead of rebuilding them for every conversation.",
      },
      {
        title: "Global defaults",
        body: "Manage default states in one place. Skills without an override always inherit these rules.",
      },
      {
        title: "Shared locally",
        body: "The standalone macOS app and Codex plugin use the same local configuration data.",
      },
    ],
    gallery: {
      title: "See the configuration and how it applies.",
      body: "Search, filter, make bulk changes, then save explicit overrides as a reusable profile.",
      tabs: {
        tasks: "Task configuration",
        profiles: "Profiles",
        dark: "Dark theme",
      },
      captions: {
        tasks: "Apply one persistent configuration to future tasks.",
        profiles: "Manage reusable profiles and explicit overrides.",
        dark: "Keep the same clear hierarchy in a darker workspace.",
      },
      alts: {
        tasks: "Task configuration interface",
        profiles: "Profile editor interface",
        dark: "Dark theme task configuration interface",
      },
    },
    workflow: {
      title: "Configure once. Keep it for future tasks.",
      items: [
        {
          title: "Discover",
          body: "Read the user, repository, and system skills currently available to Codex.",
        },
        {
          title: "Compose",
          body: "Filter by source, search by name, or update the filtered result in one action.",
        },
        {
          title: "Continue",
          body: "New, reopened, and forked tasks keep using the profile after it is applied.",
        },
      ],
    },
    local: {
      title: "Local first, with visible rules.",
      body: "Configuration writes use Codex App Server APIs and never edit config.toml directly. The project is open source and data stays on your device.",
      pathLabel: "Local data directory",
      path: "~/.codex/skill-session-profiles",
      source: "Read the implementation",
    },
    faq: {
      title: "Questions",
      items: [
        {
          question: "Does a configuration change the current task?",
          answer: "No. It applies only to Codex tasks opened, created, reopened, or forked afterward.",
        },
        {
          question: "Does a profile replace global defaults?",
          answer: "Only for skills explicitly enabled or disabled. Every unset skill continues to inherit global defaults.",
        },
        {
          question: "Does the app edit Codex configuration files?",
          answer: "No. Every configuration write goes through the Codex App Server contract.",
        },
        {
          question: "Which platforms are supported?",
          answer: "The first release targets Apple Silicon Mac. Builds are not yet signed or notarized.",
        },
      ],
    },
    final: {
      title: "Load only the skills each task needs.",
      body: "Explore the source on GitHub or download the latest macOS build.",
      primary: "Open GitHub",
      secondary: "View releases",
    },
    footer: {
      description: "Codex skill configuration manager",
      license: "MIT License",
    },
  },
} as const;
