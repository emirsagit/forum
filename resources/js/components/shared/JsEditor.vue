<template>
  <div class="demo">
    <editor ref="editor" :config="config" :initialized="onInitialized" />
  </div>
</template>

<script>
import { Editor } from "vue-editor-js";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import CodeTool from "@editorjs/code";
import Paragraph from "@editorjs/paragraph";
import Embed from "@editorjs/embed";
import Table from "@editorjs/table";
import Quote from "@editorjs/quote";
import InlineCode from "@editorjs/inline-code";
import Delimiter from "@editorjs/delimiter";
import Image from "@editorjs/image";
const ajax = require("@codexteam/ajax");

export default {
  props: ["default"],
  components: {
    Editor,
  },
  data() {
    return {
      file: "",
      config: {
        autofocus: true,
        tools: {
          header: {
            class: Header,
            config: {
              placeholder: "Enter a header",
              levels: [2, 3, 4],
              defaultLevel: 3,
            },
          },
          list: {
            class: List,
            inlineToolbar: true,
          },
          code: {
            class: CodeTool,
          },
          paragraph: {
            class: Paragraph, 
          },
          embed: {
            class: Embed,
            config: {
              services: {
                youtube: true,
                coub: true,
                imgur: true,
              },
            },
          },
          table: {
            class: Table,
            inlineToolbar: true,
            config: {
              rows: 2,
              cols: 3,
            },
          },
          quote: {
            class: Quote,
            inlineToolbar: true,
            shortcut: "CMD+SHIFT+O",
            config: {
              quotePlaceholder: "Enter a quote",
              captionPlaceholder: "Quote's author",
            },
          },
          inlineCode: {
            class: InlineCode,
            shortcut: "CMD+SHIFT+M",
          },
          delimiter: Delimiter,
          image: {
            class: Image,
            config: {
              /**
               * Custom uploader
               */
              uploader: {
                /**
                 * Upload file to the server and return an uploaded image data
                 * @param {File} file - file selected from the device or pasted by drag-n-drop
                 * @return {Promise.<{success, file: {url}}>}
                 */
                uploadByFile(file) {
                  const params = {
                    url: "/api/thread/upload/images",
                    data: {
                      file: file,
                    },
                    headers: {
                      "X-CSRF-TOKEN": document
                        .querySelector('meta[name="csrf-token"]')
                        .getAttribute("content"),
                    },
                    /** Choose the content type you need */
                    // type: ajax.contentType.JSON,
                    // type: ajax.contentType.URLENCODED
                    type: ajax.contentType.FORM,
                  };

                  return ajax.post(params).then((response) => {
                    console.log(response);
                    return {
                      success: response.body.success,
                      file: {
                        url: response.body.file.url,
                      },
                    };
                  });
                },
              },
            },
          },
        },
        onChange: (args) => {},
        data: {
          time: this.default ? this.default.time : "",
          blocks: this.default ? this.default.blocks : "",
          version: this.default ? this.default.version : "",
        },
      },
    };
  },
  methods: {
    onInitialized(editor) {
      this.$emit("onInitialized", editor);
    },
  },
};
</script>

<style>
</style>