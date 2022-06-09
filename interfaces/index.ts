export type Member = {
    name: string;
    description: string;
    links: [{ github: string }?, { twitter?: string }?];
};

export type Project = {
    name: string;
    shortName?: string;
    image: string;
    description: string;
    links: {
        website?: string;
        github?: string;
        telegram?: string;
        discord?: string;
    };
};

export type NavLink = {
    label: string;
    link: string;
    src?: string;
    msg?: string;
};
