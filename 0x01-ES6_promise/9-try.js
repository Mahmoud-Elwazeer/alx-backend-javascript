export default function guardrail(mathFunction) {
  const queue = [];
  try {
    queue.push(mathFunction());
  } catch (err) {
    queue.push(String(err));
  }
  queue.push('Guardrail was processed');
  return queue;
}
