import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ["tasks", "task", "completed"]

  mark_checkbox(event) {
    // salvar o conteúdo em uma variável
    const checkbox = event.target;
    console.log(checkbox)
    if (checkbox.hasAttribute("checked")) {
      this.uncheckSquare(checkbox);
    } else {
      this.checkSquare(checkbox);
    }
    // remover o conteudo das 'task' area
    // inserir o conteúdo nas 'complited' area
  };

  checkSquare(checkbox) {
    checkbox.setAttribute("checked", "")
    const taskElement = checkbox.closest('.my-task');
    console.log(taskElement);
    taskElement.remove();
    const checkedTaskArea = this.completedTarget;
    console.log(taskElement)
    return checkedTaskArea.insertAdjacentHTML("beforeend", taskElement.outerHTML);
  };

  uncheckSquare(checkbox) {
    checkbox.removeAttribute("checked");
    const taskElement = checkbox.closest('.my-task');
    taskElement.remove();
    const checkedTaskArea = this.tasksTarget;
    return checkedTaskArea.insertAdjacentHTML("beforeend", taskElement.outerHTML);
  }
};
