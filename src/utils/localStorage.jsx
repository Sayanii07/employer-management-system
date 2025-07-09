localStorage.clear()
/*Admin data*/
const admin =[ {
      "id": 1,
      "email": "admin@example.com",
      "firstName": "sayani",
      "password": "123"
  }
]

/*employee data and Task info*/
const employees = [
  {
    "id": 1,
    "firstName": "Amit",
    "email": "e@e.com",
    "password": "123",
    "tasks": [
      {
        "title": "Complete report",
        "description": "Finish the quarterly report and submit to the manager.",
        "date": "2024-10-22",
        "category": "Reports",
        "active": true,
        "newtask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Team meeting",
        "description": "Attend the team meeting to discuss project updates.",
        "date": "2024-10-23",
        "category": "Meetings",
        "active": false,
        "newtask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Update website",
        "description": "Make updates to the company website.",
        "date": "2024-10-25",
        "category": "Development",
        "active": true,
        "newtask": false,
        "completed": false,
        "failed": true
      }
    ],
    "taskCount": {
      "active": 1,
      "completed": 0,
      "newtask": 1,
      "failed": 1
    }
  },
  {
    "id": 2,
    "firstName": "Rajesh",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Prepare presentation",
        "description": "Create a presentation for the upcoming client meeting.",
        "date": "2024-10-24",
        "category": "Client",
        "active": true,
        "newtask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Send email updates",
        "description": "Send weekly updates to all clients.",
        "date": "2024-10-26",
        "category": "Communication",
        "active": false,
        "newtask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Research market trends",
        "description": "Conduct research on the latest market trends.",
        "date": "2024-10-27",
        "category": "Research",
        "active": true,
        "newtask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 1,
      "completed": 1,
      "newtask": 1,
      "failed": 0
    }
  },
  {
    "id": 3,
    "firstName": "Sneha",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Organize files",
        "description": "Sort and organize important company files.",
        "date": "2024-10-22",
        "category": "Administration",
        "active": false,
        "newtask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Database backup",
        "description": "Backup all company databases.",
        "date": "2024-10-24",
        "category": "IT",
        "active": true,
        "newtask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Fix server issues",
        "description": "Resolve any pending server problems.",
        "date": "2024-10-25",
        "category": "IT",
        "active": false,
        "newtask": false,
        "completed": false,
        "failed": true
      }
    ],
    "taskCount": {
      "active": 1,
      "completed": 1,
      "newtask": 1,
      "failed": 0 
    }
  },
  {
    "id": 4,
    "firstName": "Priya",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Client feedback",
        "description": "Follow up on client feedback from last week's meeting.",
        "date": "2024-10-22",
        "category": "Client",
        "active": true,
        "newtask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Update inventory",
        "description": "Ensure all items are updated in the inventory system.",
        "date": "2024-10-23",
        "category": "Inventory",
        "active": false,
        "newtask": true,
        "completed": false,
        "failed": true
      },
      {
        "title": "Schedule maintenance",
        "description": "Schedule system maintenance for next week.",
        "date": "2024-10-24",
        "category": "Maintenance",
        "active": true,
        "newtask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 2,
      "completed": 0,
      "newtask": 1,
      "failed": 1
    }
  },
  {
    "id": 5,
    "firstName": "Ananya",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Design new logo",
        "description": "Create a new logo for the company's rebranding.",
        "date": "2024-10-22",
        "category": "Design",
        "active": false,
        "newtask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Create marketing materials",
        "description": "Design and print new marketing materials.",
        "date": "2024-10-24",
        "category": "Marketing",
        "active": true,
        "newtask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Social media strategy",
        "description": "Develop a social media strategy for the next quarter.",
        "date": "2024-10-25",
        "category": "Marketing",
        "active": true,
        "newtask": false,
        "completed": false,
        "failed": true
      }
    ],
    "taskCount": {
      "active": 1,
      "completed": 1,
      "newtask": 1,
      "failed": 1
    }
  }
];
 /*const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  ];*/

export const setLocalStorage=()=>{
  localStorage.setItem('employees', JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin))


}
export const getLocalStorage = ()=>{
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))

  return {employees, admin}
}

