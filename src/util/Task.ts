export default class Task {
  private static taskNumbers: number = 0;
  private id: number;
  private title: string;
  private description: string;

  constructor(title: string, description: string) {
    this.id = ++Task.taskNumbers;
    this.title = title;
    this.description = description;
  }

  public getId(): number {
    return this.id;
  }

  public getTitle(): string {
    return this.title;
  }

  public setTitle(title: string): void {
    this.title = title;
  }

  public getDescription(): string {
    return this.description;
  }

  public setDescription(description: string): void {
    this.description = description;
  }
}

export const TAREA_LIST = [
  new Task('cocinar', 'preparar un buen alimento a base de verduras'),
  new Task('leer', 'leer la iliada para el trabajo de lenguaje y literatura'),
  new Task('estudiar React Native', 'estudiar demasiado es el unico camino al éxito'),


];
