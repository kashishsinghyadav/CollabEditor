
export type CRDTOp = {
  id: string;
  value: string;
  parentId: string | null;
};

export function connectSocket(
  onRemoteInsert: (op: CRDTOp) => void
) {
  console.log('[Socket] Mock connected');

  setTimeout(() => {
    onRemoteInsert({ id: 'remote-1', value: '👋', parentId: null });
  }, 3000);
}

export function sendOp(op: CRDTOp) {
  console.log('[Socket] Sent op:', op);
}
