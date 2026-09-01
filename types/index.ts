export interface MapData {
    id: string;
    name: string;
    imageUrl: string;
    tokens: Token | undefined;
}

export interface Token {
    id: string;
    mapId: string;
    label: string;
    color: string;
    position: { x: number; y: number; };
    placed: boolean;
}