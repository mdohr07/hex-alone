import { useRef } from "react";

interface SidebarProps {
    onLoadMap: (file: File) => void; /* -> handleLoadMap */
    onToggleTokenMenu: () => void /* setTokenMenuOpen */
    onSaveGame?: () => void; /* -> handleSaveGame */
    onLoadGame: () => void; /* -> handleLoadGame */
}

export function Sidebar({
    onLoadMap,
    onSaveGame,
    onLoadGame,
    onToggleTokenMenu,
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

            <button onClick={onToggleTokenMenu}>Tokens</button>
            <div className="sidebar-spacer" />
            <button onClick={onSaveGame} className="specialButton">Save</button>
            <button onClick={onLoadGame} className="specialButton">Load</button>
        </aside>
    );
}