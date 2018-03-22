import React, { Component, } from "react"
import autoBind from 'react-autobind'
import DndCardList from './components/DndCardList'
import DndCard from './components/DndCard'
import Pattern from './components/Pattern'

class App extends Component {
    constructor({ data, }) {
        super()
        this.state = {
            data,
        }
        autoBind(this)
    }

    componentWillReceiveProps({ data, }) {
        this.setState({ data, })
    }

    handleArrange(e) {
        console.log(e)
    }

    render() {
        const { data } = this.state

        return (
            <div className="container">
                <div className="my-5">
                    <h1>React Drag-and-drop Demo</h1>
                </div>
                <DndCardList>
                    {
                        data.map(({ id, name }, index) => (
                            <DndCard
                                key={id}
                                index={ index }
                                onArrange={ this.handleArrange }
                                bg={ <Pattern seed={ id } /> }
                            >
                                <div className="card-body">
                                    {name}
                                </div>
                            </DndCard>
                        ))
                    }
                </DndCardList>
            </div>
        )
    }
}

export default App
