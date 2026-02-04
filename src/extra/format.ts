import { Prisma } from "../generated/prisma/client.js";

export default function format(tasks: Prisma.TaskGetPayload<{}>[]) {
  return tasks.map((task) => `${task.text} [${task.id}]`).join("\n\n");
}
