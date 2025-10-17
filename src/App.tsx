import "./App.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function ButtonDemo() {
  return (
    <section className="bg-card/40 rounded-lg border p-4">
      <h2 className="text-muted-foreground text-sm font-medium">Buttons</h2>
      <Button className="mt-3" size="sm">
        Action
      </Button>
    </section>
  );
}

function CardDemo() {
  return (
    <section className="bg-card/40 rounded-lg border p-4">
      <h2 className="text-muted-foreground text-sm font-medium">Card</h2>
      <Card className="mt-3">
        <CardContent className="text-muted-foreground text-sm">
          Example card body.
        </CardContent>
      </Card>
    </section>
  );
}

function MenuDemo() {
  return (
    <section className="bg-card/40 rounded-lg border p-4">
      <h2 className="text-muted-foreground text-sm font-medium">Dropdown</h2>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="sm" variant="outline">
            Open menu
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </section>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <div className="bg-background text-foreground min-h-screen">
        <header className="bg-card/40 border-b">
          <div className="mx-auto flex w-full max-w-4xl items-center justify-between gap-4 px-6 py-4">
            <div>
              <h1 className="text-2xl font-semibold">React + shadcn starter</h1>
              <p className="text-md text-muted-foreground">
                Minimal layout with theme toggle and sample components.
              </p>
            </div>
            <ModeToggle />
          </div>
        </header>
        <main className="mx-auto grid w-full max-w-4xl flex-1 gap-6 px-6 py-10 md:grid-cols-3">
          <ButtonDemo />
          <CardDemo />
          <MenuDemo />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
