# 网站内容修改指南 / Content Editing Guide

恭喜你的网站上线！以下是修改网站各部分文字和内容的详细指南。

## 1. 修改作品集 (Projects)
所有作品的详情数据都存储在一个独立的文件中，修改这里会自动更新主页的卡片和详情页。

*   **文件位置**: `app/data/projects.ts`
*   **如何修改**:
    *   找到 `projects` 数组。
    *   修改 `title` (标题), `summary` (简介), `fullDescription` (详情页长文)。
    *   修改 `coverImage` (封面图链接) 和 `images` (详情页图集)。
    *   **添加新作品**: 复制其中一个 `{...}` 对象，粘贴到数组末尾，并确保 `id` 和 `slug` (网址路径) 是唯一的。

```typescript
// 示例
{
  id: "4",
  slug: "new-project", // 访问路径将是 /projects/new-project
  title: "新的作品标题",
  ...
}
```

## 2. 修改主页文字 (Home Page)
主页的个人介绍、经历和技能部分在 `page.tsx` 中。

*   **文件位置**: `app/page.tsx`
*   **如何修改**:
    *   **大标题/Slogan**: 搜索 "LANDSCAPE TO AI PRODUCT" 或 "Bridging the tranquility..."。
    *   **关于我 (About)**: 搜索 "Education", "Role", "Reach" 等关键词。
    *   **经历 (Experience)**: 搜索 "Professional Journey", "Kujiale", "Jun 2023 - Sep 2023" 等。
    *   **技能 (Skills)**: 搜索 "Detailed Capabilities" 或具体的技能名称如 "PS", "SQL"。
    *   **滚动条文字**: 搜索 "GPA 3.72/4.00" 或 "NATIONAL SCHOLARSHIP RECIPIENT"。

## 3. 修改联系方式与页脚 (Footer)
页脚的邮箱、社交媒体链接在单独的组件中。

*   **文件位置**: `app/components/Footer.tsx`
*   **如何修改**:
    *   搜索你的邮箱地址 `xinran.zhong@pku.edu.cn` 进行修改。
    *   修改 "WeChat", "Bilibili" 等文字或对应的 `href="#"` 链接。

## 4. 修改 SEO 信息 (Metadata)
网站在浏览器标签页显示的标题和分享时的描述。

*   **文件位置**: `app/layout.tsx`
*   **如何修改**:
    *   找到 `export const metadata` 对象。
    *   修改 `title` 和 `description`。

---

### 保存与发布
1.  **本地预览**: 修改保存后，本地运行的 `npm run dev` 浏览器窗口会自动刷新显示最新内容。
2.  **更新上线**:
    *   在终端运行:
        ```bash
        git add .
        git commit -m "Update content"
        git push
        ```
    *   推送成功后，Vercel 会自动检测到变化并重新部署（通常只需 1-2 分钟，无需额外操作）。
