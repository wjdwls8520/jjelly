import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/toastui-editor.css';

export default function ToastUiEditor() {


    // editor.getHtml()을 사용해서 에디터 내용 받아오기
    // see1 = function() {
    //     console.log(editor.getHTML());
    // }
    // see2 = function() {
    //     console.log(editor.getMarkdown());
    // }

    return (
        <Editor
            initialValue="hello react editor world!"
            previewStyle="vertical"
            height="500px"
            initialEditType="wysiwyg"
            useCommandShortcut={false}
            hideModeSwitch
        />
    )
};