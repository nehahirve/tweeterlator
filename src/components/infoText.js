import React from "react"

export default function Info () {
    function toggleInfo(e) {
        e.preventDefault();
        console.log('The link was clicked.');
      }
    return(
        <>
        <button className="info" onClick={toggleInfo}>About</button>
        <div className="info-text">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, culpa
                eaque porro rerum voluptate, obcaecati sapiente cumque saepe sit
                ratione architecto, enim ad repellat dolor quos quisquam quae
                distinctio dolores!
                <br />
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, culpa
                eaque porro rerum voluptate, obcaecati sapiente cumque saepe sit
                ratione architecto, enim ad repellat dolor quos quisquam quae
                distinctio dolores!
            </p>
        </div>
        </>
    )
}