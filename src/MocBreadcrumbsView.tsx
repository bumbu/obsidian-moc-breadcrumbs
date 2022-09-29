import { ItemView, WorkspaceLeaf } from "obsidian";
import MocBreadcrumbsPlugin from "../main";
import { VIEW_TYPE_MOC_BREADCRUMBS } from "./constants";
import React from "react";
import ReactDOM from "react-dom";
import { MocBreadcrumbs } from "./ui/MocBreadcrumbs";
import { createRoot } from "react-dom/client";

export class MocBreadcrumbsView extends ItemView {
  private readonly plugin: MocBreadcrumbsPlugin;

  constructor(leaf: WorkspaceLeaf, plugin: MocBreadcrumbsPlugin) {
    super(leaf);
    this.plugin = plugin;
  }

  getDisplayText(): string {
    return "MOC Breadcrumbs";
  }

  getViewType(): string {
    return VIEW_TYPE_MOC_BREADCRUMBS;
  }

  getIcon(): string {
    return "up-arrow-with-tail";
  }

  async onOpen(): Promise<void> {
    const root = createRoot(this.contentEl);
    root.render(
      <React.StrictMode>
        <MocBreadcrumbs plugin={this.plugin} />
      </React.StrictMode>
    );
  }
}


