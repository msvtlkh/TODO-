const toDo = []

const statusList = {
    toDo: 'To do:',
    inProgress: 'In progress:',
    done: 'Done:'
}

const priorityList = {
    low: 'low',
    high: 'high'
}

const errorList = {
    undefined: 'Not found',
    dataTypeIncorrect: 'Incorrect data type'
}

function addTask(task) {
    if (typeof task === 'string') {
        toDo.push({
            taskName: task,
        })
    } else {
        console.log(errorList.dataTypeIncorrect)
    }
}

function addOrChangeStatusAndPriority(task, newStatus, newPriority) {
    const currentTask = toDo.find(currentTask => currentTask.taskName === task)

    if (typeof currentTask === 'undefined') {
        console.log(errorList.undefined)
    } else {
        currentTask['status'] = newStatus
        currentTask['priority'] = newPriority
    }
}

function deleteTask(currentTask) {
    const currentTaskIndex = toDo.findIndex(task => task.taskName === currentTask)
    
    if (currentTaskIndex === -1) {
        console.log(errorList.undefined)
    } else {
        toDo.splice(currentTaskIndex,1)
    }
}

function showTask(status) {
    let isExist = false
    let currentTask = toDo.filter(task => task.status === status)

    console.log(status)

    for(let task of currentTask) {
        let {taskName, priority} = task

        console.log(` "${taskName}" - ${priority}`)
        isExist = true
    }

    if (!isExist) console.log(' - ');
}

function showList() {
    showTask(statusList.toDo)
    console.log('')
    showTask(statusList.inProgress)
    console.log('')
    showTask(statusList.done)
}


addTask('do homework')
addTask('play games')
addTask('read a book')
addTask('watch films')
addTask('watch youtube')

addOrChangeStatusAndPriority('do homework', statusList.toDo, priorityList.high)
addOrChangeStatusAndPriority('play games', statusList.inProgress, priorityList.low)
addOrChangeStatusAndPriority('read a book', statusList.done, priorityList.high)
addOrChangeStatusAndPriority('watch youtube', statusList.toDo, priorityList.high)

deleteTask('watch films')
//deleteTask('play games')

showList()



//functions
// function addOrChangeStatus(task, newStatus) {
//     const currentTask = toDo.find(currentTask => currentTask.taskName === task)

//     if (typeof currentTask === 'undefined') {
//         console.log(errorList.undefined)
//     } else {
//         currentTask['status'] = newStatus
//     }
// }

// function addOrChangePriority(task, priority) {
//     const currentTask = toDo.find(currentTask => currentTask.taskName === task)

//     if (typeof currentTask === 'undefined') {
//         console.log(errorList.undefined)
//     } else {
//         currentTask['priority'] = priority
//     }
// }


