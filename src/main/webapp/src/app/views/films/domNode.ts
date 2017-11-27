export class DomNode {
  tag: string | undefined;
  attributes: {
    [key: string]: string;
  };
  content: DomNode[];
  text?: string;
}
