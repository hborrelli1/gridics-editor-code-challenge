import { TinyAssertions, TinyHooks, TinyUiActions } from '@ephox/mcagar';

import Plugin from '../../../main/ts/Plugin';

// This an example of a browser test of the editor.
describe('browser.PluginTest', () => {
  const hook = TinyHooks.bddSetup({
    plugins: 'gridics-editor-code-challenge',
    toolbar: 'gridics-editor-code-challenge'
  }, [ Plugin ]);

  it('test click on button', () => {
    const editor = hook.editor();
    TinyUiActions.clickOnToolbar(editor, 'button:contains("gridics-editor-code-challenge button")');
    TinyAssertions.assertContent(editor, '<p>content added from gridics-editor-code-challenge</p>');
  });
});
