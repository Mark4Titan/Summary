// imports
import { create } from "zustand";

export type len = "SummaryEN" | "SummaryUA" | "SummaryDEU";
export type prev = "Desktop" | "Tablet" | "Mobile";
export type themes =
  | { lightStyle: "Light" }
  | { darkStyle: "Dark" }
  | { modernStyle: "Patriotic" };

// settings
interface PGlobalState {
  burger: boolean;
  BurgerChenge: (b: boolean) => void;
  BurgerNext: () => void;
  //
  language: len;
  LanguageNext: (l: len) => void;
  //
  preview: prev;
  PreviewNext: (p: prev) => void;
  //
  theme: themes;
  ThemeNext: (t: themes) => void;
  //
  print: boolean;
  Print: () => void;
}

// ()=>{}
const GlobalState = create<PGlobalState>((set, get) => ({
  burger: false,
  language: "SummaryEN" as len,
  preview: "Desktop" as prev,
  theme: { lightStyle: "Light" } as themes,
  print: false,

  //
  Print: () => {
    set({
      print: !get().print,
    });
  },

  //
  BurgerChenge: (b) => {
    set({
      burger: b,
    });
  },
  BurgerNext: () => {
    get().BurgerChenge(!get().burger);
  },
  //
  LanguageNext: (l) => {
    set({
      language: l,
    });
  },
  //
  PreviewNext: (p) => {
    set({
      preview: p,
    });
  },
  //
  ThemeNext: (t) => {
    set({
      theme: t,
    });
  },
}));
export default GlobalState;
