import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export function Photos() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?_limit=12")
      .then(res => res.json() as Promise<Photo[]>)
      .then(setPhotos)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="p-4">Lade Photos...</p>;
  if (error) return <p className="p-4 text-red-500">Fehler: {error}</p>;

  return (
    <div className="grid gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {photos.map((photo) => (
        <Card key={photo.id} className="overflow-hidden">
          <CardContent className="p-0">
            <img 
              src={photo.thumbnailUrl} 
              alt={photo.title}
              className="w-full h-32 object-cover"
            />
          </CardContent>
          <CardContent className="p-4 pt-0 text-sm">
            <p className="line-clamp-2 font-medium">{photo.title}</p>
            <p className="text-xs text-muted-foreground">Album #{photo.albumId}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
