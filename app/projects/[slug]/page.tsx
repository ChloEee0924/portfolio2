import { projects } from "../../data/projects";
import ProjectDetails from "../../components/ProjectDetails";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// Generate static params for all project routes
export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    return (
        <>
            <Navbar />
            <ProjectDetails slug={slug} />
            <Footer />
        </>
    );
}
