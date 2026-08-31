# UI Forma App

A clean React workspace for designing the next UI Forma application shell with the shared UI Forma Kit.

## First clone

The kit is included as a Git submodule. Clone both repositories together:

```bash
git clone --recurse-submodules git@github.com:XileHorizon/UI-Forma-App.git
cd UI-Forma-App
npm install
npm run dev
```

If the app was cloned without submodules:

```bash
git submodule update --init --recursive
npm install
```

`npm install` also initializes the kit automatically, as long as Git can access the private
`XileHorizon/UIFormaKit` repository.

## Use the kit

Import the shared stylesheet once in `src/main.tsx`:

```tsx
import "@uiforma/kit/styles.css";
```

Then import components directly:

```tsx
import { Button, Panel, TextField } from "@uiforma/kit";
```

Build visual interactions with local state and sample data. Backend and generator behavior can be wired in after the shell is settled.

## Commands

```bash
npm run dev
npm run typecheck
npm run build
```

## Update the kit

```bash
git submodule update --remote vendor/UIFormaKit
npm install
```
