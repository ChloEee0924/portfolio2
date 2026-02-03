export interface Project {
    id: string;
    slug: string;
    title: string;
    summary: string;
    fullDescription: string;
    tags: string[];
    coverImage: string;
    images: string[];
    year: string;
    role: string;
    tools: string[];
}

export const projects: Project[] = [
    {
        id: "1",
        slug: "ai-design-evaluation",
        title: "AI Design Evaluation",
        summary:
            "Intelligent scoring systems for interior design solutions. B-end product optimization.",
        fullDescription:
            "This project focuses on creating an intelligent scoring system for interior design solutions aimed at B-end product optimization. By leveraging AI algorithms, we analyze design layouts, color harmony, and functional efficiency to provide real-time feedback to designers. This not only speeds up the design process but also ensures high-quality output that meets industry standards.",
        tags: ["Kujiale Internship", "Optimization"],
        coverImage:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBQHSZSOhWcNDyyptmn3gg8YAc6hOepPbJ86ZAwWpmCQCnbYsVa-9-zNV1nI87Mt7KGwLGcLSv7X56v8uMfjo1lsFstJEVbmMU5laCsaOM-Fhy23Srg1B_fM5Jkva0quGWXnFyHGqiPtByK7p_VemDB_coY87sCAprkFaOp-9WrnpIU4_zX6FjZ0eT61xMJvNmjpU77lPthKPCN_R9K0pW5C1-vfMftLI-3LsMd3xzFAv9H-eSAO1se-UeChoClr2Xi30eSG1w6KQEc",
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBQHSZSOhWcNDyyptmn3gg8YAc6hOepPbJ86ZAwWpmCQCnbYsVa-9-zNV1nI87Mt7KGwLGcLSv7X56v8uMfjo1lsFstJEVbmMU5laCsaOM-Fhy23Srg1B_fM5Jkva0quGWXnFyHGqiPtByK7p_VemDB_coY87sCAprkFaOp-9WrnpIU4_zX6FjZ0eT61xMJvNmjpU77lPthKPCN_R9K0pW5C1-vfMftLI-3LsMd3xzFAv9H-eSAO1se-UeChoClr2Xi30eSG1w6KQEc",
        ],
        year: "2023",
        role: "AI Product Intern",
        tools: ["Python", "SQL", "Figma"],
    },
    {
        id: "2",
        slug: "urban-data-science",
        title: "Urban Data Science",
        summary:
            "Spatial pattern analysis using big data methodologies and SQL. Research on urban dynamics.",
        fullDescription:
            "In this research project, we explored spatial pattern analysis using big data methodologies. Utilizing SQL for data handling and advanced statistical models, we analyzed urban dynamics to understand traffic flows, population distribution, and resource allocation. The insights generated help in better urban planning and policy-making.",
        tags: ["Research", "Big Data"],
        coverImage: "", // Will use gradient in component if empty
        images: [],
        year: "2023",
        role: "Researcher",
        tools: ["SQL", "ArcGIS", "Python"],
    },
    {
        id: "3",
        slug: "ai-streetscape-analysis",
        title: "AI Streetscape Analysis",
        summary:
            "Computer Vision applications for analyzing urban street quality and walkability.",
        fullDescription:
            "This project applies Computer Vision techniques to analyze urban street quality and walkability. By processing thousands of street-view images, we assess factors like greenery, pavement quality, and building aesthetics. The goal is to provide data-driven recommendations for improving urban walkability and livability.",
        tags: ["Computer Vision", "Urban Analysis"],
        coverImage:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAdtEVKu4Vz4mgtIFga_9O0cDYYMP8JaUBCIWjCgjz04LtsG8QEJHhDSqPEAg8LYczGqzyOebrNkr84l7mWxsLHVqVXtX6WzzjuxzYqLIPfRp7rRc6sZQJpp5hSxwenxpjnq5zwnlYi9GIweYqDSpssbh8DQFDo_9RkHjkg84I9hjLOY4b5kCr7G9FKb6xFynKTjyrCbqYzjM0Z3xai4T_WpSkiAYbyyHoQzezZWM2bsWPJ6bWqPh3UuOIXJtBkrj5PgLHLAceNIxUv",
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAdtEVKu4Vz4mgtIFga_9O0cDYYMP8JaUBCIWjCgjz04LtsG8QEJHhDSqPEAg8LYczGqzyOebrNkr84l7mWxsLHVqVXtX6WzzjuxzYqLIPfRp7rRc6sZQJpp5hSxwenxpjnq5zwnlYi9GIweYqDSpssbh8DQFDo_9RkHjkg84I9hjLOY4b5kCr7G9FKb6xFynKTjyrCbqYzjM0Z3xai4T_WpSkiAYbyyHoQzezZWM2bsWPJ6bWqPh3UuOIXJtBkrj5PgLHLAceNIxUv",
        ],
        year: "2024",
        role: "Lead Designer",
        tools: ["PyTorch", "OpenCV", "Stable Diffusion"],
    },
];
