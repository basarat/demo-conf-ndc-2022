import { z } from 'zod';

const payloadSchema = z.object({
  todo: z.string()
}).strict();

type Payload = z.infer<typeof payloadSchema>;

let payload: Payload = {
  "todo": "Present at conference"
};

function receive(body: any) {
  const parsed = payloadSchema.safeParse(body);

  if (!parsed.success) {
    console.error(parsed.error);
    return;
  }

  payload.todo = parsed.data.todo;
}
