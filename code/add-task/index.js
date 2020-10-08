module.exports = async function (context, req) {
    context.log('Adding a task to the planner');

    if(req.method=="GET"){
        context.res={
            status:200,
            body:listOfTasks
        }

    } else if(req.method=="POST"){
        const task = req.body;
        listOfTasks.push(task)
        context.res = {
            status:201
        }

    }

    
};

var listOfTasks = [
    {
        id : 123,
        text:"Realizar backlog",
        status:"Ready",
        dueDate: new Date(),
        responsible:'orlandoagk'
    }
];