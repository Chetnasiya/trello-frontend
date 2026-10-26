import { useDrag } from 'react-dnd'

export interface CardProps {
    title: string
    description: string
    id: string
}

export function Card({ title, description, id }: CardProps) {
    const [{opacity}, dragRef] = useDrag(
        () => ({
            type: "card",
            item: { title, description, id },
            collect: (monitor) => ({
                opacity: monitor.isDragging() ? 0.5 : 1
            })
        }),
        [title, description, id]
    )
    return <div ref={(element) => { dragRef(element) }} style={{opacity, border: "1px solid #b2bec3", borderRadius: 10, padding: 20, margin: 20, cursor: "pointer"}}>
        <div style={{margin: 10}}>
            {title}
        </div>
        <div style={{height: 1, width: "100%", background: "black"}}></div>
        <div style={{margin: 10}}>
            {description}
        </div>
    </div>
}