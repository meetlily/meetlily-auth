import fs from 'fs';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';


// Function to read the Markdown file
const readMarkdownFile = async (filePath) => {
  try {
    const fileContent = await fs.promises.readFile(filePath, 'utf-8');
    return fileContent;
  } catch (error) {
    console.error('Error reading Markdown file:', error);
    return null;
  }
};

// Component to render the Markdown
const MarkdownViewer = ({ source }) => {
  return <MDXRemote {...source} />;
};

// Usage
export default function Terms({ mdxSource }) {
  return (
    <article className="container mb-2 mx-auto p-4 prose lg:prose-xl">
      <div className="mt-8 prose prose-slate mx-auto lg:prose-lg">
        <MarkdownViewer source={mdxSource} />
      </div>
    </article>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(),'public', '../public/docs/terms.md');
  const markdownContent = await readMarkdownFile(filePath);

  if (!markdownContent) {
    return {
      notFound: true,
    };
  }

  const mdxSource = await serialize(markdownContent);

  return {
    props: {
      mdxSource,
    },
  };
}