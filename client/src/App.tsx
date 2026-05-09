import { useEffect } from "react";
import { Switch, Route } from "wouter";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import { projects } from "@/data/projects";

function Router() {
  return (
    <Switch>
      <Route path="/Portfolio" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    const imageUrls = [
      ...projects.map(p => p.image),
      "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
      "https://bkarthik7.github.io/terminal-portfolio/BKarthik.png"
    ];
    imageUrls.forEach(url => {
      const img = new Image();
      img.src = url;
    });
  }, []);

  return <Router />;
}

export default App;
