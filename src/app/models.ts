export interface Todo {
    title: string
    name: string
    tasks: Task[]
}

export interface Task {
    description: string
    priority: string
    date: string
}