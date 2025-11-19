// Data structure for looping over to populate ProjectCards.

export type Project = {
    id: string;
    title: string;
    repoUrl: string;
    demoUrl?: string;
    shortDescription: string;
    tech: string[];
};

export const projects: Project[] = [
    {
        id: "meal-sync",
        title: "Meal Sync",
        repoUrl: "https://github.com/willfritzlliw/meal-sync",
        shortDescription: "Application for synchronizing and rating meal options with users health goals.",
        tech: ["Python", "LangChain","FastAPI"],
    },
    {
        id: "PythonHandyDataStructs",
        title: "Handy Python Data",
        repoUrl: "https://github.com/willfritzlliw/PythonHandyDataStructs",
        shortDescription: "A collection of handy data utilities and datasets to speed up development and testing.",
        tech: ["Python"],
    },
    {
        id: "postgen",
        title: "postGen",
        repoUrl: "https://github.com/willfritzlliw/postGen",
        shortDescription: "Tooling to programmatically generate posts/content for demos or seed data.",
        tech: ["Python", "Pillow" , "Schedule"],
    },
    {
        id: "vidgen",
        title: "vidGen",
        repoUrl: "https://github.com/willfritzlliw/vidGen",
        shortDescription: "Utilities and scripts for generating or processing video assets.",
        tech: ["Python", "MoviePy" , "FFmpeg"],
    },
    {
        id: "names-app",
        title: "Names App",
        repoUrl: "https://github.com/willfritzlliw/names-app",
        shortDescription: "Interactive app for generating and exploring name ideas.",
        tech: ["React", "Node.js"],
    },
];

export default projects;