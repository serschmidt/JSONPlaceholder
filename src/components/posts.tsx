import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=12")
      .then(res => res.json() as Promise<Post[]>)
      .then(setPosts)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="p-4">Lade Posts...</p>;
  if (error) return <p className="p-4 text-red-500">Fehler: {error}</p>;

  return (
    <div className="grid gap-4 p-4 md:grid-cols-2">
      {posts.map((post) => (
        <Card key={post.id}>
          <CardHeader>
            <CardTitle className="line-clamp-2">{post.title}</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <p className="line-clamp-4">{post.body}</p>
            <p className="text-xs text-muted-foreground mt-2">User ID: {post.userId}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
