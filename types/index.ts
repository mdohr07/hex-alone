export interface MapData {
    id: string;
    name: string;
    imageUrl: string;
}

export interface Token {
    id: string;
    mapId: string;
    label: string;
    color: string;
    position: { x: number; y: number; }
}