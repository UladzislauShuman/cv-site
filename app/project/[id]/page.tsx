import { RESUME_DATA } from "@/data/resume";
import { ProjectDetails } from "@/components/ProjectDetails";

export function generateStaticParams() {
    return RESUME_DATA.en.experience.map((project) => ({
        id: project.id,
    }));
}

export default function ProjectPage() {
    return <ProjectDetails />;
}