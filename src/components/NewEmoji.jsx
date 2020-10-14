import React from "react";
import EmoBox from "./EmojiBox";

function newEmoji(emoji) {
    return (
        <EmoBox
            emoji={emoji.emoji}
            name={emoji.name}
            description={emoji.meaning}
        />
    );
};

export default newEmoji;