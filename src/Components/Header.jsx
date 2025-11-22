export function Header(props) {
    const { todos } = props
    const todosLength = todos.length

    const isTasksPlural = todos.length != 1

    const taskorTasks = isTasksPlural ? 'tasks' : 'task';
    return (
        <header style={{textAlign:"center", display:'flex', alignItems:'center', justifyContent:'center'}}>
            <h1 className="text-gradient">You Have {todosLength} open { taskorTasks }.</h1>
        </header>
    )
}