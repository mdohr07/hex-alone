import type { Token } from "../types";

interface TokenMenuProps {
        onAddToken?: () => void;
        tokens: Token[];
}

export function TokenMenu({
        onAddToken,
        tokens
}: TokenMenuProps) {
    const unplacedTokens = tokens.filter(tkn => !tkn.placed);

    return (
        <div className="tokenMenu">
            <button onClick={onAddToken} className="addToken">+</button>
            {unplacedTokens.map(token => (
                <div
                    key={token.id}
                    draggable
                    onDragStart={(e) => e.dataTransfer.setData('tokenId', token.id)}
                    style={{ backgroundColor: token.color, width: 24, height: 24, borderRadius: '50%' }}
                    />
            ))}
        </div>
    )
}