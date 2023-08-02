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
export default function Privacy({ mdxSource }) {
  return (
    <article className="container mt-5 mb-5 mx-auto prose lg:prose-xl  shadow-lg">
      <div className="lead w-4/5 prose prose-slate mx-auto lg:prose-lg pt-10 pb-20">
        <MarkdownViewer source={mdxSource} />
      </div>
    </article>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(),'public', '../public/docs/privacy.md');
  const markdownContent = await readMarkdownFile(filePath);

  if (!markdownContent) {
    return {
      notFound: true,
    };
  }

  const mdxSource = await serialize(markdownContent);
  console.log(mdxSource.compiledSource)
  return {
    props: {
      mdxSource,
    },
  };
}