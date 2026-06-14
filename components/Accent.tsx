// Emphasized words rendered in the accent font (serif italic). Use anywhere,
// either directly or via next-intl t.rich with an `accent` tag:
//   t.rich("key", { accent: (c) => <Accent>{c}</Accent> })
export default function Accent({ children }: { children: React.ReactNode }) {
  return <span className="font-accent gold-text italic">{children}</span>;
}
