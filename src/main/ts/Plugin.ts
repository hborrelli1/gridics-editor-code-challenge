import { Editor, TinyMCE } from 'tinymce';

declare const tinymce: TinyMCE;

const setup = (editor: Editor, url: string): void => {
  editor.ui.registry.addButton('gridics-editor-code-challenge', {
    text: 'gridics-editor-code-challenge button',
    onAction: () => {
      editor.setContent('<p>content added from gridics-editor-code-challenge</p>');
    }
  });
};

export default (): void => {
  tinymce.PluginManager.add('gridics-editor-code-challenge', setup);
};
