import { useState } from "react";


export default function ToDoTable() {
    let TASKS = [
        {
          dueDate: "2024-03-30",
          completed: false,
          name: "Finish project proposal",
        },
        {
          dueDate: "2024-03-27",
          completed: false,
          name: "Meet with mentor",
        },
        {
          dueDate: "2024-03-28",
          completed: true,
          name: "Review study notes",
        },
        {
          dueDate: "2024-03-29",
          completed: false,
          name: "Practice coding exercises",
        },
        {
          dueDate: "2024-04-01",
          completed: false,
          name: "Plan weekend trip",
        },
        {
          dueDate: "2024-03-26",
          completed: true,
          name: "Attend yoga class",
        },
        {
          dueDate: "2024-03-31",
          completed: false,
          name: "Update resume",
        },
        {
          dueDate: "2024-04-02",
          completed: false,
          name: "Research career options",
        },
        {
          dueDate: "2024-04-03",
          completed: true,
          name: "Start reading new book",
        },
        {
          dueDate: "2024-04-04",
          completed: true,
          name: "Schedule dentist appointment",
        },
      ];

      
      const [searchText, setSearchText] = useState('')

      
      if (searchText) {
        TASKS = TASKS.filter((task) => {
           return task.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
      });
    }

      const [showCompleted, setShowCompleted] = useState(true)


      const tasksMap = TASKS.map(
        (task) =>
          task.completed ? (
            <tr key={task.name} >
              <td style={{ "textDecoration": "line-through"}}>
                {task.name}
              </td>
              <td>{task.dueDate}</td>
            </tr>
          ): (<tr key={task.name}>
          <td>
            {task.name}
          </td>
          <td>{task.dueDate}</td>
        </tr>)
    
      );


      const tasksMapCompleted = TASKS.map(
        (task) =>
          !task.completed && (
            <tr key={task.name} >
              <td >
                {task.name}
              </td>
              <td>{task.dueDate}</td>
            </tr>
          )
    
      );


    

    return (
    <>
      <div>
        <input type="text" placeholder="Search..." onChange={(e)=>setSearchText(e.target.value.trim())} />
        <label>
          <input type="checkbox" onClick={()=>setShowCompleted(!showCompleted)} />
          Show completed tasks
        </label>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Due Date</th>
          </tr>
        </thead>
        <tbody>
         {showCompleted ? tasksMapCompleted: tasksMap}
        </tbody>
      </table>
    </>
  );
}