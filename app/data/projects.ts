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
}

export const projects: Project[] = [
    {
        id: "1",
        slug: "ai-design-evaluation",
        title: "AI Design Evaluation",
        title_zh: "AI 设计评估系统",
        summary:
            "Intelligent scoring systems for interior design solutions. B-end product optimization.",
        summary_zh: "针对室内设计方案的智能评分系统，B端产品优化。",
        fullDescription:
            "This project focuses on creating an intelligent scoring system for interior design solutions aimed at B-end product optimization. By leveraging AI algorithms, we analyze design layouts, color harmony, and functional efficiency to provide real-time feedback to designers. This not only speeds up the design process but also ensures high-quality output that meets industry standards.",
        fullDescription_zh: "本项目专注于为室内设计方案创建智能评分系统，旨在优化B端产品。通过利用AI算法，我们分析设计布局、色彩和谐度和功能效率，为设计师提供实时反馈。这不仅加快了设计过程，还确保了符合行业标准的高质量输出。",
        tags: ["Kujiale Internship", "Optimization"],
        coverImage:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBQHSZSOhWcNDyyptmn3gg8YAc6hOepPbJ86ZAwWpmCQCnbYsVa-9-zNV1nI87Mt7KGwLGcLSv7X56v8uMfjo1lsFstJEVbmMU5laCsaOM-Fhy23Srg1B_fM5Jkva0quGWXnFyHGqiPtByK7p_VemDB_coY87sCAprkFaOp-9WrnpIU4_zX6FjZ0eT61xMJvNmjpU77lPthKPCN_R9K0pW5C1-vfMftLI-3LsMd3xzFAv9H-eSAO1se-UeChoClr2Xi30eSG1w6KQEc",
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBQHSZSOhWcNDyyptmn3gg8YAc6hOepPbJ86ZAwWpmCQCnbYsVa-9-zNV1nI87Mt7KGwLGcLSv7X56v8uMfjo1lsFstJEVbmMU5laCsaOM-Fhy23Srg1B_fM5Jkva0quGWXnFyHGqiPtByK7p_VemDB_coY87sCAprkFaOp-9WrnpIU4_zX6FjZ0eT61xMJvNmjpU77lPthKPCN_R9K0pW5C1-vfMftLI-3LsMd3xzFAv9H-eSAO1se-UeChoClr2Xi30eSG1w6KQEc",
        ],
        year: "2023",
        role: "AI Product Intern",
        role_zh: "AI 产品实习生",
        tools: ["Python", "SQL", "Figma"],
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
