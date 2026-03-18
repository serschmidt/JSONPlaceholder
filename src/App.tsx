// src/App.tsx
import "./App.css";
import { Users } from "@/components/users";
import { Posts } from "@/components/posts";
import { Comments } from "@/components/comments";
import { Albums } from "@/components/albums";
import { Photos } from "@/components/photos";
import { Todos } from "@/components/todos";
import { Search } from "lucide-react"; // Icon (npm i lucide-react)
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { useState } from "react";

function App() {
  const [activeView, setActiveView] = useState<
    "users" | "posts" | "comments" | "albums" | "photos" | "todos" | "none"
  >("none");

  return (
    <div className="app-root">
      {/* Header mit Suchleiste mittig */}
      <header className="app-header">
        <h1 className="flex-1">Meine App</h1>

        {/* Suchleiste mittig */}
        <div className="w-64 mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Suche Users, Posts..."
              className="pl-10 w-full"
            />
          </div>
        </div>
      </header>

      <div className="app-body">
        <aside className="app-sidebar">
          <nav>
            <ul className="space-y-1 p-2">
              <li>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => setActiveView("users")}
                >
                  <img
                    src="/assets/user-16-solid.png"
                    alt="User"
                    className="mr-2 h-4 w-4"
                  />
                  <span>Users</span>
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => setActiveView("posts")}
                >
                  <img
                    src="/assets/post-add-rounded.png"
                    alt="Posts"
                    className="mr-2 h-4 w-4"
                  />
                  <span>Posts</span>
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => setActiveView("comments")}
                >
                  <img
                    src="/assets/mode-comment-outline.png"
                    alt="Comments"
                    className="mr-2 h-4 w-4"
                  />
                  <span>Comments</span>
                </Button>
              </li>
              <li>
                <Button
                  size="icon-lg"
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => setActiveView("albums")}
                >
                  <img
                    src="/assets/task-alt-rounded.png"
                    alt="Albums"
                    className="mr-2 h-4 w-4"
                  />
                  <span>Albums</span>
                </Button>
              </li>
              <li>
                <Button
                  size="icon-lg"
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => setActiveView("photos")}
                >
                  <img
                    src="/assets/photo-solid.png"
                    alt="Photos"
                    className="mr-2 h-4 w-4"
                  />
                  <span>Photos</span>
                </Button>
              </li>
              <li>
                <Button
                  size="icon-lg"
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => setActiveView("todos")}
                >
                  <img
                    src="/assets/task-alt-rounded.png"
                    alt="ToDos"
                    className="mr-2 h-4 w-4"
                  />
                  <span>ToDos</span>
                </Button>
              </li>
            </ul>
          </nav>
        </aside>

        <main className="app-main">
          {activeView === "users" && <Users />}
          {activeView === "posts" && <Posts />}
          {activeView === "comments" && <Comments />}
          {activeView === "albums" && <Albums />}
          {activeView === "photos" && <Photos />}
          {activeView === "todos" && <Todos />}
          {activeView === "none" && (
            <>
              <h2>JSONPlaceholder</h2>
              <p>Bitte links eine Kategorie auswählen.</p>
            </>
          )}
        </main>

        <footer className="app-footer">
          <small>© 2026 Meine App</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
