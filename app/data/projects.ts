export interface ProjectLink {
    title: string;
    title_zh: string;
    url: string;
}

export interface Project {
    id: string;
    slug: string;
    title: string;
    title_zh: string;
    summary: string;
    summary_zh: string;
    fullDescription: string;
    fullDescription_zh: string;
    tags: string[];
    coverImage: string;
    images: string[];
    year: string;
    role: string;
    role_zh: string;
    tools: string[];
    links?: ProjectLink[];
}

export const projects: Project[] = [
    {
        id: "1",
        slug: "yile-community-landscape-renewal-and-elderly-friendly-community-operation",
        title: "Yile Community Landscape Renewal and Elderly-Friendly Community Operation",
        title_zh: "怡乐社区景观更新与适老化社区运营",
        summary:
            "Age-friendly design for Yile Community's active aging goals, applying five-senses healing principles.",
        summary_zh: "针对怡乐社区的积极老龄化目标，运用五感疗愈原理进行的适老化设计。",
        fullDescription:
            "This project focuses on age-friendly design targeting the active aging goals of Yile Community, utilizing principles of five-senses healing. The design scope encompasses the community's physical landscape and includes an operations manual for the community's Five-Senses Garden. Additionally, an app prototype was designed for this operational model to assist residents, while providing community managers with real-time demographic data and aging insights.",
        fullDescription_zh: "本项目是针对怡乐社区的积极老龄化目标，运用五感疗愈原理进行的适老化设计。设计内容包括社区的物理景观，也包含了对于社区五感花园的运营手册。同时针对这种运营模式设计了一款小程序原型，辅助满足C端用户的各种需求，为社区管理者提供社区人口数据并帮助管理者及时了解老龄化现状。",
        tags: ["Landscape Renewal", "Elderly-Friendly Community Operation Design", "App Design"],
        coverImage:
            "/project/yile/cover.jpg",
        images: [
            "/project/yile/cover.jpg", "/project/yile/detail1.jpg", "/project/yile/detail2.jpg"
        ],
        year: "2025",
        role: "Landscape Architecture / Yile Community Operation / Mini Program Design",
        role_zh: "景观建筑设计 / 社区运营设计 / 小程序设计",
        tools: ["Rhino", "CAD", "PS", "Google Antigravity"],
        links: [
            {
                title: "Five-Senses Garden Operation Manual",
                title_zh: "五感花园运营手册",
                url: "#",
            },
            {
                title: "Yile Community Mini Program Prototype",
                title_zh: "怡乐家园小程序原型",
                url: "https://yile-home-v1.pages.dev/",
            },
            {
                title: "Yile Community Mini Program PRD",
                title_zh: "怡乐家园小程序PRD",
                url: "#",
            },
            {
                title: "Detailed Design Document",
                title_zh: "设计内容详细文本",
                url: "#",
            },
        ],
    },
    {
        id: "2",
        slug: "urban-data-science",
        title: "Urban Data Science",
        title_zh: "城市数据科学",
        summary:
            "Spatial pattern analysis using big data methodologies and SQL. Research on urban dynamics.",
        summary_zh: "使用大数据方法论和SQL进行空间模式分析。城市动态研究。",
        fullDescription:
            "In this research project, we explored spatial pattern analysis using big data methodologies. Utilizing SQL for data handling and advanced statistical models, we analyzed urban dynamics to understand traffic flows, population distribution, and resource allocation. The insights generated help in better urban planning and policy-making.",
        fullDescription_zh: "在这个研究项目中，我们探索了使用大数据方法论的空间模式分析。利用SQL进行数据处理和高级统计模型，我们分析了城市动态，以了解交通流量、人口分布和资源配置。产生的见解有助于更好的城市规划和政策制定。",
        tags: ["Research", "Big Data"],
        coverImage: "", // Will use gradient in component if empty
        images: [],
        year: "2023",
        role: "Researcher",
        role_zh: "研究员",
        tools: ["SQL", "ArcGIS", "Python"],
    },
    {
        id: "3",
        slug: "ai-streetscape-analysis",
        title: "AI Streetscape Analysis",
        title_zh: "AI 街景分析",
        summary:
            "Computer Vision applications for analyzing urban street quality and walkability.",
        summary_zh: "计算机视觉在分析城市街道质量和步行友好度中的应用。",
        fullDescription:
            "This project applies Computer Vision techniques to analyze urban street quality and walkability. By processing thousands of street-view images, we assess factors like greenery, pavement quality, and building aesthetics. The goal is to provide data-driven recommendations for improving urban walkability and livability.",
        fullDescription_zh: "本项目应用计算机视觉技术来分析城市街道质量和步行友好度。通过处理成千上万的街景图像，我们评估绿化、路面质量和建筑美学等因素。目标是为改善城市步行友好度和宜居性提供数据驱动的建议。",
        tags: ["Computer Vision", "Urban Analysis"],
        coverImage:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAdtEVKu4Vz4mgtIFga_9O0cDYYMP8JaUBCIWjCgjz04LtsG8QEJHhDSqPEAg8LYczGqzyOebrNkr84l7mWxsLHVqVXtX6WzzjuxzYqLIPfRp7rRc6sZQJpp5hSxwenxpjnq5zwnlYi9GIweYqDSpssbh8DQFDo_9RkHjkg84I9hjLOY4b5kCr7G9FKb6xFynKTjyrCbqYzjM0Z3xai4T_WpSkiAYbyyHoQzezZWM2bsWPJ6bWqPh3UuOIXJtBkrj5PgLHLAceNIxUv",
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAdtEVKu4Vz4mgtIFga_9O0cDYYMP8JaUBCIWjCgjz04LtsG8QEJHhDSqPEAg8LYczGqzyOebrNkr84l7mWxsLHVqVXtX6WzzjuxzYqLIPfRp7rRc6sZQJpp5hSxwenxpjnq5zwnlYi9GIweYqDSpssbh8DQFDo_9RkHjkg84I9hjLOY4b5kCr7G9FKb6xFynKTjyrCbqYzjM0Z3xai4T_WpSkiAYbyyHoQzezZWM2bsWPJ6bWqPh3UuOIXJtBkrj5PgLHLAceNIxUv",
        ],
        year: "2024",
        role: "Lead Designer",
        role_zh: "首席设计师",
        tools: ["PyTorch", "OpenCV", "Stable Diffusion"],
    },
];
