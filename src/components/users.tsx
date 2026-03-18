import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

type Geo = {
  lat: string;
  lng: string;
};

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

export function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) throw new Error("Fehler beim Laden der Users");
        return response.json() as Promise<User[]>;
      })
      .then((json) => {
        setUsers(json);
        setLoading(false);
      })
      .catch((err: unknown) => {
        setError(err instanceof Error ? err.message : "Unbekannter Fehler");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="p-4">Lade Users...</p>;
  }

  if (error) {
    return (
      <p className="p-4 text-red-500">
        Fehler: {error}
      </p>
    );
  }

  return (
    <div className="grid gap-4 p-4 md:grid-cols-2 xl:grid-cols-3">
      {users.map((user) => (
        <Card key={user.id}>
          <CardHeader>
            <CardTitle>{user.name}</CardTitle>
            <CardDescription>
              @{user.username} · {user.email}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-1 text-sm">
            <p>
              <span className="font-medium">Adresse:</span>{" "}
              {user.address.street}, {user.address.suite}, {user.address.zipcode} {user.address.city}
            </p>
            <p>
              <span className="font-medium">Telefon:</span> {user.phone}
            </p>
            <p>
              <span className="font-medium">Website:</span> {user.website}
            </p>
            <p>
              <span className="font-medium">Firma:</span> {user.company.name}
            </p>
            <p className="text-muted-foreground">
              {user.company.catchPhrase}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
