import { useRef } from "react";

interface SidebarProps {
    onLoadMap: (file: File) => void; /* -> handleLoadMap */
    onAddToken?: () => void;
    onSaveGame?: () => void; /* -> handleSaveGame */
    onLoadGame: () => void; /* -> handleLoadGame */
}

export function Sidebar({
    onLoadMap,
    onAddToken,
    onSaveGame,
    onLoadGame
}: SidebarProps) {

    const fileInputRef = useRef<HTMLInputElement>(null);

    function handleLoadMap() {
        fileInputRef.current?.click();
    }

    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (file) {
            onLoadMap(file); // gives file to Layout
        }
    }

    return (
        <aside className="sidebar">
            <section className="logo"></section>

            <button onClick={handleLoadMap}>Load map</button>
            <input 
                type="file" 
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{display: 'none' }}
            />

            <button onClick={onAddToken}>Add Token</button>
            <div className="sidebar-spacer" />
            <button onClick={onSaveGame}>Save</button>
            <button onClick={onLoadGame}>Load</button>
        </aside>
    );
}