const htmlTemplateJson = require("../snippets/html.json");

class HtmlTemplateRegistrar {
  provideCompletionItems(editor, context) {
    const snippets = [];

    for (let snippet in htmlTemplateJson) {
      const item = new CompletionItem(
        htmlTemplateJson[snippet].prefix,
        CompletionItemKind.Tag
      );

      item.documentation = htmlTemplateJson[snippet].description;
      item.insertText = htmlTemplateJson[snippet].body.join("\n");
      item.insertTextFormat = InsertTextFormat.Snippet;

      snippets.push(item);
    }

    return snippets;
  }
}

nova.assistants.registerCompletionAssistant(
  "html",
  new HtmlTemplateRegistrar()
);

module.exports = HtmlTemplateRegistrar;
