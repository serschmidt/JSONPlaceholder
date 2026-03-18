import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CheckCircle, Circle } from "lucide-react";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export function Todos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=12")
      .then(res => res.json() as Promise<Todo[]>)
      .then(setTodos)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="p-4">Lade Todos...</p>;
  if (error) return <p className="p-4 text-red-500">Fehler: {error}</p>;

  return (
    <div className="grid gap-4 p-4 md:grid-cols-2">
      {todos.map((todo) => (
        <Card key={todo.id}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-base line-clamp-1">{todo.title}</CardTitle>
            {todo.completed ? (
              <CheckCircle className="h-5 w-5 text-green-500" />
            ) : (
              <Circle className="h-5 w-5 text-muted-foreground" />
            )}
          </CardHeader>
          <CardContent className="text-sm">
            <p className="text-xs text-muted-foreground">User ID: {todo.userId}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
