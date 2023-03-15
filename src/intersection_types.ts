type Draggable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
}

// takes two types
type UIWidget = Draggable & Resizable;

let textBox: UIWidget ={
    drag: () => {},
    resize: () => {}
}