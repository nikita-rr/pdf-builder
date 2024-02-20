import { defineStore } from "pinia";
import { ref } from "vue";

export const useBuilderStore = defineStore("BuilderStore", () => {

  const body = ref<any[]>([]);

  let caret: TemplateCaret

  function appendItem(item: TemplateItem) {
    return body.value.push(item);
  }

  function removeItem(item: TemplateItem) {
    body.value = body.value.filter(i => i.id !== item.id);
  }

  function setCaret(сaretData: TemplateCaret) {
    caret = сaretData
  }

  function insertVariable(vardata: any = "#var#") {
    const varElement = document.createElement("div");
    const varContent = document.createTextNode(vardata);
    varElement.appendChild(varContent);
    varElement.style.display = "inline"
    varElement.setAttribute("contenteditable", "false")
    varElement.classList.add("p-1", "mx-1", "border", "border-gray-400", "rounded-md")
    const range = caret.selection.getRangeAt(0)
    if(range) {
      range.insertNode(varElement);
      range.collapse()
    }
  }

  return {
    body,
    appendItem,
    removeItem,
    setCaret,
    insertVariable
  };
});

export interface TemplateItem {
  id: number
  order: number
  type: TemplateItemType
  value: any
}

export enum TemplateItemType {
  TEXT, TITLE, REPORT, REPORT_ITEM, HEADER, RESULT
}

export interface TemplateCaret {
  selection: Selection
  target: HTMLElement
}