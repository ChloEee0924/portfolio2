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
    tags_zh: string[];
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
        summary_zh: "室内设计方案的智能评分系统。B端产品优化。",
        fullDescription:
            "Led the product design for an AI-powered evaluation system that scores interior design proposals based on aesthetics, functionality, and cost.\n\nCollaborated with algorithm engineers to define scoring metrics and improve model accuracy. The system reduced manual review time by 40%.",
        fullDescription_zh: "主导了一款AI驱动的评估系统的产品设计，该系统根据美学、功能和成本对室内设计方案进行评分。\n\n与算法工程师合作定义评分指标并提高模型准确性。该系统将人工审核时间减少了40%。",
        tags: ["AI Product", "B-End", "Evaluation System"],
        tags_zh: ["AI产品", "B端", "评估系统"],
        coverImage: "/window.svg", // Placeholder, user should replace
        images: ["/window.svg"],
        year: "2024",
        role: "Product Manager",
        role_zh: "产品经理",
        tools: ["Figma", "Python", "Jira"],
    },
    {
        id: "2",
        slug: "smart-city-dashboard",
        title: "Smart City Dashboard",
        title_zh: "智慧城市仪表盘",
        summary:
            "Data visualization platform for urban planning monitoring.",
        summary_zh: "用于城市规划监测的数据可视化平台。",
        fullDescription:
            "Designed the interface and user experience for a comprehensive smart city dashboard. Integrated real-time data streams for traffic, energy, and environmental metrics.\n\nFocused on clarity and accessibility for government stakeholders.",
        fullDescription_zh: "设计了综合智慧城市仪表盘的界面和用户体验。整合了交通、能源和环境指标的实时数据流。\n\n专注于政府利益相关者的清晰度和易用性。",
        tags: ["Data Viz", "Smart City", "UX Design"],
        tags_zh: ["数据可视化", "智慧城市", "UX设计"],
        coverImage: "/globe.svg",
        images: ["/globe.svg"],
        year: "2023",
        role: "UX Designer",
        role_zh: "UX设计师",
        tools: ["Figma", "React", "Mapbox"],
    },
    {
        id: "3",
        slug: "generative-landscape",
        title: "Generative Landscape",
        title_zh: "生成式景观设计",
        summary:
            "Exploring generative algorithms in landscape architecture design.",
        summary_zh: "探索生成算法在景观建筑设计中的应用。",
        fullDescription:
            "Research project utilizing generative adversarial networks (GANs) to create novel landscape patterns and layouts.\n\nInvestigated the intersection of organic forms and computational logic.",
        fullDescription_zh: "利用生成对抗网络（GANs）创建新颖景观图案和布局的研究项目。\n\n通过计算逻辑探索有机形态生成的可能性。",
        tags: ["Generative AI", "Landscape", "Research"],
        tags_zh: ["生成式AI", "景观", "研究"],
        coverImage: "/file.svg",
        images: ["/file.svg"],
        year: "2023",
        role: "Researcher",
        role_zh: "研究员",
        tools: ["Python", "TensorFlow", "Rhino"],
    },
    {
        id: "4", // Changed ID to avoid conflict
        slug: "ai-streetscape-analysis",
        title: "AI Streetscape Analysis",
        title_zh: "AI 街景分析", // Added Chinese field
        summary:
            "Computer Vision applications for analyzing urban street quality and walkability.",
        summary_zh: "计算机视觉应用于分析城市街道质量和步行性。", // Added Chinese field
        fullDescription:
            "This project applies Computer Vision techniques to analyze urban street quality and walkability. By processing thousands of street-view images, we assess factors like greenery, pavement quality, and building aesthetics. The goal is to provide data-driven recommendations for improving urban walkability and livability.",
        fullDescription_zh: "该项目应用计算机视觉技术分析城市街道质量和步行性。通过处理数千张街景图像，我们评估绿化、路面质量和建筑美学等因素。目标是为改善城市步行性和宜居性提供数据驱动的建议。", // Added Chinese field
        tags: ["Computer Vision", "Urban Analysis"],
        tags_zh: ["计算机视觉", "城市分析"], // Added Chinese field
        coverImage:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAdtEVKu4Vz4mgtIFga_9O0cDYYMP8JaUBCIWjCgjz04LtsG8QEJHhDSqPEAg8LYczGqzyOebrNkr84l7mWxsLHVqVXtX6WzzjuxzYqLIPfRp7rRc6sZQJpp5hSxwenxpjnq5zwnlYi9GIweYqDSpssbh8DQFDo_9RkHjkg84I9hjLOY4b5kCr7G9FKb6xFynKTjyrCbqYzjM0Z3xai4T_WpSkiAYbyyHoQzezZWM2bsWPJ6bWqPh3UuOIXJtBkrj5PgLHLAceNIxUv",
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAdtEVKu4Vz4mgtIFga_9O0cDYYMP8JaUBCIWjCgjz04LtsG8QEJHhDSqPEAg8LYczGqzyOebrNkr84l7mWxsLHVqVXtX6WzzjuxzYqLIPfRp7rRc6sZQJpp5hSxwenxpjnq5zwnlYi9GIweYqDSpssbh8DQFDo_9RkHjkg84I9hjLOY4b5kCr7G9FKb6xFKTjyrCbqYzjM0Z3xai4T_WpSkiAYbyyHoQzezZWM2bsWPJ6bWqPh3UuOIXJtBkrj5PgLHLAceNIxUv",
        ],
        year: "2024",
        role: "Lead Designer",
        role_zh: "首席设计师", // Added Chinese field
        tools: ["PyTorch", "OpenCV", "Stable Diffusion"],
    },
];
