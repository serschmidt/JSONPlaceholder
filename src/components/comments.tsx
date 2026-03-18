import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export function Comments() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments?_limit=12")
      .then(res => res.json() as Promise<Comment[]>)
      .then(setComments)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="p-4">Lade Comments...</p>;
  if (error) return <p className="p-4 text-red-500">Fehler: {error}</p>;

  return (
    <div className="grid gap-4 p-4 md:grid-cols-2">
      {comments.map((comment) => (
        <Card key={comment.id}>
          <CardHeader>
            <CardTitle>{comment.name}</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <p className="line-clamp-4">{comment.body}</p>
            <p className="text-xs text-muted-foreground mt-2">
              {comment.email} · Post #{comment.postId}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
