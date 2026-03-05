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
                        <div className="flex flex-col justify-center h-full">
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
                        <div className="flex flex-col justify-center h-full">
                            <div>
                                <h3 className="text-2xl font-bold text-serene-dark mb-2">AI 生成质量验收与体验优化</h3>
                                <p className="text-base text-serene-dark/70 font-medium mb-6">从海量杂乱的测试现象中提炼共性问题，把控 AI 最终交付质量。</p>
                                <ul className="list-disc pl-5 space-y-3 text-serene-dark/80">
                                    <li><strong>边界压力测试：</strong>执行 300+ 复杂户型、10+ 核心风格交叉验证。</li>
                                    <li><strong>提炼共性规则：</strong>精确定位光影过曝、模型穿模等 AI 生成盲区。</li>
                                    <li><strong>驱动产研迭代：</strong>输出 20+ 项高优产品优化提案，保障大客户（欧派）商业化落地。</li>
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
                        <h3 className="text-2xl font-bold text-serene-dark mb-2">AI 业务知识库与规则引擎搭建</h3>
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
                        <img src="/project/kujiale/placeholder_diagram.png" alt="流程图占位" className="w-full h-auto rounded-xl shadow-sm border border-serene-dark/10 object-cover" />
                    </div>

                    <div className="max-w-4xl mx-auto flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-serene-dark mb-4 text-center">核心策略：基于“核心 SKU 锚点”的场景组合资产繁衍</h3>
                        <ul className="list-disc pl-5 space-y-3 text-serene-dark/80">
                            <li><strong>确立商业锚点：</strong>深入理解 B 端业务诉求，以欧派强推的真实售卖商品（特定沙发、餐桌、床架、书桌）作为场景生成的绝对核心（Anchor SKU）。</li>
                            <li><strong>引入风格变量引擎：</strong>将抽象的“风格”拆解为可配置的辅件变量（如现代简约的几何地毯、意式轻奢的金属灯具等）。</li>
                            <li><strong>数据资产规模化繁衍：</strong>通过 核心锚点 × 风格变量 的矩阵式配置公式，成功将单一商品繁衍为 100+ 套即插即用的 AI 组合库。确保 AI 在自动布局时，既能保证空间美学，又能精准拉动客户指定商品的曝光与落地。</li>
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
        title_zh: "AI 街景分析",
        summary:
            "Computer Vision applications for analyzing urban street quality and walkability.",
        summary_zh: "计算机视觉在分析城市街道质量和步行友好度中的应用。",
        fullDescription: (
            <div className="space-y-8 mt-2">
                <p className="text-lg text-serene-dark/90 font-medium leading-relaxed">
                    This project applies Computer Vision techniques to analyze urban street quality and walkability. By processing thousands of street-view images, we assess factors like greenery, pavement quality, and building aesthetics. The goal is to provide data-driven recommendations for improving urban walkability and livability.
                </p>

                <div className="grid gap-6">
                    {/* Situation */}
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-serene-dark/10 shadow-sm transition-all hover:shadow-md hover:bg-white/80">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="bg-blue-100 text-blue-800 font-bold px-3 py-1 rounded-full text-sm tracking-wide shadow-sm">Situation</span>
                            <h4 className="font-bold text-serene-dark text-lg">Context & Background</h4>
                        </div>
                        <ul className="list-disc pl-5 space-y-2 text-serene-dark/80 leading-relaxed">
                            <li><strong>Background:</strong> [Insert background context here]</li>
                        </ul>
                    </div>

                    {/* Task */}
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-serene-dark/10 shadow-sm transition-all hover:shadow-md hover:bg-white/80">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="bg-purple-100 text-purple-800 font-bold px-3 py-1 rounded-full text-sm tracking-wide shadow-sm">Task</span>
                            <h4 className="font-bold text-serene-dark text-lg">Objectives</h4>
                        </div>
                        <ul className="list-disc pl-5 space-y-2 text-serene-dark/80 leading-relaxed">
                            <li><strong>Objectives:</strong> [Insert key objectives here]</li>
                        </ul>
                    </div>

                    {/* Action */}
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-serene-dark/10 shadow-sm transition-all hover:shadow-md hover:bg-white/80">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="bg-amber-100 text-amber-800 font-bold px-3 py-1 rounded-full text-sm tracking-wide shadow-sm">Action</span>
                            <h4 className="font-bold text-serene-dark text-lg">Strategy & Execution</h4>
                        </div>
                        <ul className="list-disc pl-5 space-y-3 text-serene-dark/80 leading-relaxed">
                            <li><strong>Execution:</strong> [Insert action and execution details here]</li>
                        </ul>
                    </div>

                    {/* Result */}
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-serene-dark/10 shadow-sm transition-all hover:shadow-md hover:bg-white/80">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded-full text-sm tracking-wide shadow-sm">Result</span>
                            <h4 className="font-bold text-serene-dark text-lg">Outcomes</h4>
                        </div>
                        <ul className="list-disc pl-5 space-y-2 text-serene-dark/80 leading-relaxed">
                            <li><strong>Outcomes:</strong> [Insert outcomes here]</li>
                        </ul>
                    </div>
                </div>
            </div>
        ),
        fullDescription_zh: (
            <div className="space-y-8 mt-2">
                <p className="text-lg text-serene-dark/90 font-medium leading-relaxed">
                    本项目应用计算机视觉技术来分析城市街道质量和步行友好度。通过处理成千上万的街景图像，我们评估绿化、路面质量和建筑美学等因素。目标是为改善城市步行友好度和宜居性提供数据驱动的建议。
                </p>

                <div className="grid gap-6">
                    {/* Situation */}
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-serene-dark/10 shadow-sm transition-all hover:shadow-md hover:bg-white/80">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="bg-blue-100 text-blue-800 font-bold px-3 py-1 rounded-full text-sm tracking-wide shadow-sm">Situation</span>
                            <h4 className="font-bold text-serene-dark text-lg">情境与背景</h4>
                        </div>
                        <ul className="list-disc pl-5 space-y-2 text-serene-dark/80 leading-relaxed">
                            <li><strong>背景：</strong> [在此处插入背景内容]</li>
                        </ul>
                    </div>

                    {/* Task */}
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-serene-dark/10 shadow-sm transition-all hover:shadow-md hover:bg-white/80">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="bg-purple-100 text-purple-800 font-bold px-3 py-1 rounded-full text-sm tracking-wide shadow-sm">Task</span>
                            <h4 className="font-bold text-serene-dark text-lg">任务与目标</h4>
                        </div>
                        <ul className="list-disc pl-5 space-y-2 text-serene-dark/80 leading-relaxed">
                            <li><strong>目标：</strong> [在此处插入任务目标内容]</li>
                        </ul>
                    </div>

                    {/* Action */}
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-serene-dark/10 shadow-sm transition-all hover:shadow-md hover:bg-white/80">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="bg-amber-100 text-amber-800 font-bold px-3 py-1 rounded-full text-sm tracking-wide shadow-sm">Action</span>
                            <h4 className="font-bold text-serene-dark text-lg">行动与执行</h4>
                        </div>
                        <ul className="list-disc pl-5 space-y-3 text-serene-dark/80 leading-relaxed">
                            <li><strong>执行：</strong> [在此处插入行动与执行内容]</li>
                        </ul>
                    </div>

                    {/* Result */}
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-serene-dark/10 shadow-sm transition-all hover:shadow-md hover:bg-white/80">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded-full text-sm tracking-wide shadow-sm">Result</span>
                            <h4 className="font-bold text-serene-dark text-lg">结果与成效</h4>
                        </div>
                        <ul className="list-disc pl-5 space-y-2 text-serene-dark/80 leading-relaxed">
                            <li><strong>成效：</strong> [在此处插入结果与成效内容]</li>
                        </ul>
                    </div>
                </div>
            </div>
        ),
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
