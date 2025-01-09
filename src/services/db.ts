import { PrismaClient } from "@prisma/client";

export class DB {
  prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async addTask(text: string) {
    return this.prisma.task.create({
      data: {
        text: text,
        done: false,
      },
    });
  }

  async deleteTask(taskId: number) {
    return this.prisma.task.delete({
      where: {
        id: taskId,
      },
    });
  }

  async getAllTasks() {
    return this.prisma.task.findMany({
      where: {
        done: false,
      },
      orderBy: {
        id: "asc",
      },
    });
  }

  async getRandomTask() {
    const tasks = await this.prisma.task.findMany({
      where: {
        done: false,
      },
    });
    if (tasks.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * tasks.length);
    return tasks[randomIndex];
  }

  async getOldestTask() {
    return this.prisma.task.findFirst({
      where: {
        done: false,
      },
      orderBy: {
        id: "asc",
      },
    });
  }

  async markAsDone(taskId: number) {
    return this.prisma.task.update({
      where: {
        id: taskId,
      },
      data: {
        done: true,
      },
    });
  }

  async markAsUndone(taskId: number) {
    return this.prisma.task.update({
      where: {
        id: taskId,
      },
      data: {
        done: false,
      },
    });
  }
}
const db = new DB();

export default db;
