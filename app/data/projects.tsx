import Mermaid from "../components/Mermaid";

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
        slug: "kujiale-ai-design-platform-operation",
        title: "Kujiale AI Intelligent Design Platform Operation",
        title_zh: "酷家乐 AI 智能设计平台运营",
        summary:
            "Built a high-quality AI business knowledge base and drove algorithm iterations for Oppein's AI intelligent design platform.",
        summary_zh: "酷家乐为泛家居行业头部客户交付大模型平台，负责搭建高质量 AI 业务知识库并驱动底层核心算法迭代。",
        fullDescription: (
            <div className="space-y-8 mt-2">
                <p className="text-lg text-serene-dark/90 font-medium leading-relaxed">
                    Kujiale is delivering a brand-new AI intelligent design platform for a leading B-end client (Oppein) in the home furnishing industry. This project required deep algorithm refinement and experience optimization to ensure commercial deployment standards. Here is a review of the core work using the STAR method:
                </p>

                <div className="grid gap-6">
                    {/* Situation */}
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-serene-dark/10 shadow-sm transition-all hover:shadow-md hover:bg-white/80">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="bg-blue-100 text-blue-800 font-bold px-3 py-1 rounded-full text-sm tracking-wide shadow-sm">Situation</span>
                            <h4 className="font-bold text-serene-dark text-lg">Context & Background</h4>
                        </div>
                        <ul className="list-disc pl-5 space-y-2 text-serene-dark/80 leading-relaxed">
                            <li><strong>Commercial Standardization:</strong> Kujiale is delivering a brand-new AI intelligent design platform for a leading B-end client (Oppein). To ensure the AI-generated interior design solutions meet commercial deployment standards, it requires not only massive underlying data support but also deep algorithm refinement and experience optimization for actual business scenarios.</li>
                        </ul>
                    </div>

                    {/* Task */}
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-serene-dark/10 shadow-sm transition-all hover:shadow-md hover:bg-white/80">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="bg-purple-100 text-purple-800 font-bold px-3 py-1 rounded-full text-sm tracking-wide shadow-sm">Task</span>
                            <h4 className="font-bold text-serene-dark text-lg">Objectives</h4>
                        </div>
                        <ul className="list-disc pl-5 space-y-2 text-serene-dark/80 leading-relaxed">
                            <li><strong>Knowledge Base & Quality Assurance:</strong> As an AI Product Operator, the core objective is to build a high-quality AI business knowledge base and, through large-scale stress testing and use-case troubleshooting, identify blind spots in the AI generation logic, driving the R&D team's iteration to ensure extremely high commercial usability.</li>
                        </ul>
                    </div>

                    {/* Action */}
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-serene-dark/10 shadow-sm transition-all hover:shadow-md hover:bg-white/80">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="bg-amber-100 text-amber-800 font-bold px-3 py-1 rounded-full text-sm tracking-wide shadow-sm">Action</span>
                            <h4 className="font-bold text-serene-dark text-lg">Strategy & Execution</h4>
                        </div>
                        <ul className="list-disc pl-5 space-y-3 text-serene-dark/80 leading-relaxed">
                            <li><strong>"Feeding" AI & Building Rule Engine:</strong> Processed over 5,000 interior hardware model data from scratch, assigned precise attribute tags, and deeply studied prompt composition. Configured over 100 sets of spatial rule templates for different styles, providing clear learning samples for the AI algorithm.</li>
                            <li><strong>"User Advocate" Limit Testing:</strong> Went beyond routine testing by introducing over 300 sets of real floor plans of varying sizes and cross-verifying them against over 10 design styles.</li>
                            <li><strong>Cross-departmental Collaboration & Definition:</strong> Systematically categorized scattered bugs found during testing (such as "light overexposure", "model collision", "rendering perspective distortion") into over 20 product optimization requirement work orders. Communicated closely with the R&D team to promote the upgrade of underlying rendering logic and layout algorithms.</li>
                        </ul>
                    </div>

                    {/* Result */}
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-serene-dark/10 shadow-sm transition-all hover:shadow-md hover:bg-white/80">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded-full text-sm tracking-wide shadow-sm">Result</span>
                            <h4 className="font-bold text-serene-dark text-lg">Outcomes</h4>
                        </div>
                        <ul className="list-disc pl-5 space-y-2 text-serene-dark/80 leading-relaxed">
                            <li><strong>Data Richness:</strong> Established a standardized tag retrieval and model configuration system, significantly enhancing the data richness of the AI platform.</li>
                            <li><strong>Quality Delivery:</strong> Through the implementation of over 20 key optimization suggestions, significantly reduced the "manual secondary modification rate" of AI solutions, ensuring the smooth delivery and high-standard launch of the Oppein AI intelligent design platform.</li>
                        </ul>
                    </div>
                </div>

                {/* AI Generation Quality Module */}
                <div className="pt-8 space-y-12">
                    {/* Full Width Image: Before & After */}
                    <div className="flex flex-col">
                        <img src="/project/kujiale/对比示意图.png" alt="Before & After Comparison" className="w-full h-auto rounded-xl shadow-sm border border-serene-dark/10 object-cover" />
                        <p className="mt-4 text-sm text-serene-dark/60 text-center font-medium">Visual Verification: Before & After Comparison</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                        {/* Left Column: Workflow & Funnel Visuals */}
                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col">
                                <img src="/project/kujiale/质量验收.png" alt="Testing & Optimization Workflow" className="w-full h-auto rounded-xl shadow-sm border border-serene-dark/10 object-cover" />
                                <p className="mt-4 text-sm text-serene-dark/60 text-center font-medium">Business Driven: Testing & Optimization Workflow</p>
                            </div>
                            <div className="flex flex-col">
                                <img src="/project/kujiale/数据漏斗图.png" alt="Data Funnel" className="block w-full h-auto rounded-xl shadow-sm border border-serene-dark/10 object-cover bg-white" />
                                <p className="mt-4 text-sm text-serene-dark/60 text-center font-medium">Data Funnel: Optimization Process</p>
                            </div>
                        </div>

                        {/* Right Column: Text Summary */}
                        <div className="flex flex-col justify-start">
                            <div>
                                <h3 className="text-2xl font-bold text-serene-dark mb-2">AI Generation Quality & Experience Optimization</h3>
                                <p className="text-base text-serene-dark/70 font-medium mb-6">Distilling common issues from chaotic test phenomena to control the final commercial delivery quality.</p>
                                <ul className="list-disc pl-5 space-y-3 text-serene-dark/80">
                                    <li><strong>Boundary Stress Testing:</strong> Executed cross-validation on 300+ complex real-world layouts and 10+ core styles.</li>
                                    <li><strong>Distilling Common Rules:</strong> Pinpointed AI generation blind spots like light overexposure and model collision.</li>
                                    <li><strong>Driving R&D Iteration:</strong> Delivered 20+ high-priority optimization proposals, ensuring commercial deployment for Oppein.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Module 2: AI Business Knowledge Base & Rules Engine */}
                <div className="pt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start border-t border-serene-dark/5">
                    {/* Left Column: Visuals */}
                    <div className="flex flex-col">
                        <img src="/project/kujiale/mindmap.png" alt="Architecture Deconstruction" className="w-full h-auto rounded-xl shadow-sm border border-serene-dark/10 object-cover" />
                        <p className="mt-4 text-sm text-serene-dark/60 text-center font-medium">🌿 Architecture Deconstruction: AI Underlying Spatial Rules & Style Topology</p>
                    </div>

                    {/* Right Column: Data & Summary */}
                    <div className="flex flex-col justify-center h-full">
                        <h3 className="text-2xl font-bold text-serene-dark mb-2">AI Business Knowledge Base & Rules Engine</h3>
                        <p className="text-base text-serene-dark/70 font-medium mb-6">Discarding blind "building blocks", deeply understanding pan-home furnishing business logic, and establishing a scalable underlying rule base for AI.</p>
                        <ul className="list-disc pl-5 space-y-3 text-serene-dark/80">
                            <li><strong>Deconstructing Complex Business:</strong> Sorted out the real business scenarios of B-end enterprise (Oppein), translating the experience of senior designers into machine-readable configuration rules.</li>
                            <li><strong>Building Underlying Knowledge Base:</strong> Independently completed system configuration of 100+ exclusive furniture combinations, fully covering core spaces like living room, dining room, bedroom, and study room.</li>
                            <li><strong>Establishing Standardized Parameters:</strong> Finely defined the underlying logic of 3 core design styles, including hard furnishing component association, soft furnishing anti-collision, and circulation avoidance constraints.</li>
                        </ul>
                    </div>
                </div>

                {/* Module 3: Scene Combination Strategy */}
                <div className="pt-16 space-y-8 border-t border-serene-dark/5">
                    <div className="w-full flex justify-center">
                        <img src="/project/kujiale/placeholder_diagram.png" alt="Process Diagram Placeholder" className="w-full h-auto rounded-xl shadow-sm border border-serene-dark/10 object-cover" />
                    </div>

                    <div className="max-w-4xl mx-auto flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-serene-dark mb-4 text-center">Core Strategy: Scene Combination Asset Multiplication Based on "Core SKU Anchor"</h3>
                        <ul className="list-disc pl-5 space-y-3 text-serene-dark/80">
                            <li><strong>Establish Business Anchors:</strong> Deeply understand B-end business demands, taking Oppein's real selling products (specific sofas, dining tables, bed frames, desks) as the absolute core of scene generation (Anchor SKU).</li>
                            <li><strong>Introduce Style Variable Engine:</strong> Deconstruct the abstract "style" into configurable accessory variables (e.g., modern minimalist geometric rugs, Italian luxury metal lamps).</li>
                            <li><strong>Scale Data Asset Multiplication:</strong> Through the matrix configuration formula of "Core Anchor × Style Variable", successfully multiply a single product into 100+ plug-and-play AI combination libraries. Ensure that AI not only guarantees spatial aesthetics during automatic layout but also precisely drives the exposure and conversion of client-specified products.</li>
                        </ul>
                    </div>
                </div>
            </div>
        ),
        fullDescription_zh: (
            <div className="space-y-8 mt-2">
                <p className="text-lg text-serene-dark/90 font-medium leading-relaxed">
                    酷家乐正在为泛家居行业头部 B 端客户（欧派）交付全新的 AI 智能设计平台。以下是该项目核心工作的 STAR 工作总结：
                </p>

                <div className="grid gap-6">
                    {/* Situation */}
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-serene-dark/10 shadow-sm transition-all hover:shadow-md hover:bg-white/80">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="bg-blue-100 text-blue-800 font-bold px-3 py-1 rounded-full text-sm tracking-wide shadow-sm">Situation</span>
                            <h4 className="font-bold text-serene-dark text-lg">项目背景</h4>
                        </div>
                        <ul className="list-disc pl-5 space-y-2 text-serene-dark/80 leading-relaxed">
                            <li><strong>商业化交付挑战：</strong>酷家乐正在为泛家居行业头部 B 端客户（欧派）交付全新的 AI 智能设计平台。为了确保 AI 生成的室内设计方案能够达到商业落地的标准，不仅需要海量的底层数据支撑，还需要针对实际业务场景进行深度的算法打磨与体验优化。</li>
                        </ul>
                    </div>

                    {/* Task */}
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-serene-dark/10 shadow-sm transition-all hover:shadow-md hover:bg-white/80">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="bg-purple-100 text-purple-800 font-bold px-3 py-1 rounded-full text-sm tracking-wide shadow-sm">Task</span>
                            <h4 className="font-bold text-serene-dark text-lg">核心目标</h4>
                        </div>
                        <ul className="list-disc pl-5 space-y-2 text-serene-dark/80 leading-relaxed">
                            <li><strong>构建库与极限排查：</strong>作为 AI 产品运营，核心目标是搭建高质量的 AI 业务知识库，并通过大规模的压力测试与用例排查，找出 AI 生成逻辑中的盲区，驱动产研团队迭代，保障最终交付的系统具备极高的商业可用性。</li>
                        </ul>
                    </div>

                    {/* Action */}
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-serene-dark/10 shadow-sm transition-all hover:shadow-md hover:bg-white/80">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="bg-amber-100 text-amber-800 font-bold px-3 py-1 rounded-full text-sm tracking-wide shadow-sm">Action</span>
                            <h4 className="font-bold text-serene-dark text-lg">行动策略</h4>
                        </div>
                        <ul className="list-disc pl-5 space-y-3 text-serene-dark/80 leading-relaxed">
                            <li><strong>“喂养” AI，构建规则引擎：</strong>从 0 到 1 处理了 5000+ 室内硬件模型数据，为其打上精准的属性标签，并深入研究提示词（Prompt）构成。同时，配置了 100+ 套不同风格的空间规则模板，为 AI 算法提供了清晰的学习样本。</li>
                            <li><strong>充当“用户代言人”进行极限测试：</strong>不局限于常规测试，而是引入了 300+ 套包含大中小真实户型，对 10+ 种设计风格进行交叉验证。</li>
                            <li><strong>跨部门协同与产品定义：</strong>将测试中发现的“灯光过曝”、“模型穿模”、“渲染视角畸变”等零散 Bug，体系化地归纳为 20+ 产品优化需求工单，与研发团队紧密沟通，推动底层渲染逻辑与布局算法的升级。</li>
                        </ul>
                    </div>

                    {/* Result */}
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-serene-dark/10 shadow-sm transition-all hover:shadow-md hover:bg-white/80">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded-full text-sm tracking-wide shadow-sm">Result</span>
                            <h4 className="font-bold text-serene-dark text-lg">业务成果</h4>
                        </div>
                        <ul className="list-disc pl-5 space-y-2 text-serene-dark/80 leading-relaxed">
                            <li><strong>资产与标签化：</strong>建立了一套标准化的标签检索与模型配置体系，大幅提升了 AI 平台的数据丰富度。</li>
                            <li><strong>高标准交付：</strong>通过 20+ 项关键优化建议的落地，显著降低了 AI 方案的“人工二次修改率”，保障了欧派 AI 智能设计平台的顺利交付与高标准上线。</li>
                        </ul>
                    </div>
                </div>

                {/* AI Generation Quality Module */}
                <div className="pt-8 space-y-12">
                    {/* Full Width Image: 前后对比 */}
                    <div className="flex flex-col">
                        <img src="/project/kujiale/对比示意图.png" alt="前后效果对比" className="w-full h-auto rounded-xl shadow-sm border border-serene-dark/10 object-cover" />
                        <p className="mt-4 text-sm text-serene-dark/60 text-center font-medium">视觉验证：前后效果对比</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                        {/* Left Column: Workflow & Funnel Visuals */}
                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col">
                                <img src="/project/kujiale/质量验收.png" alt="测试与优化工作流" className="w-full h-auto rounded-xl shadow-sm border border-serene-dark/10 object-cover" />
                                <p className="mt-4 text-sm text-serene-dark/60 text-center font-medium">业务驱动：测试与优化工作流</p>
                            </div>
                            <div className="flex flex-col">
                                <img src="/project/kujiale/数据漏斗图.png" alt="数据漏斗图" className="block w-full h-auto rounded-xl shadow-sm border border-serene-dark/10 object-cover bg-white" />
                                <p className="mt-4 text-sm text-serene-dark/60 text-center font-medium">量化漏斗：提炼与优化过程</p>
                            </div>
                        </div>

                        {/* Right Column: Text Summary */}
                        <div className="flex flex-col justify-start">
                            <div>
                                <h3 className="text-2xl font-bold text-serene-dark mb-2">工作内容1：AI 生成质量验收与体验优化</h3>
                                <p className="text-base text-serene-dark/70 font-medium mb-6">从海量杂乱的测试现象中提炼共性问题，把控 AI 最终交付质量。</p>
                                <ul className="list-disc pl-5 space-y-3 text-serene-dark/80">
                                    <li><strong>边界压力测试：</strong>突破常规测试的局限，深度覆盖 300+ 异形与复杂真实户型，并结合 10+ 种核心设计风格进行高强度的交叉验证。通过模拟 B 端客户极端的真实业务场景，全面探测并穷尽 AI 布局算法在不同空间尺度与物理环境下的生成边界。</li>
                                    <li><strong>提炼共性规则：</strong>从海量杂乱的测试现象中，精准定位并分类“全局光影过曝”、“复杂承重墙模型穿模”、“软硬装尺寸冲突”等底层生成盲区，将零散的报错抽象为系统性的共性缺陷。</li>
                                    <li><strong>驱动产研迭代：</strong>将业务痛点转化为高价值的产品需求，累计输出 20+ 项高优产品优化提案。推动底层渲染逻辑与空间避让机制的重构，最终保障了标杆大客户（欧派）AI 智能设计项目的“商业化高质量交付”与成功落地。</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Module 2: AI Business Knowledge Base & Rules Engine (Chinese) */}
                <div className="pt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start border-t border-serene-dark/5">
                    {/* Left Column: Visuals */}
                    <div className="flex flex-col">
                        <img src="/project/kujiale/平台逻辑.png" alt="架构解构" className="w-full h-auto rounded-xl shadow-sm border border-serene-dark/10 object-cover" />
                        <p className="mt-4 text-sm text-serene-dark/60 text-center font-medium">架构解构：AI 底层空间规则与风格拓扑图</p>
                    </div>

                    {/* Right Column: Data & Summary */}
                    <div className="flex flex-col justify-center h-full">
                        <h3 className="text-2xl font-bold text-serene-dark mb-2">工作内容2：AI 业务知识库与规则引擎搭建</h3>
                        <p className="text-base text-serene-dark/70 font-medium mb-6">摒弃盲目的“搭积木”，深刻理解泛家居业务逻辑，为 AI 建立可规模化复用的底层规则基座。</p>
                        <ul className="list-disc pl-5 space-y-3 text-serene-dark/80">
                            <li><strong>解构复杂业务：</strong>梳理 B 端客户（欧派）的真实业务场景，将资深设计师的经验转化为机器可读的配置规则。</li>
                            <li><strong>搭建底层知识库：</strong>独立完成 100+ 套专属家具组合的系统配置，全方位覆盖客厅、餐厅、卧室、书房等核心空间。</li>
                            <li><strong>建立标准化参数：</strong>精细定义 3 种核心设计风格下的底层逻辑，包括硬装组件关联、软装摆件防穿模以及动线避让约束。</li>
                        </ul>
                    </div>
                </div>

                {/* Module 3: Scene Combination Strategy (Chinese) */}
                <div className="pt-16 space-y-8 border-t border-serene-dark/5">
                    <div className="w-full flex justify-center">
                        <img src="/project/kujiale/项目内容.png" alt="流程图占位" className="w-full h-auto rounded-xl shadow-sm border border-serene-dark/10 object-cover" />
                    </div>

                    <div className="max-w-4xl mx-auto flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-serene-dark mb-4 text-center">核心策略：基于“核心 SKU 锚点”的场景组合资产繁衍</h3>
                        <ul className="list-disc pl-5 space-y-3 text-serene-dark/80">
                            <li>
                                <strong>1. 输入阶段：确立商业锚点（将 SKU 视为数据常量）</strong>
                                <ul className="list-circle pl-5 mt-2 space-y-2">
                                    <li><strong>核心动作：</strong> 接收 B 端客户（如欧派）指定的具体实体商品 SKU，如指定的沙发、餐桌/椅子、床架和书桌。</li>
                                    <li><strong>产品思维提炼：</strong> 工作的第一步不是盲目设计，而是确立“商业锚点”。在后续的 AI 场景生成中，这些特定的商品被设定为绝对不可更改的<strong>“数据常量”</strong>。</li>
                                </ul>
                            </li>
                            <li>
                                <strong>2. 流程阶段：定义拼搭逻辑（引入户型与风格变量）</strong>
                                <ul className="list-circle pl-5 mt-2 space-y-2">
                                    <li><strong>核心动作：</strong> 围绕指定的 SKU 锚点，通过海量辅件的精准搭配，建立起适配不同物理空间和美学诉求的搭配模型组合。</li>
                                    <li><strong>变量矩阵设计：</strong> 引入了两个维度的核心变量进行网格化交叉：空间维度（大、中、小户型）与美学维度（现代简约、轻奢意式、新中式等）。</li>
                                    <li><strong>底层公式构建：</strong> 提炼出了一套可规模化复用的算法逻辑公式：<strong>核心标品SKU × N种户型参数 × N种风格变量 = N套AI场景组合资产</strong>。</li>
                                </ul>
                            </li>
                            <li>
                                <strong>3. 输出阶段：交付规模化场景资产库</strong>
                                <ul className="list-circle pl-5 mt-2 space-y-2">
                                    <li><strong>核心动作：</strong> 最终向前端大模型/业务端交付适配大中小户型的规模化场景资产库。</li>
                                    <li><strong>成果展现：</strong> 建立了“沙发组合库”、“餐桌组合库”、“床架与书桌组合库”等模块。真正实现了 <strong>“1 SKU × N 种场景”</strong> 的繁衍效果。</li>
                                    <li><strong>业务价值：</strong> 最终产出了 100+ 套高可用的场景组合矩阵。例如，同一个沙发锚点，能自动且精准地衍生出现代简约（小户型）、意式轻奢（中户型）和新中式（大户型）等截然不同的高质量商业渲染结果。</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        ),
        tags: ["AI Platform", "Product Operation", "AIGC", "Data Tagging", "Agile Testing"],
        coverImage: "/project/kujiale/detail1.jpg", // Will use gradient in component if empty
        images: ["/project/kujiale/detail1.jpg", "/project/kujiale/detail2.jpg", "/project/kujiale/detail3.jpg", "/project/kujiale/detail4.jpg", "/project/kujiale/detail5.jpg"],
        year: "2025",
        role: "AI Product Operator",
        role_zh: "AI 客户产品运营实习生",
        tools: ["Coohom", "3dmax", "Excel", "Support Ticket System"],
    },
    {
        id: "3",
        slug: "ai-streetscape-analysis",
        title: "AI Streetscape Analysis",
        title_zh: "基于多源空间数据与 AI 街景语义分割的健康街道量化评估与导则设计",
        summary:
            "Computer Vision applications for analyzing urban street quality and walkability.",
        summary_zh: "计算机视觉在分析城市街道质量和步行友好度中的应用。",
        fullDescription: (
            <div className="space-y-8 mt-2">
                <div className="grid gap-6">
                    {/* Situation */}
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-serene-dark/10 shadow-sm transition-all hover:shadow-md hover:bg-white/80">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="bg-blue-100 text-blue-800 font-bold px-3 py-1 rounded-full text-sm tracking-wide shadow-sm">Situation</span>
                            <h4 className="font-bold text-serene-dark text-lg">Context & Pain Points</h4>
                        </div>
                        <ul className="list-disc pl-5 space-y-2 text-serene-dark/80 leading-relaxed">
                            <li><strong>Macro Background:</strong> As China's urban development transitions from incremental expansion to stock renewal, the micro-renewal of old urban areas has become key to high-quality urban development. Concurrently, the national "14th Five-Year Plan" explicitly states that urban construction must shift from "object-oriented" to "people-centered and health-oriented".</li>
                            <li><strong>Business Pain Points:</strong> Constrained by its complex historical evolution, Guangzhou's old urban areas face severe health and spatial supply challenges, such as aging infrastructure, severe functional decline, and traffic congestion. Considering that rail transit accounts for over 44% of Guangzhou's public transit passenger flow, and "walking" is the core way for residents in old urban areas to connect to the subway, the deterioration of the walking environment directly impacts urban operational efficiency.</li>
                            <li><strong>Research Anchor:</strong> Introducing the cutting-edge concept of "Healthy Streets", focusing on three core obstacles to walking: traffic noise, air pollution, and lack of a convenient walking environment. Since traditional urban micro-renewal research heavily relies on subjective questionnaires and lacks objective data support, this project broke the traditional black box to introduce multi-source objective data for precise quantitative diagnosis of micro-spaces within a 10-minute walking radius (approx. 500 meters) around core subway stations.</li>
                        </ul>
                    </div>

                    {/* Task */}
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-serene-dark/10 shadow-sm transition-all hover:shadow-md hover:bg-white/80">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="bg-purple-100 text-purple-800 font-bold px-3 py-1 rounded-full text-sm tracking-wide shadow-sm">Task</span>
                            <h4 className="font-bold text-serene-dark text-lg">Objectives</h4>
                        </div>
                        <p className="text-serene-dark/80 leading-relaxed mb-4">
                            My core task was to build a complete <strong>"Spatial Data Quantitative & Evaluation Pipeline"</strong> from scratch. Based on GIS analysis of urban land use, population density, and road network density, I scientifically selected three core subway stations in Yuexiu District (Caihongqiao, Ouzhuang, and Yangji) as benchmark subjects. I connected the entire process from "large-scale spatial data sampling" to "deep learning streetscape pixel-level analysis", and finally to "mathematical model objective weighting & road network calculation". The ultimate goal was to accurately diagnose the street health index and precipitate scalable spatial optimization guidelines.
                        </p>

                        {/* 🖼️ 【图片插入位置 1：评价体系思维导图】 */}
                        <div className="my-6">
                            <img
                                src={encodeURI("/project/yuyifenge/评价体系.jpg")}
                                alt="Evaluation System Mind Map"
                                className="w-full rounded-xl shadow-md border border-gray-100 object-cover"
                            />
                        </div>
                    </div>

                    {/* Action */}
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-serene-dark/10 shadow-sm transition-all hover:shadow-md hover:bg-white/80">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="bg-amber-100 text-amber-800 font-bold px-3 py-1 rounded-full text-sm tracking-wide shadow-sm">Action</span>
                            <h4 className="font-bold text-serene-dark text-lg">Data Mining & Business Guidelines Formulation</h4>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h5 className="font-bold text-serene-dark/90 mb-2">ArcGIS-Based Spatial Sampling & Big Data Calculation:</h5>
                                <ul className="list-disc pl-5 space-y-2 text-serene-dark/80 leading-relaxed mb-4">
                                    <li>Used Baidu Maps coordinate picking system to accurately obtain viewpoint coordinates, imported them into ArcGIS for spatial data visualization, and scientifically defined 68 streetscape collection points (covering mid-blocks and key intersections).</li>
                                    <li>Deeply utilized acquired POI data to perform Kernel Density Analysis in ArcGIS, scientifically defining and narrowing the research scope.</li>
                                    <li>Established a 1500m spatial buffer in ArcGIS, innovatively introducing eight-quadrant division and shortest-path algorithms to accurately calculate the PRD (Pedestrian Route Directness) of each station, providing hardcore data support for objectively evaluating subway spatial accessibility.</li>
                                </ul>
                                {/* 🖼️ 【图片插入位置 2：研究地点选择gis截图】 */}
                                <div className="mt-4 mb-6">
                                    <img
                                        src="/project/yuyifenge/位置选取.png"
                                        alt="Study Area Selection GIS Screenshot"
                                        className="w-full rounded-xl shadow-md border border-gray-100 object-cover"
                                    />
                                </div>
                            </div>

                            <div>
                                <h5 className="font-bold text-serene-dark/90 mb-2">Deploying MXnet & DeepLab V3 via Python for AI Street View Semantic Segmentation:</h5>
                                <ul className="list-disc pl-5 space-y-2 text-serene-dark/80 leading-relaxed mb-4">
                                    <li>Independently configured underlying virtual environments using Anaconda, successfully deployed the MXnet deep learning framework, and efficiently executed core processing code within the PyCharm IDE.</li>
                                    <li>Successfully invoked the DeepLab V3 semantic segmentation model (pre-trained on the Cityscapes dataset) to perform size reconstruction and pixel-level computer vision recognition on a bulk batch of 68 Baidu panoramic street view images.</li>
                                    <li>Visualized 20 key street elements (vehicle lanes, sidewalks, buildings, plants, etc.) through color-block overlays with 0.8 opacity. Independently wrote functions to automatically extract pixel proportions for each element and export structured CSV data, successfully achieving a "dimensionality reduction" by transforming unstructured images into core quantitative metrics like Green View Index and Sky View Factor.</li>
                                </ul>
                                {/* 🖼️ 【新增：视点选择图片】 */}
                                <div className="mt-4 mb-6">
                                    <img
                                        src="/project/yuyifenge/视点选取示意.png"
                                        alt="Viewpoint Selection Screenshot"
                                        className="w-full rounded-xl shadow-md border border-gray-100 object-cover"
                                    />
                                </div>

                                {/* 🖼️ 【图片插入位置 3：语义分析过程截图】 */}
                                <div className="mt-4 mb-6">
                                    <img
                                        src="/project/yuyifenge/分割截图.png"
                                        alt="Semantic Analysis Process Screenshot"
                                        className="w-full rounded-xl shadow-md border border-gray-100 object-cover"
                                    />
                                </div>
                            </div>

                            <div>
                                <h5 className="font-bold text-serene-dark/90 mb-2">Data Modeling and Correlation Mining based on Entropy Weight Method and SPSS:</h5>
                                <ul className="list-disc pl-5 space-y-2 text-serene-dark/80 leading-relaxed mb-4">
                                    <li>Built a rigorous evaluation sample matrix, introduced the "Entropy Weight Method" to normalize and translate positive and negative spatial indicators (+0.01 to eliminate invalid data interference). By calculating information entropy redundancy, completely abandoned traditional subjective manual scoring, and accurately derived the absolute objective weight of each evaluation factor.</li>
                                    <li>Proficiently used SPSS statistical software to conduct in-depth bivariate correlation analysis between calculated PRD values and road network morphology evaluation indicators such as block edge length and intersection density, successfully exploring and confirming the deep mathematical laws behind road network textures.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Result */}
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-serene-dark/10 shadow-sm transition-all hover:shadow-md hover:bg-white/80">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded-full text-sm tracking-wide shadow-sm">Result</span>
                            <h4 className="font-bold text-serene-dark text-lg">Data-Driven Business Value & Iteration</h4>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h5 className="font-bold text-serene-dark/90 mb-2">Complete Data Model Validation & Precise Attribution:</h5>
                                <p className="text-serene-dark/80 leading-relaxed mb-4">
                                    Cross-compared the calculated health index scores with the actual built environments around Yangji, Ouzhuang, and Caihongqiao stations. The ground truth of high and low-scoring road segments highly aligned with the model's deductions, successfully verifying the scientific validity and business universality of this quantitative evaluation system.
                                </p>
                            </div>

                            <div>
                                <h5 className="font-bold text-serene-dark/90 mb-2">Achieve Business Strategy Closed Loop & Value Delivery:</h5>
                                <p className="text-serene-dark/80 leading-relaxed mb-4">
                                    The design guidelines produced based on data insights effectively filled the industry gap in quantitative micro-renewal of healthy streets in Guangzhou's old urban areas. The solution not only implemented physical micro-renewal strategies but also deeply integrated historical and cultural heritage and community vitality into the spatial design, providing a data-driven decision model with extremely high commercial value for the stock renewal of old urban areas.
                                </p>
                                {/* 🖼️ 【图片插入位置 5：设计导则截图】 */}
                                <div className="mt-4 mb-6">
                                    <img
                                        src={encodeURI("/project/yuyifenge/设计导则.png")}
                                        alt="Design Guideline Screenshot"
                                        className="w-full rounded-xl shadow-md border border-gray-100 object-cover"
                                    />
                                </div>
                            </div>

                            <div>
                                <h5 className="font-bold text-serene-dark/90 mb-2">PM Deep Review & Long-term Iteration Planning:</h5>
                                <p className="text-serene-dark/80 leading-relaxed mb-4">
                                    During the project closeout review, keenly pointed out the current temporal limitations of combining qualitative and quantitative indicators. Forward-looking planning was made for the iteration direction of introducing dynamic time-series data such as dynamic pedestrian flow and real-time air quality index in the future; meanwhile, the core strategic significance of cross-disciplinary alignment (traffic engineering, public health) and the establishment of a long-term tracking automated evaluation mechanism was clarified.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 🖼️ 【新增：项目展板（脱离白色板块）】 */}
                    <div className="pt-8 mt-8 border-t border-serene-dark/5">
                        <h3 className="text-2xl font-bold text-serene-dark mb-6 text-center">Project Board</h3>
                        <img
                            src={encodeURI("/project/yuyifenge/项目展板.jpg")}
                            alt="Project Board"
                            className="w-full rounded-2xl shadow-sm border border-serene-dark/10 object-cover"
                        />
                    </div>
                </div>
            </div>
        ),
        fullDescription_zh: (
            <div className="space-y-8 mt-2">
                <div className="grid gap-6">
                    {/* Situation */}
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-serene-dark/10 shadow-sm transition-all hover:shadow-md hover:bg-white/80">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="bg-blue-100 text-blue-800 font-bold px-3 py-1 rounded-full text-sm tracking-wide shadow-sm">Situation</span>
                            <h4 className="font-bold text-serene-dark text-lg">业务情境与痛点</h4>
                        </div>
                        <ul className="list-disc pl-5 space-y-2 text-serene-dark/80 leading-relaxed">
                            <li><strong>宏观背景：</strong> 随着我国城市发展从增量扩张全面转入存量更新阶段，老旧城区的微更新改造已成为城市高质量发展的关键。同时，国家“十四五”规划明确提出，城市建设需从“以物为本”向“以人民健康为中心”转型。</li>
                            <li><strong>业务痛点：</strong> 广州老城区受制于复杂的历史沿革，正面临基础设施老化、功能严重衰退、交通流线拥堵等严峻的健康与空间供给挑战。考虑到轨道交通承担了广州超 44% 的公交客流，而“步行”是旧城区居民接驳地铁的最核心方式，步行环境的恶化直接影响了城市运转效率。</li>
                            <li><strong>研究锚点：</strong> 引入“健康街道”前沿理念，锁定阻碍步行的三大核心障碍：交通噪音、空气污染和缺乏便利的步行环境。鉴于传统城市微更新调研高度依赖主观问卷，缺乏客观数据支撑，本项目亟需打破传统黑盒，引入多源客观数据，对核心地铁站周边 10 分钟步行辐射圈（约 500 米）的微空间进行精准的量化诊断。</li>
                        </ul>
                    </div>

                    {/* Task */}
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-serene-dark/10 shadow-sm transition-all hover:shadow-md hover:bg-white/80">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="bg-purple-100 text-purple-800 font-bold px-3 py-1 rounded-full text-sm tracking-wide shadow-sm">Task</span>
                            <h4 className="font-bold text-serene-dark text-lg">核心任务</h4>
                        </div>
                        <p className="text-serene-dark/80 leading-relaxed mb-4">
                            我的核心任务是从 0 到 1 搭建一套完整的<strong>“空间数据量化与评估管道（Data Pipeline）”</strong>。基于 GIS 分析城市用地性质、人口密度与路网密度，科学筛选出越秀区的三个核心地铁站（彩虹桥站、区庄站、杨箕站）作为标杆研究对象。打通从“大规模空间数据采样”到“深度学习街景像素级解析”，再到“数学模型客观赋权与路网测算”的全链路，最终精准诊断街道健康指数，并沉淀出可规模化复用的空间优化导则。
                        </p>

                        {/* 🖼️ 【图片插入位置 1：评价体系思维导图】 */}
                        <div className="my-6">
                            <img
                                src="/project/yuyifenge/评价体系.jpg"
                                alt="评价体系思维导图"
                                className="w-full rounded-xl shadow-md border border-gray-100 object-cover"
                            />
                        </div>
                    </div>

                    {/* Action */}
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-serene-dark/10 shadow-sm transition-all hover:shadow-md hover:bg-white/80">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="bg-amber-100 text-amber-800 font-bold px-3 py-1 rounded-full text-sm tracking-wide shadow-sm">Action</span>
                            <h4 className="font-bold text-serene-dark text-lg">数据挖掘技术落地与业务导则制定</h4>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h5 className="font-bold text-serene-dark/90 mb-2">基于 ArcGIS 的空间采样与大数据测算：</h5>
                                <ul className="list-disc pl-5 space-y-2 text-serene-dark/80 leading-relaxed mb-4">
                                    <li>运用百度地图坐标拾取系统精准获取视点经纬度，并导入 ArcGIS 进行空间数据可视化，科学划定 68 个街景采集点位（全面涵盖路段中点与关键交叉口）。</li>
                                    <li>深度利用获取的 POI 数据，在 ArcGIS 中执行核密度分析，科学划定并收敛调研对象范围。</li>
                                    <li>在 ArcGIS 中建立 1500m 空间缓冲区，创新性引入八象限划分与最短路径算法，精准计算出各站点的 PRD（步行绕路系数），为客观评价地铁空间易达性提供硬核数据支撑。</li>
                                </ul>
                                {/* 🖼️ 【图片插入位置 2：研究地点选择gis截图】 */}
                                <div className="mt-4 mb-6">
                                    <img
                                        src="/project/yuyifenge/位置选取.png"
                                        alt="研究地点选择gis截图"
                                        className="w-full rounded-xl shadow-md border border-gray-100 object-cover"
                                    />
                                </div>
                            </div>

                            <div>
                                <h5 className="font-bold text-serene-dark/90 mb-2">运用 Python 部署 MXnet 与 DeepLab V3 实施 AI 街景语义分割：</h5>
                                <ul className="list-disc pl-5 space-y-2 text-serene-dark/80 leading-relaxed mb-4">
                                    <li>独立使用 Anaconda 配置底层虚拟环境并成功部署 MXnet 深度学习框架，在 PyCharm 编译器中高效执行底层处理代码。</li>
                                    <li>成功调用基于 Cityscapes 数据集预训练的 DeepLab V3 顶尖语义分割模型，对批量获取的 68 张百度全景街景图像进行尺寸重构与像素级机器视觉识别。</li>
                                    <li>将包含 20 类关键街道要素（机动车道、人行道、建筑、植物等）的图像进行 0.8 透明度的色块叠加可视化；并独立编写函数，实现各要素像素点占比的自动提取与 CSV 结构化数据导出，成功实现了将非结构化图像转化为绿视率、天空开敞度等核心量化指标的“降维打击”。</li>
                                </ul>
                                {/* 🖼️ 【新增：视点选择图片】 */}
                                <div className="mt-4 mb-6">
                                    <img
                                        src="/project/yuyifenge/视点选取示意.png"
                                        alt="视点选择图片"
                                        className="w-full rounded-xl shadow-md border border-gray-100 object-cover"
                                    />
                                </div>

                                {/* 🖼️ 【图片插入位置 3：语义分析过程截图】 */}
                                <div className="mt-4 mb-6">
                                    <img
                                        src="/project/yuyifenge/分割截图.png"
                                        alt="语义分析过程截图"
                                        className="w-full rounded-xl shadow-md border border-gray-100 object-cover"
                                    />
                                </div>
                            </div>

                            <div>
                                <h5 className="font-bold text-serene-dark/90 mb-2">基于熵权法与 SPSS 的数据建模与相关性挖掘：</h5>
                                <ul className="list-disc pl-5 space-y-2 text-serene-dark/80 leading-relaxed mb-4">
                                    <li>构建严密的评估样本矩阵，引入“熵权法”对正逆向空间指标进行归一化和平移处理（+0.01 消除无效数据干扰）。通过计算信息熵冗余度，彻底摒弃传统的人工主观打分，精准推导出各项评价因子的绝对客观权重。</li>
                                    <li>熟练运用 SPSS 统计分析软件，将测算出的 PRD 组值与街区边长、交叉口密度等路网形态评价指标进行双变量相关性深度分析，成功探寻并证实了路网肌理背后的深层数理规律。</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Result */}
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-serene-dark/10 shadow-sm transition-all hover:shadow-md hover:bg-white/80">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded-full text-sm tracking-wide shadow-sm">Result</span>
                            <h4 className="font-bold text-serene-dark text-lg">数据驱动的业务价值与复盘迭代</h4>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h5 className="font-bold text-serene-dark/90 mb-2">完成数据模型验证与精准归因：</h5>
                                <p className="text-serene-dark/80 leading-relaxed mb-4">
                                    将计算得出的健康指数量化评分，与杨箕、区庄、彩虹桥站周边的实际建成环境进行交叉比对。高低分路段的实况与模型推演结果高度一致，成功验证了该量化评价体系的科学性与业务普适性。
                                </p>
                            </div>

                            <div>
                                <h5 className="font-bold text-serene-dark/90 mb-2">实现业务策略闭环与价值交付：</h5>
                                <p className="text-serene-dark/80 leading-relaxed mb-4">
                                    基于数据洞察产出的设计导则，有效填补了广州老城区健康街道量化更新的行业空白。方案不仅落地了物理层面的微更新策略，更将历史文化传承与社区活力激发深度融入空间设计，为老城区存量更新提供了一套具备极高商业价值的数据决策模型。
                                </p>
                                {/* 🖼️ 【图片插入位置 5：设计导则截图】 */}
                                <div className="mt-4 mb-6">
                                    <img
                                        src={encodeURI("/project/yuyifenge/设计导则.png")}
                                        alt="设计导则截图"
                                        className="w-full rounded-xl shadow-md border border-gray-100 object-cover"
                                    />
                                </div>
                            </div>

                            <div>
                                <h5 className="font-bold text-serene-dark/90 mb-2">PM 深度复盘与长效迭代规划：</h5>
                                <p className="text-serene-dark/80 leading-relaxed mb-4">
                                    在项目结项复盘中，敏锐指出当前定性与定量指标结合存在的时效局限性。前瞻性地规划了未来引入动态步行流量、实时空气质量指数等动态时序数据的迭代方向；同时明确了跨学科拉通（交通工程、公共卫生）以及建立长效追踪自动化评估机制的核心战略意义。
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 🖼️ 【新增：项目展板（脱离白色板块）】 */}
                    <div className="pt-8 mt-8 border-t border-serene-dark/5">
                        <h3 className="text-2xl font-bold text-serene-dark mb-6 text-center">项目展板</h3>
                        <img
                            src={encodeURI("/project/yuyifenge/项目展板.jpg")}
                            alt="项目展板截图"
                            className="w-full rounded-2xl shadow-sm border border-serene-dark/10 object-cover"
                        />
                    </div>
                </div>
            </div>
        ),
        tags: ["Computer Vision", "Urban Analysis"],
        coverImage:
            encodeURI("/project/yuyifenge/项目展板.jpg"),
        images: [
            encodeURI("/project/yuyifenge/项目展板.jpg"),
        ],
        year: "2024（2025年修改并收录于中国城市规划年会）",
        role: "Urban Design, Data Processing, Theoretical Research",
        role_zh: "城市设计, 数据处理, 理论调研",
        tools: ["Excel", "熵权法模型", "ArcGIS", "Python (PyCharm, Anaconda)", "MXnet", "DeepLab V3", "SPSS"],
        links: [
            {
                title: "Project Research Paper",
                title_zh: "项目研究论文",
                url: "/project/yuyifenge/06-论文：健康街道视角下步行街道质量评估与提升——以广州越秀区地铁站周围人居空间为例.pdf",
            },
        ],
    },
];
