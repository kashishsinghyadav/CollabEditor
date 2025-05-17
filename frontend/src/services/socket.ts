export type CRDTOp = {
  id: string;
  value: string;
  parentId: string | null;
  visible: boolean;
};

export function connectSocket(
  onRemoteInsert: (op: CRDTOp) => void
) {
  console.log('[Socket] Mock connected');

  // Simulated incoming CRDT op
  setTimeout(() => {
    onRemoteInsert({
      id: 'remote-1',
      value: '👋',
      parentId: null,
      visible: true, // ✅ Required by CRDTNode
    });
  }, 3000);
}

export function sendOp(op: CRDTOp) {
  console.log('[Socket] Sent op:', op);
}
