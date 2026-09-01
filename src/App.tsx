import { useState } from "react";
import { Button, Panel, SegmentedControl, TextField, Sidebar, SplitPane } from "@uiforma/kit";
import { IconPalette, IconSunMoon, IconTags, IconPuzzle, IconTypography, IconPuzzle2, IconBrush, IconShieldCheck, IconPlugConnected, IconFileUpload, IconPick} from "@tabler/icons-react";
const views = [
  { value: "build", label: "Build" },
  { value: "preview", label: "Preview" },
] as const;

export function App() {
  const [view, setView] = useState<"build" | "preview">("build");

  return (
    <main className="app-shell">
      <header className="app-header">
        <div>
          <span className="eyebrow">UI Forma</span>
          <h1>New application shell</h1>
        </div>
        <SegmentedControl
          label="Workspace view"
          value={view}
          items={[...views]}
          onValueChange={setView}
        />
      </header>
      <Sidebar
        className="main-toolbar"
        label="Main navigation"
        side="left"
        size="narrow"
      >
          <p>Start</p>
          <Button appearance="surface" size="huge" leadingIcon={<IconPalette/>} ></Button>
          <Button appearance="surface" size="huge" leadingIcon={<IconSunMoon/>} ></Button>
          <Button appearance="surface" size="huge" leadingIcon={<IconTags/>} ></Button>
          <p>Build</p>
          <Button appearance="surface" size="huge" leadingIcon={<IconPuzzle/>} ></Button>
          <Button appearance="surface" size="huge" leadingIcon={<IconTypography/>} ></Button>
          <p>Style</p>
          <Button appearance="surface" size="huge" leadingIcon={<IconPuzzle2/>} ></Button>
          <Button appearance="surface" size="huge" leadingIcon={<IconBrush/>} ></Button>
          <p>Finish</p>
          <Button appearance="surface" size="huge" leadingIcon={<IconShieldCheck/>} ></Button>
          <Button appearance="surface" size="huge" leadingIcon={<IconPlugConnected/>} ></Button>
          <Button appearance="surface" size="huge" leadingIcon={<IconFileUpload/>} ></Button>
          <Button appearance="surface" size="huge" leadingIcon={<IconPick/>} ></Button>
      </Sidebar>
     <Sidebar
        label="Main navigation"
        side="right"
        size="narrow"

        header={
          <div>
            <strong>uiForma</strong>
          </div>
        }
        footer={
          <button>Settings</button>
        }
      >
        <nav>
          <Button appearance="primary" size="huge"></Button>
          <Button appearance="primary" size="huge"></Button>
          <Button appearance="primary" size="huge"></Button>
        </nav>
      </Sidebar>

      <section className="workspace">
      
      </section>
    </main>
  );
}
