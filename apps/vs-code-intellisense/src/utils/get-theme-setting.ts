import * as vscode from "vscode";

import { Theme } from "../types";

export const getThemeSetting = (): Theme =>
  (vscode.workspace.getConfiguration("vs-code-intellisense").get("theme") as Theme) ?? "Default";
