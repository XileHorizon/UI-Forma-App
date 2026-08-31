import { useState } from "react";
import { Button, Panel, SegmentedControl, TextField } from "@uiforma/kit";

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

      <section className="workspace">
        <Panel
          tone="subtle"
          header={<strong>{view === "build" ? "Editor" : "Preview controls"}</strong>}
          footer={<Button appearance="primary">Primary action</Button>}
        >
          <div className="control-stack">
            <TextField label="Project name" defaultValue="Untitled system" />
            <p className="hint">
              Start replacing this placeholder content with your shell. Keep fake interactions local
              until the layout feels right.
            </p>
          </div>
        </Panel>

        <Panel tone="raised" padding="none" header={<strong>Canvas</strong>}>
          <div className="canvas-placeholder">
            <span>{view === "build" ? "Your workspace goes here" : "Your preview goes here"}</span>
          </div>
        </Panel>
      </section>
    </main>
  );
}
