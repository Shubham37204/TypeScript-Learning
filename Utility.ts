//eg1 : Partial
type Persons = {
    name: string;
    age: number;
};

const updatePerson = (persons: Partial<Persons>) => {
    // can send only one field, not both
    if (persons.name) console.log(persons.name);
};

//eg2: Read Only
type Todo = {
    title: string;
};

const myTodo: Readonly<Todo> = { title: "Learn TS" }

//eg3: Record Type
// Record<K, T> is a utility type that creates an object type with:
// Keys of type K
// Values of type T

interface PageInfo {
    title: string;
}

const pages: Record<string, PageInfo> = {
    home: { title: "Home" },
    about: { title: "About" },
    contact: { title: "Contact" }
}

const pageNumber: Record<string, PageInfo> = {
    0: { title: "Home" },
    1: { title: "About" },
    2: { title: "Contact" }
}

//eg4 : Pick
interface Todos {
  id: number;
  title: string;
  completed: boolean;
}

//This means:
// ✂️ "Pick only the title,completed field from the Todos type"
type TodoPreview = Pick<Todos, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed:true
};


//eg5 : omit
interface TodoList {
  id: number;
  title: string;
  completed: boolean;
}

//This means:
// ✂️ "Pick only the title,completed field from the Todos type"
type TodoPreview1 = Omit<TodoList, "id">;

const todo1: TodoPreview1 = {
  title: "Clean room",
  completed:true
};
