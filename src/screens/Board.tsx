import { useState } from "react";
import { Appbar } from "../components/Appbar";
import { BoardsSection } from "../components/BoardsSection";
import { Card, type CardProps } from "../components/Card";

export function Board() {
    const [pendingTasks, setPendingTasks] = useState<CardProps[]>([]);
    const [onGoingTasks, setOngoingTasks] =  useState<CardProps[]>([{id: "1", title: "Node to bun migration", description: "Move website from node.js to bun. WE've beemn trying this dfor a while but not workign out.."}])
    const [doneTasks, setDoneTasks] = useState<CardProps[]>([{id: "2", title: "Node to bun migration", description: "Move website from node.js to bun. WE've beemn trying this dfor a while but not workign out.."}, {id: "3", title: "Node to bun migration", description: "Move website from node.js to bun. WE've beemn trying this dfor a while but not workign out.."}])

    return <div>
        <Appbar />    
        <div style={{display: "flex", padding: 30}}>
            <BoardsSection onDrop={(item) => {
                console.log(item);
                setPendingTasks(p => p.filter(x => x.id != item.id))
                setOngoingTasks(p => p.filter(x => x.id != item.id))
                setDoneTasks(p => p.filter(x => x.id != item.id))
                setPendingTasks(p => [...p, item])
            }}>
                {pendingTasks.map(task => <Card 
                    id={task.id}
                    title={task.title} 
                    description={task.description} 
                />)}
            </BoardsSection>
            <BoardsSection onDrop={(item) => {
                console.log(item);
                setPendingTasks(p => p.filter(x => x.id != item.id))
                setOngoingTasks(p => p.filter(x => x.id != item.id))
                setDoneTasks(p => p.filter(x => x.id != item.id))
                setOngoingTasks(p => [...p, item])
            }}>
                {onGoingTasks.map(task => <Card 
                        title={task.title} 
                        id={task.id}
                        description={task.description} 
                />)}
            </BoardsSection>
            <BoardsSection onDrop={(item) => {
                console.log(item);
                setPendingTasks(p => p.filter(x => x.id != item.id))
                setOngoingTasks(p => p.filter(x => x.id != item.id))
                setDoneTasks(p => p.filter(x => x.id != item.id))
                setDoneTasks(p => [...p, item])
            }}>
                {doneTasks.map(task => <Card 
                    title={task.title} 
                    id={task.id}
                    description={task.description} 
                />)}
            </BoardsSection>
        </div>
    </div>
}