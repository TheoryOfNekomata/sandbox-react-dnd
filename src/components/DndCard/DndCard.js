import ReactDOM from 'react-dom'
import { DragSource, DropTarget, } from 'react-dnd'
import Card from './Card'

const DND_TYPE = "CARD"

const CARD_SOURCE = {
    beginDrag: ({ id, index, }) => ({ id, index, })
}

const CARD_TARGET = {
    hover({ index, onArrange, }, monitor, component) {
        const dragIndex = monitor.getItem().index

        if (dragIndex === index) {
            return
        }

        const hoverBoundingRect = ReactDOM.findDOMNode(component).getBoundingClientRect()
        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
        const clientOffset = monitor.getClientOffset()
        const hoverClientY = clientOffset.y - hoverBoundingRect.top
        if (dragIndex < index && hoverClientY < hoverMiddleY) {
            return
        }

        if (dragIndex > index && hoverClientY > hoverMiddleY) {
            return
        }

        if (onArrange) {
            onArrange({ oldIndex: dragIndex, newIndex: index })
        }

        monitor.getItem().index = index
    }
}

const DND_SOURCE_COLLECT = (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
})

const DND_TARGET_COLLECT = connect => ({
    connectDropTarget: connect.dropTarget()
})

const DragSourceCard = DragSource(DND_TYPE, CARD_SOURCE, DND_SOURCE_COLLECT)(
    Card
)

const DndCard = DropTarget(DND_TYPE, CARD_TARGET, DND_TARGET_COLLECT)(
    DragSourceCard
)

export default DndCard
