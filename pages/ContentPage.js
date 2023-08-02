import fs from 'fs';
import path from 'path';
import remark from 'remark';
import html from 'remark-html';

export function ContentPage({ content }) {
    return <div dangerouslySetInnerHTML={{ __html: content }} />;
}

export async function getServerSideProps() {
    const filePath = path.join(process.cwd(), 'public', 'docs/privacy.md');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const processedContent = await remark().use(html).process(fileContent);
    const content = processedContent.toString();
  
    return {
      props: {
        content,
      },
    };
}
export default ContentPage;