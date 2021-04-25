// @ts-nocheck
import React, { useRef, useEffect, useImperativeHandle } from 'react';

import Muya from '@muya/dist/Muya'
// import EmojiPicker from '../../../muya/lib/ui/emojiPicker'
// import TablePicker from '../../../muya/lib/ui/tablePicker'
// import QuickInsert from '../../../muya/lib/ui/quickInsert'
// import CodePicker from '../../../muya/lib/ui/codePicker'
// import ImagePathPicker from '../../../muya/lib/ui/imagePicker'
// import ImageSelector from '../../../muya/lib/ui/imageSelector'
// import ImageToolbar from '../../../muya/lib/ui/imageToolbar'
// import Transformer from '../../../muya/lib/ui/transformer'
// import FormatPicker from '../../../muya/lib/ui/formatPicker'
// import LinkTools from '../../../muya/lib/ui/linkTools'
// import FootnoteTool from '../../../muya/lib/ui/footnoteTool'
// import TableBarTools from '../../../muya/lib/ui/tableTools'
// import FrontMenu from '../../../muya/lib/ui/frontMenu'


interface Props {
  value?: string;
  width?: string;
  height?: string;
  options?: EditorConfiguration;
  [key: string]: any;
}

function Editor(props: Props, ref: any) {
  const { options = {}, value = '', width = '100%', height = '100%' } = props;
  const textareaRef = useRef();
  useImperativeHandle(ref, () => ({ editor }), [editor]);


  useEffect(() => {
    // 生成codemirror实例
    // Muya.use(TablePicker)
    // // type @ to insert
    // Muya.use(QuickInsert)
    // // insert code语言提示
    // Muya.use(CodePicker)
    // // emoji
    // Muya.use(EmojiPicker)
    // Muya.use(ImagePathPicker)
    // Muya.use(ImageSelector, {
    //   unsplashAccessKey: process.env.UNSPLASH_ACCESS_KEY,
    //   // photoCreatorClick: this.photoCreatorClick
    // })
    // // 点击图片后出现toolbar
    // Muya.use(ImageToolbar)
    // Muya.use(Transformer)
    // Muya.use(FormatPicker)
    // // font menu 是右侧符号点击效果
    // Muya.use(FrontMenu)
    // Muya.use(LinkTools, {
    //   // jumpClick: this.jumpClick
    // })
    // Muya.use(FootnoteTool)
    // Muya.use(TableBarTools)

    const muya = new Muya(textareaRef);
    muya.init()

    muya.on('json-change', (changes: any) => {
      console.log(JSON.stringify(muya.getState(), null, 2));
      console.log(JSON.stringify(changes, null, 2));
    })

    muya.on('selection-change', (changes: { anchor: any; focus: any; path: any; }) => {
      const { anchor, focus, path } = changes;
      console.log(JSON.stringify([anchor.offset, focus.offset, path]));
    })
    return () => {
      // soon
    }
  }, []);

  console.log('options: ', options);
  return (
    <div ref={textareaRef} style={{ width, height, value }}/>
  );
}

export default React.forwardRef(Editor);