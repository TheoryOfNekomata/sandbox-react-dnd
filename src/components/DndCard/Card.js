import React, { Component, } from "react"
import autoBind from 'react-autobind'
import './Card.css'

class Card extends Component {
    constructor() {
        super()
        autoBind(this)
    }

    render() {
        const {
            children,
            connectDragSource,
            bg,
            isDragging,
            index,
            ...props,
        } = this.props
        return connectDragSource(
            <div
                style={ { opacity: isDragging ? 0.5 : null, } }
                className="card"
                { ...props }
            >
                <div className="bg">{ bg }</div>
                {children}
            </div>
        )
    }
}

export default Card
