import fs from 'fs';
import path from 'path';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html';

export default function ContentMarkdown({ content }) {
  return (
    <div className="p-4 grid align-middle text-left">
        <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export async function getStaticProps(file) {
  const filePath = path.join(process.cwd(), 'public', file);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const processedContent = await unified().use(remarkParse).use(remarkHtml).process(fileContent);
  const content = processedContent.toString();

  return {
    props: {
      content,
    },
  };
}