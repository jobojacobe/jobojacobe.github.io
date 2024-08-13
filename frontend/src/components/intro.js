import React, { useState, useEffect } from "react";

export default function Intro() {


    return (
        <div className="container" id="main">
            <select className="form-select" multiple>
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>
    );
}