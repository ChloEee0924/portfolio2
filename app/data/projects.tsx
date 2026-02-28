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
    fullDescription: React.ReactNode;
    fullDescription_zh: React.ReactNode;
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
        fullDescription: (
            <div className="space-y-8 mt-2">
                <p className="text-lg text-serene-dark/90 font-medium leading-relaxed">
                    Targeting the active aging goals of Yile Community, this project adopts the <strong>"Five-Senses Healing"</strong> principle, crossing the boundaries of landscape and digital products to create an age-friendly design and community operation system. Here is a review of the core work using the STAR method:
                </p>

                <div className="grid gap-6">
                    {/* Situation */}
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-serene-dark/10 shadow-sm transition-all hover:shadow-md hover:bg-white/80">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="bg-blue-100 text-blue-800 font-bold px-3 py-1 rounded-full text-sm tracking-wide shadow-sm">Situation</span>
                            <h4 className="font-bold text-serene-dark text-lg">Context & Background</h4>
                        </div>
                        <ul className="list-disc pl-5 space-y-2 text-serene-dark/80 leading-relaxed">
                            <li><strong>Aging & Community Island:</strong> Amid global and national aging trends, Yile Community has over 30% of residents aged 60+, marking it a severely aging area. With original social ties dissolving, the elderly lack friendly outdoor spaces and mutual-aid mechanisms, often living in hidden social isolation.</li>
                            <li><strong>Policy & Model Transition:</strong> The government is promoting an "autonomous renewal" model for old communities, requiring a shift from government dependence to flexible strategies that encourage active resident participation.</li>
                        </ul>
                    </div>

                    {/* Task */}
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-serene-dark/10 shadow-sm transition-all hover:shadow-md hover:bg-white/80">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="bg-purple-100 text-purple-800 font-bold px-3 py-1 rounded-full text-sm tracking-wide shadow-sm">Task</span>
                            <h4 className="font-bold text-serene-dark text-lg">Objectives</h4>
                        </div>
                        <ul className="list-disc pl-5 space-y-2 text-serene-dark/80 leading-relaxed">
                            <li><strong>Cross-Scale System Design:</strong> Using the "Yellow House" as a minimum intervention point to design across three scales: "object (tree planter) - space (park) - system (community mutual-aid mechanism)".</li>
                            <li><strong>Theoretical Translation & Digital Empowerment:</strong> Integrating cross-disciplinary methods (AI, service design). Based on "cognitive aging intervention," the goal was to build a long-term incentive system shifting the elderly from "social withdrawal" to "social participation."</li>
                        </ul>
                    </div>

                    {/* Action */}
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-serene-dark/10 shadow-sm transition-all hover:shadow-md hover:bg-white/80">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="bg-amber-100 text-amber-800 font-bold px-3 py-1 rounded-full text-sm tracking-wide shadow-sm">Action</span>
                            <h4 className="font-bold text-serene-dark text-lg">Strategy & Execution</h4>
                        </div>
                        <ul className="list-disc pl-5 space-y-3 text-serene-dark/80 leading-relaxed">
                            <li><strong>Core Product Concept:</strong> Merged "landscape sociology + AI community building + time bank circulation," bridging offline physical spaces with online digital operations into a "Cognitive Savings Bank" mini-program.</li>
                            <li><strong>Inclusive User Roles (Bridging the Digital Divide):</strong> Categorized four user roles and pioneered a "scan-to-record" feature. Volunteers scan physical manuals for the elderly, ensuring those without smartphones can still accumulate pension savings inclusively.</li>
                            <li>
                                <strong>Dual Circulation Business Flow:</strong>
                                <ul className="list-circle pl-5 mt-2 space-y-2">
                                    <li><em>Five-Senses Healing Check-in:</em> Digitized the offline manual into an LBS map. Used AI image recognition (plants) and AI voiceprint analysis (sounds) for multi-sensory check-in incentives.</li>
                                    <li><em>Skill Exchange:</em> Built a time bank where residents offer skills to earn "Five-Senses Stamps," redeemable for physical community services.</li>
                                </ul>
                            </li>
                            <li><strong>Full-process PRD & Architecture Design:</strong> Delivered a rigorous PRD and structured the system (ER diagrams, Mermaid flows, Xmind architecture). Defined age-friendly UX (18sp text, TTS voice) and privacy rules.</li>
                        </ul>
                    </div>

                    {/* Result */}
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-serene-dark/10 shadow-sm transition-all hover:shadow-md hover:bg-white/80">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded-full text-sm tracking-wide shadow-sm">Result</span>
                            <h4 className="font-bold text-serene-dark text-lg">Outcomes</h4>
                        </div>
                        <ul className="list-disc pl-5 space-y-2 text-serene-dark/80 leading-relaxed">
                            <li><strong>System-level Delivery:</strong> Transcended pure landscape design by providing a highly feasible digital community-building product, perfectly addressing requirements for digital integration and operational awareness.</li>
                            <li><strong>Reshaping Community Bonds:</strong> Through virtual "Five-Senses Stamps" and minimal physical intervention, it efficiently connected spaces, plants, manpower, and services, forming a reusable digital infrastructure model for old community renewal.</li>
                        </ul>
                    </div>
                </div>
            </div>
        ),
        fullDescription_zh: (
            <div className="space-y-8 mt-2">
                <p className="text-lg text-serene-dark/90 font-medium leading-relaxed">
                    针对怡乐社区的积极老龄化目标，本方案采用<strong>“五感疗愈”原理</strong>，跨越景观与数字产品的界限，打造了一套适老化设计与社区运营系统。以下是该项目的核心工作盘点（STAR）：
                </p>

                <div className="grid gap-6">
                    {/* Situation */}
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-serene-dark/10 shadow-sm transition-all hover:shadow-md hover:bg-white/80">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="bg-blue-100 text-blue-800 font-bold px-3 py-1 rounded-full text-sm tracking-wide shadow-sm">Situation</span>
                            <h4 className="font-bold text-serene-dark text-lg">情境与背景</h4>
                        </div>
                        <ul className="list-disc pl-5 space-y-2 text-serene-dark/80 leading-relaxed">
                            <li><strong>老龄化与社区孤岛：</strong>在全球及中国人口老龄化加剧的背景下，广州市海珠区怡乐社区的60岁及以上老年人口占比已超过30%，属于重度老龄化社区。随着城市发展，老旧街坊搬离，原有社区社会关系消解，老年人缺乏友好的户外空间与互助机制，大多处于缺乏社交的隐性隔离状态。</li>
                            <li><strong>政策与模式转型：</strong>国家正推进老旧小区“自主更新”模式，亟需从依赖政府主导转向激发居民主动参与、自我行动的柔性自救策略。</li>
                        </ul>
                    </div>

                    {/* Task */}
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-serene-dark/10 shadow-sm transition-all hover:shadow-md hover:bg-white/80">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="bg-purple-100 text-purple-800 font-bold px-3 py-1 rounded-full text-sm tracking-wide shadow-sm">Task</span>
                            <h4 className="font-bold text-serene-dark text-lg">任务与目标</h4>
                        </div>
                        <ul className="list-disc pl-5 space-y-2 text-serene-dark/80 leading-relaxed">
                            <li><strong>跨尺度系统设计：</strong>作为《风景园林规划与设计（三）》课程课题，需以怡乐社区内的“黄房子”及其周边场地为最小介入点，进行跨越“物体（树台）- 空间（公园）- 系统（社区互助机制）”三个尺度的设计。</li>
                            <li><strong>理论转化与数字赋能：</strong>要求引入跨学科方法（如人工智能、服务设计等）与运营管理思维。需基于“认知老化干预”和“积极老龄化”理论，构建一套促使老年人从“社会撤退”转为“社会参与”的长效激励机制。</li>
                        </ul>
                    </div>

                    {/* Action */}
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-serene-dark/10 shadow-sm transition-all hover:shadow-md hover:bg-white/80">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="bg-amber-100 text-amber-800 font-bold px-3 py-1 rounded-full text-sm tracking-wide shadow-sm">Action</span>
                            <h4 className="font-bold text-serene-dark text-lg">行动与执行</h4>
                        </div>
                        <ul className="list-disc pl-5 space-y-3 text-serene-dark/80 leading-relaxed">
                            <li><strong>提出核心产品理念：</strong>融合“景观社会学 + AI 社区营造 + 时间银行内循环”，将线下物理空间与线上数字化运营结合，将小程序定位为“认知储蓄银行”。</li>
                            <li><strong>包容性用户角色设计 (破除数字鸿沟)：</strong>针对不同数字能力的人群，精细划分了“社区居民、高龄/非数字用户、五感园丁/志愿者、技能达人”四类角色。首创“扫码代录入”功能，由志愿者扫描高龄老人实体手册，在后台代为记录数据，确保不使用智能手机的老年人也能积累养老储蓄，实现真正的包容性设计。</li>
                            <li>
                                <strong>构建“五感疗愈”与“时间银行”双循环业务流：</strong>
                                <ul className="list-circle pl-5 mt-2 space-y-2">
                                    <li><em>五感疗愈打卡：</em>将线下《怡乐补给手册》转化为 LBS 电子地图，结合 AI 图像识别（识花及开花/结果状态）与 AI 声纹分析（环境音比对），实现视、听、嗅、味、触的多感官打卡激励。</li>
                                    <li><em>技能互助与兑换：</em>搭建时间银行撮合流，居民实名发布技能（如维修、理发）赚取“五感印章”。印章可在“认知储蓄银行”中兑换实体社区服务，实现资源内循环。</li>
                                </ul>
                            </li>
                            <li><strong>全流程 PRD 撰写与架构设计：</strong>输出了一份结构完整、逻辑严密的《产品需求文档 (PRD)》，并独立完成了包括 ER 实体关系图、Mermaid 业务流程图、Xmind 信息架构图在内的系统搭建说明，详尽定义了适老化交互（18sp大字号、TTS语音）及隐私字段规则（家庭住址加密）。</li>
                        </ul>
                    </div>

                    {/* Result */}
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-serene-dark/10 shadow-sm transition-all hover:shadow-md hover:bg-white/80">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded-full text-sm tracking-wide shadow-sm">Result</span>
                            <h4 className="font-bold text-serene-dark text-lg">结果与成效</h4>
                        </div>
                        <ul className="list-disc pl-5 space-y-2 text-serene-dark/80 leading-relaxed">
                            <li><strong>成功交付系统级产品方案：</strong>超越了传统的纯景观空间图纸表达，交付了一套具备高落地可行性的数字化社区营造产品方案，完美响应了任务书中“提高项目运营意识”和“应用数字技术方法”的核心考核要求。</li>
                            <li><strong>重塑社区羁绊：</strong>通过虚拟“五感印章”这一流通介质，巧妙地使用最小物理干预（黄房子微更新），高效串联起了社区内的空间、植物、人力与服务，为老旧小区实现“自助更新”与“积极老龄化”提供了一套可复用的数字基建模型。</li>
                        </ul>
                    </div>
                </div>
            </div>
        ),
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
                url: "/project/yile/怡乐五感补给手册_compressed.pdf",
            },
            {
                title: "Yile Community Mini Program Prototype",
                title_zh: "怡乐家园小程序原型",
                url: "https://yile-home-v1.pages.dev/",
            },
            {
                title: "Yile Community Mini Program PRD",
                title_zh: "怡乐家园小程序PRD",
                url: "/project/yile/怡乐五感社区微信小程序 PRD.pdf",
            },
            {
                title: "Detailed Design Document",
                title_zh: "设计内容详细文本",
                url: "/project/yile/最新课程改造与社区运营设计（获得社区负责人认可）.pdf",
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
