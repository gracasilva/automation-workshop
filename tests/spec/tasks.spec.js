import { test } from '@playwright/test';
import { TasksPage } from '../pages/tasks.page';
import { TASK_CASES } from '../data/tasks.data';

test.describe('TASKS - DESKTOP', () => {
  test.beforeEach(async ({ page }) => {
    const tasks = new TasksPage(page);
    await tasks.navigateToTasks();
  });

  test('add task', async ({ page }) => {
    const tasks = new TasksPage(page);
    const todoTaskInput = TASK_CASES.ADD.text;

    // Add first task
    await tasks.addTask(todoTaskInput);
    await tasks.expectTaskVisibleDesktop(1, todoTaskInput);
    await tasks.expectPriorityDesktop(1,1);

    // Add second task
    await tasks.addTask(todoTaskInput);
    await tasks.expectTaskVisibleDesktop(2, todoTaskInput);
    await tasks.expectPriorityDesktop(2,2);
  });

  test('add empty task', async ({ page }) => {
    const tasks = new TasksPage(page);
  });

  test('edit task', async ({ page }) => {
    const tasks = new TasksPage(page);
  });

  test('cancel edit', async ({ page }) => {
    const tasks = new TasksPage(page);
  });

  test('complete task', async ({ page }) => {
    const tasks = new TasksPage(page);
  });

  test('sequence ids', async ({ page }) => {
    const tasks = new TasksPage(page);
  });

  test('reorder drag & drop', async ({ page }) => {
    const tasks = new TasksPage(page);
  });
});
