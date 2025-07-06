import { defineConfig } from 'dumi';

export default defineConfig({
  apiParser: {},
  resolve: {
    entryFile: 'src/index.ts',
  },
  outputPath: 'docs-dist',
  themeConfig: {
    // name: '@sakura-flutter/handsontable-vue3',
    showLineNum: true,
    prefersColor: { default: 'auto' },
    socialLinks: {
      github: 'https://github.com/sakura-flutter/handsontable-vue3',
    },
  },
  presets: [require.resolve('@dumijs/preset-vue')],
  locales: [
    { id: 'zh-CN', name: '中文' },
    { id: 'en-US', name: 'EN' },
  ],
});
