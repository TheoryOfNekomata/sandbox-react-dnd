import CardList from './CardList'
import { DragDropContext, } from "react-dnd"
import DndBackend from "react-dnd-multi-backend"
import DndTouchBackend from "react-dnd-multi-backend/lib/HTML5toTouch"

const DndCardList = DragDropContext(DndBackend(DndTouchBackend))(CardList)

export default DndCardList

