const tsTemplateJson = require("../snippets/typescript.json");

class TsTemplateRegistrar {
  provideCompletionItems(editor, context) {
    const snippets = [];

    for (let snippet in tsTemplateJson) {
      const item = new CompletionItem(
        tsTemplateJson[snippet].prefix,
        CompletionItemKind.Tag
      );

      item.documentation = tsTemplateJson[snippet].description;
      item.insertText = tsTemplateJson[snippet].body.join("\n");
      item.insertTextFormat = InsertTextFormat.Snippet;

      snippets.push(item);
    }

    return snippets;
  }
}

nova.assistants.registerCompletionAssistant(
  "typescript",
  new TsTemplateRegistrar()
);

module.exports = TsTemplateRegistrar;
