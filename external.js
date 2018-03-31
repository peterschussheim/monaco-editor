import * as monaco from "monaco-editor";

self.MonacoEnvironment = {
  getWorkerUrl: function(moduleId, label) {
    if (label === "json") {
      return "./dist/external/json.worker.js";
    }
    if (label === "css") {
      return "./dist/external/css.worker.js";
    }
    if (label === "html") {
      return "./dist/external/html.worker.js";
    }
    if (label === "typescript" || label === "javascript") {
      return "./dist/external/ts.worker.js";
    }
    return "./dist/external/editor.worker.js";
  }
};

// args:
// opts
// editor
export default class Monaco {

  constructor(opts) {
    this.opts = opts;
  }

  appendToLocalElement(node) {
    this.editor = monaco.editor.create(node, this.opts);
  }

  get monaco() {
    return this.editor;
  }

  replaceDocument(doc) {
    this.editor.setModel(doc);
  }
}
