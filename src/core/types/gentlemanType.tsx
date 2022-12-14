export type gentlemanType = {
    id: number;
    name: string;
    status: string;
    profession: string;
    twitter: string;
    picture: string;
    alternativeText: string;
    selected: boolean;
};

export type gentlemansType = Array<gentlemanType>;
