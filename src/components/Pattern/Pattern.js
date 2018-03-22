import React, { Component, } from 'react'
import autoBind from 'react-autobind'
import 'seedrandom'
import tinycolor from 'tinycolor2'
import './Pattern.css'

const SQUARE_COUNT = 6

function random({ min = 0, max, step = 1, }) {
    let r = Math.floor(Math.random() * (max - min)) + min

    while (r % step !== 0) {
        r += 1
    }

    return r
}

class CardPattern extends Component {
    constructor({ seed, }) {
        super()
        autoBind(this)
        this.generatePattern(seed)
    }

    componentWillReceiveProps({ seed, }) {
        this.generatePattern(seed)
    }

    generatePattern(seed) {
        let squares = []
        Math.seedrandom(seed)
        for (let i = 1; i <= SQUARE_COUNT; i += 1) {
            let rotation = random({ max: 4, }) * 90
            let x
            let y
            let size

            x = random({
                min: -20,
                max: 60,
                step: 10,
            })
            y = random({
                min: 20,
                max: 80,
                step: 10,
            })
            size = random({ min: 20, max: 40, step: 10, })

            squares.push({
                rotation,
                size,
                x,
                y,
            })
        }

        this.squares = squares
    }

    hasOccupied(squares, { x: x2, y: y2, size: size2, }) {
        return squares
            .reduce((hasOccupied, { x, y, size, }) => {
                let isOccupied = (
                    (
                        x <= x2 && x2 <= x + size &&
                        y <= y2 && y2 <= y + size
                    ) || (
                        x <= x2 + size2 && x2 + size2 <= x + size &&
                        y <= y2 + size2 && y2 + size2 <= y + size
                    )
                )

                return hasOccupied || isOccupied
            }, false)
    }

    render() {
        let { color = '#4e4e4e', } = this.props

        color = tinycolor(color).setAlpha(0.05).toString()

        return (
            <div className="pattern">
                {
                    this.squares.map(({
                        rotation,
                        size,
                        x,
                        y,
                    }, i) => (
                        <div
                            key={ i }
                            className="square"
                            style={ {
                                transform: `rotate(${rotation}deg)`,
                                width: `${size}%`,
                                height: `${size}%`,
                                top: `${y}%`,
                                left: `${x}%`,
                                backgroundImage:
                                    `linear-gradient(to bottom right, transparent, ${color})`,
                            } }
                        />
                    ))
                }
            </div>
        )
    }
}

export default CardPattern
