import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

type Album = {
  userId: number;
  id: number;
  title: string;
};

export function Albums() {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums?_limit=12")
      .then(res => res.json() as Promise<Album[]>)
      .then(setAlbums)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="p-4">Lade Albums...</p>;
  if (error) return <p className="p-4 text-red-500">Fehler: {error}</p>;

  return (
    <div className="grid gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
      {albums.map((album) => (
        <Card key={album.id}>
          <CardHeader>
            <CardTitle>{album.title}</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <p className="text-muted-foreground">Album #{album.id}</p>
            <p>User ID: {album.userId}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
