import ReactMarkdown from "react-markdown";

import styles from "../../index.module.css";

export default function MarkdownRenderer(props: any) {
    const input = `# This is a header`;
    return <ReactMarkdown className={styles.noChakra} children={input} />;
}
