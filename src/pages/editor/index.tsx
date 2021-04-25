import React from 'react';
import Editor from '../../components/Editor/index';
import 'codemirror/theme/monokai.css';
import 'codemirror/mode/gfm/gfm';

import './styles/codemirror.css';

const options = {
  value: '### 1',
  theme: 'monokai',
  tabSize: 2,
  mode: 'markdown',
}
function EditorPage() {
  return (
    <div className="Editor">
      <Editor options={options} width="100%" height="100%"/>
    </div>
  );
}

export default EditorPage;