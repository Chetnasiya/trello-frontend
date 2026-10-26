import { useDrop } from 'react-dnd'
import type { ReactNode } from 'react'
import type { CardProps } from './Card'

interface BoardsSectionProps {
    onDrop: (item: CardProps) => void
    children: ReactNode
}

export function BoardsSection({ onDrop, children }: BoardsSectionProps) {
    const [, drop] = useDrop<CardProps, void>(() => ({
        accept: "card",
        drop: onDrop,
    }), [onDrop])

    return <div ref={(element) => { drop(element) }} style={{ flex: 1, borderRight: "1px dotted black", minHeight: "80vh", }}>
        {children}
    </div>  
}