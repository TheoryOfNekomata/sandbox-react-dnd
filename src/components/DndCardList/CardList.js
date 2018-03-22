import React, { Component, } from 'react'

class CardList extends Component {
    render() {
        const { children } = this.props

        return (
            <div>
                {
                    children.map((child, i) => (
                        <div
                            className="my-3"
                            key={ i }
                        >
                            { child }
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default CardList
