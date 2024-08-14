import React, { useState, useEffect, useCallback } from "react";

export default function Intro() {
    const [selection, setSelection] = useState("");

    function programSelector() {
        let videoElement = document.getElementById("exampleVideo");
        if (videoElement !== null) {
            videoElement.pause();
            videoElement.removeAttribute("src");
            videoElement.load();
        }

        if (selection === "1") {
            return (
                <source src="Four in a Row Game Example.mp4" type="video/mp4" />
            )
        }
        else if (selection === "2"){
            return (
                <source src="Hangman Game Example.mp4" type="video/mp4" />
            )
        }
        else if (selection === "3") {
            return (
                <source src="Banking App Example.mp4" type="video/mp4" />
            )
        }
        else {
            return;
        }
    }

    const changeSelection = useCallback((select) => {
        setSelection(select.target.value);
    }, [setSelection]);

    return (
        <div className="container" id="main">
            <h1 id="title">Ryan Caldwell</h1>
            <h3>Select a program: </h3>
            <select className="form-select" size="3" onChange={changeSelection}>
                <option value="1">Assignment 2 - Four in a Row Game</option>
                <option value="2">Assignment 5 - Hangman Game</option>
                <option value="3">Assignment 6 & 7 - Banking App</option>
            </select>
            <div className="programExample">
                <video id="exampleVideo" width="300%" autoPlay muted loop >
                    {programSelector()}
                </video>
            </div>
        </div>
    );
}