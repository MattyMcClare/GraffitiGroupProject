import React, { Component } from 'react';

class Filter extends Component {
    render() {
        return (
            <form>
                <label for="date">Date: </label>
                <select id="date" defaultValue="default">
                    <option value="defalut">All</option>
                    <option value="yesterday">Yesterday</option>
                    <option value="last-week">Last Week</option>
                    <option value="last-month">Last Month</option>
                </select>
                <label for="style">Style: </label>
                <select id="style" defaultValue="default">
                    <option value="defalut">All</option>
                    <option value="slap">Slap</option>
                    <option value="pice">Pice</option>
                    <option value="heaven">Heaven</option>
                    <option value="stencil">Stencil</option>
                </select>
                <label>
                    Location:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default Filter;