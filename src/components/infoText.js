import React from "react"

export default class Info extends React.Component {
    state = { isActive: false };

    toggleInfoClass = () => {
        this.setState({ isActive: !this.state.isActive });
    };


    render() {  
        const isActive = this.state.isActive;
        return (
        <>
        
        <button className="infoBtn" onClick={this.toggleInfoClass}>About</button>
        <div className={`info-text ${isActive ? "show" : null}`}>
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
}