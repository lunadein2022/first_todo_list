import { useState, useRef, useEffect } from "react";
import React from "react";

function WorkInput(props) {

    const [content, setContent] = useState('');
    const ref = useRef();

    const handleChange = (e) => {
        setContent(e.target.value)
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSubmit();
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!content) return;
        props.onSubmit(content);
        setContent("");
    }

    useEffect(() => {
        ref.current.focus();
    }, []);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={ref} type="text" name="text" placeholder="Hey~" value={content} onChange={handleChange} />
                <button className="add" type="submit" onClick={handleSubmit} onKeyPress={handleKeyPress}>
                    +
                </button>
            </form>
        </div>
    )
}

export default WorkInput;
