import React from "react"

export default class Info extends React.Component () {

    state = { isActive: false };

    handleToggle = () => {
        this.setState({ isActive: !this.state.isActive });
    };

    function toggleInfo(e) {
        e.preventDefault();
        console.log('The link was clicked.');
      }

    render() {
        const isActive = this.state.isActive;
        return (
          <div className={isActive ? "app" : null}>
            <h1>Hello react</h1>
            <button onClick={this.handleToggle}>Toggle class</button>
          </div>
        );
    }
    return(
        <>
        <button className="info" onClick={this.toggleInfo}>About</button>
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