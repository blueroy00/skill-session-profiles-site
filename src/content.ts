export type Locale = "zh" | "en";
export type GalleryKey = "tasks" | "projects" | "profiles" | "dark";

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
      body: "按任务或项目配置 Codex Skill，并让明确的设置在后续会话中持续生效。",
      primary: "查看源码",
      secondary: "下载 v0.2.0",
      imageAlt: "Skill Session Profiles 任务配置界面",
    },
    statement: {
      title: "从全局默认，到每一个项目。",
      body: "把 Skill 选择变成可复用方案，并为具体项目保留清晰、可预测的覆盖。",
    },
    capabilities: [
      {
        title: "任务配置",
        body: "在同一界面选择、创建和管理方案，再明确应用到后续 Codex 任务。",
      },
      {
        title: "项目配置",
        body: "从 Codex 项目列表选择目标，把显式覆盖保存到对应项目根目录。",
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
      title: "一套界面，分清每层作用范围。",
      body: "管理全局方案或项目覆盖，并在保存前看清每个 Skill 的最终设置。",
      tabs: {
        tasks: "任务配置",
        projects: "项目配置",
        profiles: "方案编辑",
        dark: "黑夜模式",
      },
      captions: {
        tasks: "直接在任务配置中选择、导入、导出或应用方案。",
        projects: "按 Codex 项目列表选择根目录并保存项目专属覆盖。",
        profiles: "编辑可复用模板；保存方案与应用配置保持为两个动作。",
        dark: "在深色环境中保持清晰的信息层级。",
      },
      alts: {
        tasks: "任务配置界面",
        projects: "Codex 项目配置界面",
        profiles: "任务配置内的方案编辑界面",
        dark: "黑夜模式任务配置界面",
      },
    },
    workflow: {
      title: "选定范围，再让配置持续生效。",
      items: [
        {
          title: "发现",
          body: "自动读取 Codex 项目列表，以及当前可用的用户、仓库与系统 Skill。",
        },
        {
          title: "组合",
          body: "按来源筛选，或把搜索结果批量设为启用、停用或继承。",
        },
        {
          title: "沿用",
          body: "应用全局方案，或保存项目覆盖；后续新建、重开或派生的任务按范围读取。",
        },
      ],
    },
    local: {
      title: "本地优先，规则透明。",
      body: "所有写入都经过 Codex App Server API。方案数据保存在本地，项目覆盖写入对应的 .codex/config.toml。",
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
          answer: "保存方案只更新模板。选择并应用后，只有明确启用或停用的 Skill 会覆盖用户级默认。",
        },
        {
          question: "项目配置会影响其他项目吗？",
          answer: "不会。显式项目设置只对所选项目根目录生效，未设置项继续继承全局默认。",
        },
        {
          question: "应用会直接修改 Codex 配置文件吗？",
          answer: "不会。所有配置操作通过 Codex App Server 契约完成。",
        },
        {
          question: "目前支持哪些平台？",
          answer: "v0.2.0 面向 Apple Silicon Mac，构建产物暂未签名或公证。",
        },
      ],
    },
    final: {
      title: "让每个任务只加载需要的 Skill。",
      body: "从 GitHub 获取源码，或直接下载 v0.2.0 macOS 构建产物。",
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
      body: "Configure Codex skills by task or project, then keep each explicit setting scoped to the sessions that follow.",
      primary: "View source",
      secondary: "Download v0.2.0",
      imageAlt: "Skill Session Profiles task configuration interface",
    },
    statement: {
      title: "From global defaults to every project.",
      body: "Turn skill selection into reusable profiles with clear, predictable project overrides.",
    },
    capabilities: [
      {
        title: "Task configuration",
        body: "Choose, create, and manage profiles in one place, then explicitly apply one to future Codex tasks.",
      },
      {
        title: "Project configuration",
        body: "Choose a target from the Codex project list and save explicit overrides for that project root.",
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
      title: "One interface, with every scope made clear.",
      body: "Manage global profiles or project overrides and inspect each skill before saving.",
      tabs: {
        tasks: "Task configuration",
        projects: "Project configuration",
        profiles: "Profile editor",
        dark: "Dark theme",
      },
      captions: {
        tasks: "Choose, import, export, or apply profiles directly from Task Configuration.",
        projects: "Choose a Codex project root and save project-specific overrides.",
        profiles: "Edit a reusable template while keeping Save Profile and Apply Configuration separate.",
        dark: "Keep the same clear hierarchy in a darker workspace.",
      },
      alts: {
        tasks: "Task configuration interface",
        projects: "Codex project configuration interface",
        profiles: "Profile editor inside Task Configuration",
        dark: "Dark theme task configuration interface",
      },
    },
    workflow: {
      title: "Choose the scope. Keep the configuration.",
      items: [
        {
          title: "Discover",
          body: "Read the Codex project list and the user, repository, and system skills currently available.",
        },
        {
          title: "Compose",
          body: "Filter by source, search by name, or update the filtered result in one action.",
        },
        {
          title: "Continue",
          body: "Apply a global profile or save project overrides; new, reopened, and forked tasks load the matching scope.",
        },
      ],
    },
    local: {
      title: "Local first, with visible rules.",
      body: "Every write goes through Codex App Server APIs. Profile data stays local, while project overrides are stored in the matching .codex/config.toml.",
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
          answer: "Saving a profile only updates the template. Once selected and applied, only explicitly enabled or disabled skills override user defaults.",
        },
        {
          question: "Can project configuration affect another project?",
          answer: "No. Explicit project settings apply only to the selected project root. Unset skills continue to inherit global defaults.",
        },
        {
          question: "Does the app edit Codex configuration files?",
          answer: "No. Every configuration write goes through the Codex App Server contract.",
        },
        {
          question: "Which platforms are supported?",
          answer: "v0.2.0 targets Apple Silicon Mac. Builds are not yet signed or notarized.",
        },
      ],
    },
    final: {
      title: "Load only the skills each task needs.",
      body: "Explore the source on GitHub or download the v0.2.0 macOS build.",
      primary: "Open GitHub",
      secondary: "View releases",
    },
    footer: {
      description: "Codex skill configuration manager",
      license: "MIT License",
    },
  },
} as const;
