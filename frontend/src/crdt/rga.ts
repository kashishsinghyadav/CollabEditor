
export interface CRDTNode {
  id: string;
  value: string;
  parentId: string | null;
  visible: boolean;
}

export class RGA {
  private nodes: CRDTNode[] = [];

  insertAfter(parentId: string | null, value: string, id: string): CRDTNode {
    const node: CRDTNode = { id, value, parentId, visible: true };
    const index = parentId
      ? this.nodes.findIndex(n => n.id === parentId) + 1
      : 0;
    this.nodes.splice(index, 0, node);
    return node;
  }

  delete(id: string) {
    const node = this.nodes.find(n => n.id === id);
    if (node) node.visible = false;
  }

  getVisibleText(): string {
    return this.nodes.filter(n => n.visible).map(n => n.value).join('');
  }

  apply(node: CRDTNode) {
    const exists = this.nodes.find(n => n.id === node.id);
    if (!exists) this.insertAfter(node.parentId, node.value, node.id);
  }

  getState(): CRDTNode[] {
    return this.nodes;
  }
}
