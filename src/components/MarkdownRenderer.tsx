import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';
import styles from './MarkdownRenderer.module.css';

interface MarkdownRendererProps {
  filePath: string;
}

export default async function MarkdownRenderer({ filePath }: MarkdownRendererProps) {
  const fullPath = path.join(process.cwd(), filePath);
  const markdown = fs.readFileSync(fullPath, 'utf-8');
  const processedContent = await remark().use(html).process(markdown);
  const contentHtml = processedContent.toString();

  return (
    <article className={styles.markdownContent} dangerouslySetInnerHTML={{ __html: contentHtml }} />
  );
}
